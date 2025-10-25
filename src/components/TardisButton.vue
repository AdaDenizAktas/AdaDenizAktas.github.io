<template>
  <button class="tardis-btn" @click="warp">
    <slot>RIFT</slot>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function warp(){
  document.documentElement.classList.add('warp-active')
  setTimeout(()=> {
    router.push({ name: 'Rift' })
    document.documentElement.classList.remove('warp-active')
  }, 600)
}
</script>

<style scoped>
.tardis-btn{
  position:fixed;
  right:20px;
  bottom:20px;
  padding:12px 16px;
  border-radius:12px;
  border:1px solid rgba(0,255,255,0.25);
  backdrop-filter: blur(6px);
  background:linear-gradient(135deg, rgba(0,255,255,0.12), rgba(0,200,255,0.08));
  color:#cfffff;
  cursor:pointer;
  z-index:1000;
}
</style>
