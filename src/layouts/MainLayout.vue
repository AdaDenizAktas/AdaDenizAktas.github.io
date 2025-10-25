<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black text-slate-300 font-sans relative overflow-hidden">

    <!-- Header -->
    <header
      class="w-full py-6 text-center border-b border-slate-600/30 backdrop-blur-md bg-black/40 shadow-inner shadow-slate-700/10 flex flex-col items-center">
      <h1 class="text-5xl font-extrabold tracking-widest uppercase text-white">A.D.A.</h1>
      <p class="text-lg text-slate-500 mt-1 tracking-wide">Ada Deniz Aktaş</p>

      <!-- Contact -->
      <div class="mt-4 flex flex-col sm:flex-row sm:justify-center gap-4 text-slate-400 text-sm">
        <a href="mailto:Ada.deniz.aktas0@gmail.com"
          class="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <EnvelopeIcon class="h-5 w-5 text-blue-500 flex-shrink-0" />
          <span>Ada.deniz.aktas0@gmail.com</span>
        </a>
        <a href="tel:+905541177404" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <PhoneIcon class="h-5 w-5 text-blue-500 flex-shrink-0" />
          <span>+905541177404</span>
        </a>
        <a href="https://www.google.com/maps/place/Kayseri,+Turkey" target="_blank"
          class="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <MapPinIcon class="h-5 w-5 text-blue-500 flex-shrink-0" />
          <span>{{ t('header.location') }}</span>
        </a>
      </div>


      <div class="mt-6 flex gap-3 text-xs uppercase tracking-widest">
        <button v-for="lang in ['EN', 'FR', 'DE', 'ES']" :key="lang" @click="changeLang(lang.toLowerCase())" :class="[
          'px-3 py-1 rounded-md border backdrop-blur-sm transition-all duration-300 select-none',
          locale === lang.toLowerCase()
            ? 'border-slate-400 text-white bg-slate-700/40 shadow-inner'
            : 'border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 hover:bg-slate-700/30'
        ]">
          {{ lang }}
        </button>
      </div>
    </header>

    <!-- Navigation -->
    <transition name="lang-phase" mode="out-in">
      <nav :key="locale" class="flex gap-8 my-6 text-lg uppercase tracking-widest">
        <router-link to="/" :class="['nav-link', { 'nav-active': $route.path === '/' }]">{{ t('nav.home')
        }}</router-link>
        <router-link to="/about" :class="['nav-link', { 'nav-active': $route.path === '/about' }]">{{ t('nav.about')
        }}</router-link>
        <router-link to="/skills" :class="['nav-link', { 'nav-active': $route.path === '/skills' }]">{{ t('nav.skills')
        }}</router-link>
        <router-link to="/experience" :class="['nav-link', { 'nav-active': $route.path === '/experience' }]">{{
          t('nav.experience') }}</router-link>
        <router-link to="/projects" :class="['nav-link', { 'nav-active': $route.path === '/projects' }]">{{
          t('nav.projects') }}</router-link>
        <router-link to="/contact" :class="['nav-link', { 'nav-active': $route.path === '/contact' }]">{{
          t('nav.contact')
        }}</router-link>
      </nav>
    </transition>
    <!-- Main Content -->
    <main id="website-content"
      class="relative w-11/12 max-w-6xl flex-1 backdrop-blur-sm bg-black/40 border border-slate-700/40 rounded-lg p-8 shadow-inner shadow-slate-800/50 overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <footer
        class="w-full py-4 mt-8 text-center text-xs tracking-widest text-slate-500 border-t border-slate-700/40 bg-black/30 backdrop-blur-md shadow-inner shadow-slate-800/20">
        © {{ new Date().getFullYear() }} Whitestone R&D — A.D.A. | All Rights Reserved.
      </footer>
    </main>



    <!-- Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden"></div>

    <!-- Buttons -->
    <div class="fixed inset-0 pointer-events-none z-50">
      <div class="pointer-events-auto">
        <Website3DButton v-if="$route.path !== '/contact'" class="exclude-3d bottom-8 right-8" />
        <!--  <TardisButton class="exclude-3d bottom-8 right-8" /> -->
      </div>
    </div>
  </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

import Website3DButton from '../components/Website3DButton.vue'
import TardisButton from '../components/TardisButton.vue'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

// script setup
const changeLang = (lang) => {
  locale.value = lang.toLowerCase()
  localStorage.setItem('locale', lang)
}

</script>

<style>
#website-content {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* --- NAV --- */
.nav-link {
  @apply relative pb-1 text-slate-400 transition-all duration-300;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-[1px] bg-slate-500 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.nav-link:hover {
  @apply text-white;
}

.nav-active {
  color: #e5e7eb;
  text-shadow: 0 0 4px rgba(140, 160, 220, 0.35);
  animation: tardisDim 6s ease-in-out infinite alternate;
  position: relative;
}

.nav-active::after {
  width: 100%;
  background: linear-gradient(90deg, #2b3a56 0%, #485a8c 50%, #2b3a56 100%);
  height: 2px;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(100, 120, 160, 0.3);
  animation: tardisUnderline 3s ease-in-out infinite alternate;
}

/* --- ACTIVE NAV ANIMATIONS --- */
@keyframes tardisDim {
  0% {
    transform: perspective(600px) rotateY(0deg) scale(1);
    text-shadow: 0 0 3px rgba(160, 180, 255, 0.25);
  }

  30% {
    transform: perspective(600px) rotateY(6deg) scale(1.03);
    text-shadow: 0 0 5px rgba(200, 220, 255, 0.35);
  }

  70% {
    transform: perspective(600px) rotateY(-6deg) scale(1.03);
    text-shadow: 0 0 5px rgba(200, 220, 255, 0.35);
  }

  100% {
    transform: perspective(600px) rotateY(0deg) scale(1.02);
    text-shadow: 0 0 4px rgba(180, 200, 255, 0.25);
  }
}

@keyframes tardisUnderline {
  0% {
    transform: translateX(0) scaleX(1);
    opacity: 0.9;
    box-shadow: 0 0 4px rgba(120, 140, 180, 0.2);
  }

  50% {
    transform: translateX(2%) scaleX(1.05);
    opacity: 1;
    box-shadow: 0 0 10px rgba(140, 160, 220, 0.3);
  }

  100% {
    transform: translateX(-2%) scaleX(1.05);
    opacity: 0.8;
    box-shadow: 0 0 6px rgba(120, 140, 200, 0.25);
  }
}

/* --- PAGE TRANSITIONS --- */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}


/* --- SUBTLE PULSE --- */
@keyframes slowPulse {

  0%,
  100% {
    opacity: 0.7;
    transform: scale(1);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

.animate-slowPulse {
  animation: slowPulse 8s ease-in-out infinite;
}

.lang-phase-enter-active,
.lang-phase-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

.lang-phase-enter-from {
  opacity: 0;
  transform: translateZ(-15px) scale(0.98);
}

.lang-phase-enter-to {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

.lang-phase-leave-from {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

.lang-phase-leave-to {
  opacity: 0;
  transform: translateZ(15px) scale(1.02);
}
</style>
