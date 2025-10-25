<template>
  <div class="inventory-tray">
    <button @click="$emit('open', 'Projects')">Projects</button>
    <button @click="$emit('open', 'Skills')">Skills</button>
    <button @click="$emit('open', 'Experience')">Experience</button>
  </div>
</template>

<script setup></script>

<style scoped>
.inventory-tray{
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display:flex;
  gap:12px;
  pointer-events:auto;
}
.inventory-tray button{
  padding:8px 12px;
  border-radius:8px;
  border:1px solid #0ff;
  background: rgba(0,255,255,0.1);
  color:#cfffff;
  cursor:pointer;
}
</style>
