<!-- Experience.vue (updated parts only) -->
<template>
  <section
    class="page-section py-20 bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black text-white overflow-hidden relative">

    <!-- Subtle grid background -->
    <div
      class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]">
    </div>

    <!-- Title -->
    <transition name="lang-phase" mode="out-in">
      <h2 :key="locale"
        class="text-4xl sm:text-5xl font-bold uppercase tracking-[0.3em] text-center mb-16 relative z-10">
        {{ t('experience.title') }}
      </h2>
    </transition>

    <!-- Timeline -->
    <transition name="lang-phase" mode="out-in">


      <div :key="locale" class="relative max-w-6xl mx-auto flex flex-col gap-16 px-4">
        <!-- Replace ONLY the v-for block with this final refined version -->
        <div v-for="(job, index) in experiences" :key="index"
          class="relative flex flex-col md:flex-row items-center justify-between w-full">
          <div :class="[
            'flex items-center w-full gap-6',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            index === 0 ? 'latest-active' : ''
          ]">
            <!-- Date (desktop) -->
            <div :class="[
              'text-blue-400/70 font-semibold text-xs tracking-widest uppercase hidden md:block w-[160px] shrink-0 whitespace-nowrap',
              index % 2 === 0
                ? 'text-left self-center pl-4'
                : 'text-right self-center pr-4'
            ]">
              {{ t(`experience.items.${index}.period`) }}
            </div>

            <!-- Card -->
            <div :class="[
              'relative bg-black/40 border border-slate-700/40 backdrop-blur-md shadow-inner shadow-slate-800/40 p-6 flex-1 z-10 transition-all duration-700 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(60,100,255,0.25)] hover:-translate-y-1',
              index === 0 ? 'rounded-none' : 'rounded-xl'
            ]">
              <div class="flex items-center gap-3 mb-3">
                <component :is="job.icon"
                  class="h-7 w-7 text-blue-400/80 group-hover:text-blue-300 transition-colors duration-300" />
                <h3 class="text-xl font-semibold tracking-wide">
                  {{ t(`experience.items.${index}.role`) }}
                </h3>
              </div>

              <p class="text-slate-400 text-sm mb-1">
                {{ t(`experience.items.${index}.company`) }}
              </p>
              <p class="text-slate-400 text-sm leading-relaxed mb-4">
                {{ t(`experience.items.${index}.description`) }}
              </p>

              <!-- Only show for the LAST element -->
              <div v-if="job.featured" class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-3">
                <img
                  src="https://i.kickstarter.com/assets/051/483/048/dea293b49c0b926583e74e3b5b9fb92c_original.jpeg?anim=false&fit=cover&height=220&origin=ugc&q=92&v=1761910699&width=220&sig=7u0LTHG%2BRK2gmlO%2FyqF8iV%2BxCikmTdQVx7%2BwVWhnu7I%3D"
                  alt="Breakdown ’25 Preview" class="rounded-md shadow-md w-full sm:w-[200px] object-cover" />
                <a style="display:none" href="https://www.kickstarter.com/projects/ryanb1999/breakdown-25-build-hustle-and-survive-in-a-living-world"
                  target="_blank" rel="noopener noreferrer"
                  class="text-blue-400 hover:text-blue-300 text-sm font-medium uppercase tracking-widest transition-all underline underline-offset-4 decoration-blue-500">
                  {{ t(`experience.supportProject`) }}
                </a>
              </div>
            </div>
          </div>

          <!-- Date (mobile) -->
          <div class="block md:hidden flex justify-center mt-3">
            <span
              class="text-blue-400/70 font-semibold text-xs tracking-widest uppercase whitespace-nowrap inline-block px-2">
              {{ t(`experience.items.${index}.period`) }}
            </span>
          </div>
        </div>



      </div>
    </transition>


  </section>
</template>

<script setup>
import { BriefcaseIcon, CodeBracketIcon, Cog6ToothIcon, ServerIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const experiences = [
  { icon: CodeBracketIcon, featured: false }, // latest job (365AMS)
  { icon: CodeBracketIcon, featured: true },  // Breakdown 25 (Voidlight)
  { icon: BriefcaseIcon, featured: false },
  { icon: CodeBracketIcon, featured: false },
  { icon: ServerIcon, featured: false },
  { icon: BriefcaseIcon, featured: false },
  { icon: CodeBracketIcon, featured: false },
  { icon: Cog6ToothIcon, featured: false },
  { icon: CodeBracketIcon, featured: false }
]
</script>



<style scoped>
.latest-active {
  border: 1px solid rgba(120, 160, 255, 0.25);
  background: linear-gradient(135deg, rgba(40, 60, 100, 0.35), rgba(10, 15, 25, 0.15));
  box-shadow:
    0 0 12px rgba(100, 140, 220, 0.15),
    inset 0 0 6px rgba(80, 120, 200, 0.08);
  animation: ambientPulse 6s ease-in-out infinite;
}

@keyframes ambientPulse {

  0%,
  100% {
    box-shadow:
      0 0 12px rgba(100, 140, 220, 0.1),
      inset 0 0 6px rgba(80, 120, 200, 0.06);
  }

  50% {
    box-shadow:
      0 0 18px rgba(130, 160, 240, 0.2),
      inset 0 0 8px rgba(90, 140, 220, 0.1);
  }
}



.page-section {
  perspective: 1000px;
}

.fade-up-enter-active {
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

@media (min-width: 768px) {

  .md\:flex-row>div,
  .md\:flex-row-reverse>div {
    transform-style: preserve-3d;
  }
}
</style>
