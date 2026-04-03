<template>
  <div class="rounded-lg border border-slate-700/50 p-4 bg-slate-900/40">
    <h4 class="text-sm uppercase tracking-widest text-slate-400">{{ title }}</h4>
    <ul class="mt-2 space-y-1.5 list-disc list-inside text-slate-200">
      <li v-for="(it, i) in items" :key="i">{{ it }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; items: string[] }>()
</script>
