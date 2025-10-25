<template>
  <div class="rift-root">
    <ThreeScene />
    <div class="ui-overlay">
      <InventoryTray @open="openPanel" />
      <button class="exit-btn" @click="returnToReality">Return</button>
    </div>
  </div>
</template>

<script setup>
import ThreeScene from '../components/ThreeScene.vue'
import InventoryTray from '../components/InventoryTray.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function returnToReality() {
  document.documentElement.classList.add('warp-reverse')
  setTimeout(() => router.push({ path: '/' }), 500)
}

function openPanel(name) { /* placeholder for inventory panel */ }
</script>

<style scoped>
.rift-root {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
}
.ui-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.exit-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: auto;
  padding: 10px 14px;
  border-radius: 8px;
  border:1px solid #0ff;
  background: rgba(0,255,255,0.1);
  color: #cfffff;
  cursor: pointer;
}
</style>
