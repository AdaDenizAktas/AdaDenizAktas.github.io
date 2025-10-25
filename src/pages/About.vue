<template>
  <section
    class="page-section relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black overflow-hidden">
    <!-- Title -->
    <transition name="lang-phase" mode="out-in">
      <h2 :key="locale"
        class="text-4xl sm:text-5xl font-bold uppercase text-white tracking-[0.3em] mb-10 relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-slate-600/50">
        {{ t('about.title') }}
      </h2>
    </transition>
    <transition name="lang-phase" mode="out-in">
      <p :key="locale" class="text-slate-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-14 px-4 animate-fadeIn">
        {{ t('about.summary') }}
      </p>

    </transition>
    <transition name="lang-phase" mode="out-in">
      <div :key="locale" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl text-left px-6">
        <div v-for="(item, i) in expertise" :key="i"
          class="group relative bg-black/40 border border-slate-700/40 rounded-lg p-6 backdrop-blur-sm shadow-inner shadow-slate-800/50 hover:border-blue-600/40 hover:shadow-[0_0_20px_rgba(60,80,130,0.25)] transition-all duration-500">
          <component :is="item.icon"
            class="h-8 w-8 text-blue-400 mb-3 transition-transform duration-500 group-hover:scale-110" />
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ t(`about.expertise.${i}.title`) }}
          </h3>
          <p class="text-slate-400">
            {{ t(`about.expertise.${i}.text`) }}
          </p>
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-800/20 blur-2xl transition-all duration-700 rounded-lg">
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import {
  ServerStackIcon,
  GlobeAltIcon,
  CloudIcon,
  BeakerIcon,
  CircleStackIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'

const { t, locale } = useI18n()

const expertise = [
  { icon: ServerStackIcon },
  { icon: GlobeAltIcon },
  { icon: CloudIcon },
  { icon: BeakerIcon },
  { icon: CircleStackIcon },
  { icon: UsersIcon }
]
</script>

<style scoped>
.page-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
