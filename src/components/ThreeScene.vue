<template>
  <canvas ref="threeCanvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const threeCanvas = ref(null)
let scene, camera, renderer, controls, earth

onMounted(() => {
  initThree()
  animate()
})

onBeforeUnmount(() => {
  renderer.dispose()
  controls.dispose()
})

function initThree() {
  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  // Camera
  const width = window.innerWidth
  const height = window.innerHeight
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.set(0, 2, 5)

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: threeCanvas.value, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)

  // Controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xffffff, 0.8)
  pointLight.position.set(5,5,5)
  scene.add(pointLight)

  // Earth
  const geometry = new THREE.SphereGeometry(1,32,32)
  const material = new THREE.MeshStandardMaterial({ color: 0x2266ff })
  earth = new THREE.Mesh(geometry, material)
  scene.add(earth)

  // Handle resize
  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  earth.rotation.y += 0.002
  controls.update()
  renderer.render(scene, camera)
}
</script>

<style scoped>
canvas { display: block; width: 100%; height: 100vh; }
</style>
