<template>
  <div class="relative bg-black/40 border border-slate-700/40 rounded-xl backdrop-blur-md p-6 overflow-hidden
           shadow-inner shadow-slate-800/50 transition-all duration-700 group
           flex flex-col items-center text-center space-y-4 hover:border-cyan-400/30">
    <!-- Icon + Title -->
    <div class="relative flex flex-col items-center">
      <img :src="icon" :alt="title" class="h-12 w-12 opacity-90 mb-3" />
      <h3 class="text-xl font-semibold text-white tracking-wide">{{ title }}</h3>
      <p class="text-slate-400 text-sm leading-relaxed max-w-xs">{{ description }}</p>
    </div>

    <!-- Practices Section -->
    <div class="relative w-full mt-5 text-left">
      <h4
        class="text-sm font-semibold uppercase tracking-wider text-cyan-300/90 border-t border-slate-700/40 pt-3 mb-3 text-center">
        {{ t('skills.labels.practices') }}
      </h4>

      <div class="relative space-y-3 pl-3 border-l border-cyan-400/20">
        <!-- Vertical Gradient Line -->
        <div
          class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-cyan-300/20 to-transparent">
        </div>

        <!-- Best -->
        <div class="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3 text-xs text-slate-200">
          <strong class="text-cyan-300/90 block mb-1">{{
            t('skills.labels.best')
          }}</strong>
          {{ best }}
        </div>

        <!-- Improvable -->
        <div class="rounded-lg border border-slate-600/30 bg-slate-700/10 p-3 text-xs text-slate-300">
          <strong class="text-slate-400/90 block mb-1">{{
            t('skills.labels.improvable')
          }}</strong>
          {{ improvable }}
        </div>

        <!-- Bad -->
        <div class="rounded-lg border border-red-700/30 bg-red-900/10 p-3 text-xs text-red-300/80">
          <strong class="text-red-400/80 block mb-1">{{
            t('skills.labels.bad')
          }}</strong>
          {{ bad }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

defineProps({
  icon: String,
  title: String,
  description: String,
  best: String,
  improvable: String,
  bad: String
})
</script>

<style scoped>
.group:hover {
  transform: translateY(-2px);
  transition: all 0.4s ease;
}
</style>
