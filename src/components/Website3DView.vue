<template>
    <div>
        <div ref="container" class="absolute inset-0 z-50 bg-darkBg"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

const container = ref(null)
const layerDepth = 30
const scaleFactor = 1

let scene, camera, renderer, controls

onMounted(() => launch3D())

// ---------- helpers for text containers with inline-only children ----------
function hasOwnTextNode(el) {
    // any direct text node with non-whitespace
    for (const n of el.childNodes) {
        if (n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0) return true
    }
    return false
}

function isInlineDisplay(el) {
    const d = window.getComputedStyle(el).display
    return d === 'inline' || d === 'inline-block' || d === 'inline-flex'
}

// treat these as "inline-ish" even if CSS says block (e.g., Tailwind .block)
const INLINEISH = new Set([
    'STRONG', 'B', 'EM', 'I', 'U', 'SPAN', 'SMALL', 'CODE', 'MARK', 'KBD', 'SAMP', 'ABBR', 'SUB', 'SUP'
]);

function hasOnlyInlineChildren(el) {
    if (el.children.length === 0) return true;
    for (const ch of el.children) {
        const t = ch.tagName?.toUpperCase?.() || '';

        // media is never inline-ish for our purposes
        if (['IMG', 'SVG', 'CANVAS', 'VIDEO', 'PICTURE', 'SOURCE'].includes(t)) return false;

        // semantic inline-ish always allowed (even if styled block)
        if (INLINEISH.has(t)) continue;

        // otherwise fall back to real CSS inline checks
        const d = window.getComputedStyle(ch).display;
        if (!['inline', 'inline-block', 'inline-flex'].includes(d)) return false;
    }
    return true;
}
// --------------------------------------------------------------------------

function getElementsFlat(root = document.body, baseZ = 0) {
  const elems = [];

  // semantic inline no matter what CSS says
  const INLINEISH = new Set(['STRONG','B','EM','I','U','SPAN','SMALL','CODE','MARK','KBD','SAMP','ABBR','SUB','SUP']);

  const isInlineDisplay = (el) => {
    const d = window.getComputedStyle(el).display;
    return d === 'inline' || d === 'inline-block' || d === 'inline-flex';
  };

  const isInlineish = (el) => {
    const tag = el.tagName?.toUpperCase?.() || '';
    if (INLINEISH.has(tag)) return true;          // treat these as inline even if Tailwind makes them block
    return isInlineDisplay(el);
  };

  const hasOwnText = (el) =>
    Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);

  const hasOnlyInlineElementChildren = (el) => {
    const kids = Array.from(el.children);
    if (kids.length === 0) return true;           // text-only is fine
    for (const ch of kids) {
      const t = ch.tagName?.toUpperCase?.() || '';
      // media are never inline-ish for our purposes
      if (['IMG','SVG','CANVAS','VIDEO','PICTURE','SOURCE'].includes(t)) return false;
      if (!isInlineish(ch)) return false;
    }
    return true;
  };

  // Handles the common pattern: <div><strong>Title</strong> trailing text…</div>
  const hasStrongThenText = (el) => {
    const kids = Array.from(el.childNodes);
    let seenStrong = false;
    for (const n of kids) {
      if (n.nodeType === Node.ELEMENT_NODE) {
        const tag = n.tagName?.toUpperCase?.();
        if (tag === 'STRONG' || tag === 'B') seenStrong = true;
      } else if (n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0) {
        if (seenStrong) return true;              // strong/b followed by real text
      }
    }
    return false;
  };

  const walk = (node, currentZ) => {
    if (node.nodeType !== 1) return;
    if (node.closest('.exclude-3d')) return;

    const tag = node.tagName.toUpperCase();
    const cs = window.getComputedStyle(node);
    const position = cs.position;
    const isInline = isInlineDisplay(node);
    const forceInclude = ['IMG','SVG','CANVAS','VIDEO','PICTURE','SOURCE'].includes(tag);

    // Skip fixed overlays
    if (position === 'fixed') return;

    // Treat links-with-svg as one atomic element (avoids double icon/link)
    if (tag === 'A' && node.querySelector('svg')) {
      elems.push({ el: node, z: currentZ });
      return;
    }
    // Span inside link: skip (already covered by atomic link above)
    if (tag === 'SPAN' && node.parentElement?.tagName?.toUpperCase() === 'A') return;

    // Pure SVG is atomic
    if (tag === 'SVG') {
      elems.push({ el: node, z: currentZ });
      return;
    }

    // Atomic inline text blocks (block with own text + only inline-ish children)
    const atomicInline =
      hasOwnText(node) && hasOnlyInlineElementChildren(node) && !isInline;

    // Also treat <strong>Title</strong> + trailing text as atomic
    const atomicStrongText =
      !isInline && hasStrongThenText(node);

    if (atomicInline || atomicStrongText) {
      elems.push({ el: node, z: currentZ });
      return; // do NOT descend: prevents duplicating <strong> and the text
    }

    // Normal rule: include non-inline blocks or forced media
    if (!isInline || forceInclude) {
      elems.push({ el: node, z: currentZ });
    }

    // Recurse into children on next depth
    const childZ = currentZ + layerDepth;
    for (const child of node.children) {
      walk(child, childZ);
    }
  };

  for (const child of root.children) {
    walk(child, baseZ);
  }
  return elems;
}



