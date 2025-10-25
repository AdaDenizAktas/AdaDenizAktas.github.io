<template>
  <div
    ref="btnContainer"
    v-bind="attrs"
    class="fixed bottom-8 right-24 z-[1000] w-24 h-24 cursor-pointer"
    @click="toggle3D"
  ></div>

  <Website3DView v-if="show3D" @close="show3D = false" />
</template>

<script setup>
import { useAttrs, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import Website3DView from './Website3DView.vue'

const attrs = useAttrs()
const show3D = ref(false)
const btnContainer = ref(null)
let renderer, scene, camera, cubeGroup, squareGroup, frame

function toggle3D() {
  show3D.value = !show3D.value
}

onMounted(() => {
  const el = btnContainer.value
  if (!el) return

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 2

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  renderer.setSize(el.clientWidth, el.clientHeight)
  el.appendChild(renderer.domElement)

  const createGradientTexture = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.height = 256
    const grad = ctx.createLinearGradient(0, 0, 256, 256)
    grad.addColorStop(0, 'rgba(0,255,255,0.12)')
    grad.addColorStop(1, 'rgba(0,200,255,0.08)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 256, 256)
    return new THREE.CanvasTexture(canvas)
  }

  const gradientTexture = createGradientTexture()

  // === Cube ===
  cubeGroup = new THREE.Group()
  const cubeGeom = new THREE.BoxGeometry(0.8, 0.8, 0.8)
  const cubeMat = new THREE.MeshBasicMaterial({ map: gradientTexture, transparent: true, opacity: 0.85 })
  const cube = new THREE.Mesh(cubeGeom, cubeMat)
  const edges = new THREE.EdgesGeometry(cubeGeom)
  const outline = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.6, transparent: true }))
  cube.add(outline)

  const textCanvas = document.createElement('canvas')
  textCanvas.width = textCanvas.height = 128
  const ctx = textCanvas.getContext('2d')
  ctx.font = 'bold 64px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'rgba(0,255,255,0.8)'
  ctx.fillText('3D', 64, 64)
  const textTex = new THREE.CanvasTexture(textCanvas)
  const textMat = new THREE.MeshBasicMaterial({ map: textTex, transparent: true })
  const textCube = new THREE.Mesh(cubeGeom, Array(6).fill(textMat))

  cubeGroup.add(cube)
  cubeGroup.add(textCube)
  scene.add(cubeGroup)

  // === Square ===
  squareGroup = new THREE.Group()
  const planeGeom = new THREE.PlaneGeometry(0.8, 0.8)
  const planeMat = new THREE.MeshBasicMaterial({ map: gradientTexture, transparent: true, opacity: 0.85 })
  const square = new THREE.Mesh(planeGeom, planeMat)

  const textCanvas2 = document.createElement('canvas')
  textCanvas2.width = textCanvas2.height = 128
  const ctx2 = textCanvas2.getContext('2d')
  ctx2.font = 'bold 64px sans-serif'
  ctx2.textAlign = 'center'
  ctx2.textBaseline = 'middle'
  ctx2.fillStyle = 'rgba(0,255,255,0.8)'
  ctx2.fillText('2D', 64, 64)
  const textTex2 = new THREE.CanvasTexture(textCanvas2)
  const textMat2 = new THREE.MeshBasicMaterial({ map: textTex2, transparent: true })
  const textPlane = new THREE.Mesh(planeGeom, textMat2)
  textPlane.position.z = 0.01

  const edges2 = new THREE.EdgesGeometry(planeGeom)
  const outline2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.6, transparent: true }))
  outline2.position.z = 0.02

  squareGroup.add(square)
  squareGroup.add(textPlane)
  squareGroup.add(outline2)
  squareGroup.visible = false
  scene.add(squareGroup)

  const animate = () => {
    if (!show3D.value) {
      cubeGroup.rotation.x += 0.002
      cubeGroup.rotation.y += 0.003
    }
    renderer.render(scene, camera)
    frame = requestAnimationFrame(animate)
  }
  animate()

  watch(show3D, val => {
    cubeGroup.visible = !val
    squareGroup.visible = val
  })
})

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<style scoped>
canvas {
  filter: drop-shadow(0 0 10px #00ffff70);
}
</style>
