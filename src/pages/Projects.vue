<!-- Projects.vue (only the grid body changed) -->
<template>
  <section
    class="page-section flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black">

    <transition name="lang-phase" mode="out-in">
      <h2 :key="locale" class="text-4xl sm:text-5xl font-bold uppercase text-white tracking-widest mb-12">
        {{ t('projects.title') }}
      </h2>
    </transition>

    <transition name="lang-phase" mode="out-in">
      <div :key="locale" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <div v-for="(project, i) in projects" :key="i"
          class="bg-black/40 backdrop-blur-sm border border-slate-700/40 rounded-lg p-6 shadow-inner shadow-slate-800/50 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img :src="project.icon" :alt="t(`projects.items[${i}].title`)" class="h-12 w-12 mb-4" />

          <h3 class="text-xl font-semibold text-white mb-1">
            {{ t(`projects.items[${i}].title`) }}
          </h3>

          <!-- Split company line to avoid pipe parsing -->
          <p class="text-slate-400 text-sm mb-2">
            {{ t(`projects.items[${i}].companyName`) }}
            <span aria-hidden="true" class="mx-1">|</span>
            {{ t(`projects.items[${i}].period`) }}
          </p>

          <p class="text-slate-400 text-xs">
            {{ t(`projects.items[${i}].description`) }}
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const projects = [
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' }
]
</script>


<style scoped>
.page-section {
  padding: 48px 0;
  text-align: center;
}
</style>