function cloneFor3D(el) {
    const originalAnimation = el.style.animation
    const originalTransition = el.style.transition
    el.style.animation = 'none'
    el.style.transition = 'none'

    let clone
    if (el instanceof SVGElement) {
        clone = el.cloneNode(true)
        clone.style.position = 'absolute'
        clone.style.transform = ''
        clone.removeAttribute('transform')

        const rect = el.getBoundingClientRect()
        if (!clone.getAttribute('width')) clone.setAttribute('width', rect.width || 0)
        if (!clone.getAttribute('height')) clone.setAttribute('height', rect.height || 0)

        const safeProps = ['opacity', 'fill', 'stroke', 'stroke-width', 'mix-blend-mode', 'filter']
        const computed = window.getComputedStyle(el)
        safeProps.forEach(prop => {
            const val = computed.getPropertyValue(prop)
            if (val) clone.style.setProperty(prop, val, computed.getPropertyPriority(prop))
        })

        if (!(clone instanceof SVGElement)) clone.className = el.className || ''
    } else {
        clone = el.cloneNode(false)
        clone.style.position = 'absolute'
        clone.style.transform = ''

        const computed = window.getComputedStyle(el)
        for (let i = 0; i < computed.length; i++) {
            const prop = computed[i]
            clone.style.setProperty(prop, computed.getPropertyValue(prop), computed.getPropertyPriority(prop))
        }

        const tag = (el.tagName || '').toUpperCase()
        const isClassicTextContainer = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'BUTTON', 'LABEL', 'LI'].includes(tag)

        // NEW: treat blocks that have own text + only-inline children as text containers too
        const inlineOnlyTextBlock = hasOwnTextNode(el) && hasOnlyInlineChildren(el)

        if (isClassicTextContainer || inlineOnlyTextBlock || el.childElementCount === 0) {
            clone.innerHTML = el.innerHTML
        }

        if (!(clone instanceof SVGElement)) clone.className = el.className || ''
    }

    el.style.animation = originalAnimation
    el.style.transition = originalTransition

    return clone
}

function launch3D() {
    const containerEl = container.value
    if (!containerEl) return

    scene = new THREE.Scene()
    const rect = document.body.getBoundingClientRect()

    let glRenderer
    camera = new THREE.PerspectiveCamera(45, containerEl.clientWidth / containerEl.clientHeight, 1, 5000)
    camera.position.set(0, 0, 1500)
    camera.lookAt(0, 0, 0)

    glRenderer = new THREE.WebGLRenderer({ alpha: true })
    glRenderer.setSize(containerEl.clientWidth, containerEl.clientHeight)
    glRenderer.domElement.style.position = 'absolute'
    glRenderer.domElement.style.top = '0'
    containerEl.appendChild(glRenderer.domElement)

    renderer = new CSS3DRenderer()
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight)
    renderer.domElement.style.opacity = '0'
    containerEl.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.1

    const elems = getElementsFlat()
    elems.forEach(({ el, z }) => {
        const clone = cloneFor3D(el)
        const elRect = el.getBoundingClientRect()
        const x = (elRect.left + elRect.width / 2 - (rect.left + rect.width / 2)) * scaleFactor
        const y = -(elRect.top + elRect.height / 2 - (rect.top + rect.height / 2)) * scaleFactor

        const obj = new CSS3DObject(clone)
        obj.position.set(x, y, z)
        obj.scale.set(scaleFactor, scaleFactor, scaleFactor)
        scene.add(obj)

        const computed = window.getComputedStyle(el)
        let bgColor = computed.backgroundColor
        let color = new THREE.Color(0x999999)
        let transparent = true

        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            const match = bgColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([0-9.]+))?\)/)
            if (match) {
                color = new THREE.Color(
                    parseInt(match[1]) / 255,
                    parseInt(match[2]) / 255,
                    parseInt(match[3]) / 255
                )
                transparent = match[4] !== undefined ? parseFloat(match[4]) < 1 : false
            }
        }

        const epsilon = 0.05
        const geometry = new THREE.BoxGeometry(elRect.width, elRect.height, layerDepth)
        const material = new THREE.MeshBasicMaterial({
            color,
            opacity: transparent ? 0.2 : 0.9,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: true
        })
        const box = new THREE.Mesh(geometry, material)
        box.position.set(x, y, z - layerDepth / 2 - epsilon)
        scene.add(box)

        const edges = new THREE.EdgesGeometry(geometry)
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x3b82f6, opacity: 0.15, transparent: true })
        const outline = new THREE.LineSegments(edges, edgeMaterial)
        outline.position.copy(box.position)
        scene.add(outline)
    })

    renderer.domElement.style.transition = 'opacity 0.3s'
    renderer.domElement.style.opacity = '1'

    const animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        glRenderer.render(scene, camera)
        renderer.render(scene, camera)
    }
    animate()
}
</script>


<style scoped>
.bg-darkBg {
    background-color: #0a0a0a;
}
</style>
