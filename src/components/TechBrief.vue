<template>
  <article
    class="group relative rounded-xl border border-slate-700/50 bg-gradient-to-br from-black/60 to-[#0d0d15] p-6 shadow-lg shadow-slate-900/40 hover:border-slate-500/50 transition-all duration-300"
  >
    <!-- Title -->
    <header class="mb-4">
      <h3 class="text-2xl font-bold text-white tracking-wide mb-1">{{ title }}</h3>
      <p class="text-sm text-slate-400">{{ subtitle }}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="tag in tags.split('/')"
          :key="tag"
          class="px-2 py-0.5 rounded border border-slate-600 text-slate-400 text-xs uppercase tracking-widest"
        >{{ tag.trim() }}</span>
      </div>
    </header>

    <!-- Timeline Then → Now -->
    <div class="relative mb-5">
      <div class="absolute left-0 top-1/2 w-full h-[1px] bg-slate-700/40"></div>
      <div class="flex justify-between text-xs text-slate-400 uppercase tracking-widest">
        <span>{{ t('best.then') }}</span>
        <span>{{ t('best.now') }}</span>
      </div>
    </div>

    <!-- Split layout -->
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Text column -->
      <ul class="space-y-1.5 text-slate-300 text-sm leading-relaxed">
        <li v-for="(p,i) in principles" :key="i" class="flex items-start gap-2">
          <span class="text-blue-400 mt-1">▸</span>
          <span>{{ p }}</span>
        </li>
      </ul>

      <!-- Code column -->
      <pre class="relative bg-slate-900/60 rounded-md border border-slate-700/60 p-3 text-xs text-slate-200 overflow-x-auto">
        <code>{{ code }}</code>
      </pre>
    </div>

    <!-- Then / Now summary -->
    <div class="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
      <div class="p-3 rounded-md bg-slate-900/50 border border-slate-700/40">
        <strong class="text-slate-400 uppercase">{{ t('best.then') }}:</strong>
        <p class="mt-1 text-slate-300">{{ then }}</p>
      </div>
      <div class="p-3 rounded-md bg-slate-900/30 border border-slate-700/40">
        <strong class="text-slate-400 uppercase">{{ t('best.now') }}:</strong>
        <p class="mt-1 text-slate-300">{{ now }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{
  title: string
  subtitle: string
  tags: string
  then: string
  now: string
  code: string
  principles: string[]
}>()
</script>
