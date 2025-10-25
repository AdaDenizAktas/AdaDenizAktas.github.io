<template>
  <section
    class="page-section relative flex flex-col items-center justify-center text-center py-28 bg-gradient-to-b from-[#0b0b15] via-[#0d0d18] to-black overflow-hidden select-none">
    <!-- Animated particle grid background -->
    <canvas ref="bgCanvas" class="absolute inset-0 w-full h-full -z-10"></canvas>
    <transition name="lang-phase" mode="out-in">
      <!-- Floating holographic title -->
      <h1 :key="locale" class="text-5xl sm:text-6xl font-bold uppercase tracking-widest text-slate-200 mb-8
         drop-shadow-[0_0_10px_rgba(100,150,255,0.15)]">
        {{ t('home.title') }}
      </h1>
    </transition>
    <!-- Tagline / Summary -->
    <transition name="lang-phase" mode="out-in">
      <p :key="locale" class="text-slate-400 text-lg sm:text-xl max-w-3xl leading-relaxed px-6">
        {{ t('home.summary.part1') }}
        <span class="text-blue-400/80">{{ t('home.summary.medical') }}</span>,
        <span class="text-blue-400/80">{{ t('home.summary.industrial') }}</span>,
        {{ t('home.summary.and') }}
        <span class="text-blue-400/80">{{ t('home.summary.ai') }}</span>
        {{ t('home.summary.part2') }}
        <strong>C# .NET Core</strong> {{ t('home.summary.part3') }}
        <strong>cloud-native CI/CD</strong> {{ t('home.summary.part4') }}
      </p>
    </transition>
    <!-- Floating divider line -->
    <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-10"></div>

    <!-- Call-to-Action -->
    <div class="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
      <router-link to="/projects" class="px-8 py-3 bg-blue-600/80 text-white rounded-lg font-semibold tracking-wide
               hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(60,100,255,0.15)]">
        {{ t('home.cta.projects') }}
      </router-link>
      <router-link to="/contact" class="px-8 py-3 border border-blue-500/60 text-blue-400 rounded-lg font-semibold tracking-wide
               hover:bg-blue-600 hover:text-white transition-colors shadow-[inset_0_0_10px_rgba(80,120,255,0.2)]">
        {{ t('home.cta.contact') }}
      </router-link>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const bgCanvas = ref(null)

onMounted(() => {
  const canvas = bgCanvas.value
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 1, 500)
  camera.position.z = 50

  const geometry = new THREE.BufferGeometry()
  const positions = []
  for (let x = -50; x < 50; x += 5) {
    for (let y = -50; y < 50; y += 5) {
      positions.push(x, y, Math.sin(x * 0.3 + y * 0.3) * 0.5)
    }
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  const material = new THREE.PointsMaterial({
    color: 0x6699ff,
    size: 0.15,
    opacity: 0.35,
    transparent: true,
    blending: THREE.AdditiveBlending,
  })
  const points = new THREE.Points(geometry, material)
  scene.add(points)

  const animate = () => {
    requestAnimationFrame(animate)
    points.rotation.x += 0.0008
    points.rotation.y += 0.0006
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.render(scene, camera)
  }
  animate()
})
</script>
.page-section {
perspective: 1000px;
}

h1 {
letter-spacing: 0.15em;
}
