<template>
  <section class="py-20 bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black text-slate-200">
    <div class="mx-auto w-[95%] sm:w-11/12 max-w-6xl space-y-10 sm:space-y-14">
      <!-- Header -->
      <header class="text-center mb-10 sm:mb-12">
        <transition name="lang-phase" mode="out-in">
          <h2 :key="locale"
            class="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-white leading-tight">
            {{ t('best.title') }}
          </h2>
        </transition>
        <transition name="lang-phase" mode="out-in">
          <p :key="locale" class="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base max-w-3xl mx-auto px-2">
            {{ t('best.subtitle') }}
          </p>
        </transition>
        <!-- Filter Bar -->
        <div class="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm px-1">

          <transition name="lang-phase" mode="out-in">
            <div :key="locale" class="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              <label class="text-slate-400 shrink-0">
                {{ t('best.filterSkill') }}
              </label>

              <button v-for="tag in allSkillTags" :key="tag" @click="toggleTag(tag)" :class="[
                'px-2 sm:px-3 py-1 rounded-md border tracking-wider transition-all duration-200',
                activeTags.has(tag)
                  ? 'border-slate-300 text-white bg-slate-800 shadow-md shadow-slate-900/50'
                  : 'border-slate-600 text-slate-400 hover:border-slate-400'
              ]">
                {{ tagDisplay(tag) }}
              </button>

              <button v-if="activeTags.size" @click="clearTags"
                class="px-2 sm:px-3 py-1 rounded-md border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400">
                {{ t('best.clear') }}
              </button>
            </div>
          </transition>

          <transition name="lang-phase" mode="out-in">
            <button :key="locale" v-if="activeTags.size" @click="clearTags"
              class="px-2 sm:px-3 py-1 rounded-md border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400">
              {{ t('best.clear') }}
            </button>
          </transition>
        </div>
      </header>

      <!-- Practice Cards -->
      <transition name="lang-phase" mode="out-in">
        <transition-group :key="locale" name="page-fade" tag="div" class="space-y-8 sm:space-y-10">
          <article v-for="p in filtered" :key="p.id"
            class="rounded-lg sm:rounded-xl border border-slate-700/40 bg-gradient-to-br from-black/60 to-[#101020] p-4 sm:p-6 shadow-lg shadow-slate-900/30 hover:border-slate-500/50 transition-all duration-300">
            <!-- Title -->
            <header class="mb-3 sm:mb-4 cursor-pointer select-none" @click="toggleExpand(p.id)">
              <h3
                class="text-lg sm:text-2xl font-bold text-white tracking-wide mb-1 sm:mb-2 flex items-center justify-between">
                {{ p.title }}
                <span class="text-slate-400 transform transition-transform duration-300 flex-shrink-0"
                  :class="{ 'rotate-90': expanded.has(p.id) }">
                  ▶
                </span>
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 leading-snug">
                {{ p.summary }}
              </p>
            </header>

            <!-- Collapsible Content -->
            <transition name="expand">
              <div v-if="expanded.has(p.id)"
                class="space-y-4 sm:space-y-6 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                <!-- Definition -->
                <section v-if="p.pillars.definition">
                  <h4 class="text-slate-300 font-semibold mb-1">
                    {{ t('best.definition') }}
                  </h4>
                  <p class="text-slate-400">{{ p.pillars.definition }}</p>
                </section>

                <!-- Key Rules -->
                <section v-if="p.pillars.keyRules?.length">
                  <h4 class="text-slate-300 font-semibold mb-1">
                    {{ t('best.keyRules') }}
                  </h4>
                  <ul class="space-y-1.5">
                    <li v-for="(rule, i) in p.pillars.keyRules" :key="i" class="flex items-start gap-1.5 sm:gap-2">
                      <span class="text-blue-400 mt-0.5 sm:mt-1">▸</span>
                      {{ rule }}
                    </li>
                  </ul>
                </section>

                <!-- Example Code -->
                <section v-if="p.exampleCode">
                  <h4 class="text-slate-300 font-semibold mb-1">{{ t('best.example') }}</h4>
                  <pre
                    class="bg-slate-900/60 border border-slate-700/60 rounded-md p-2 sm:p-3 text-[10px] sm:text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap"><code>{{ p.exampleCode.replace(/\\n/g, '\n') }}</code></pre>

                </section>

                <!-- Expected Results -->
                <section v-if="p.pillars.examples?.length">
                  <h4 class="text-slate-300 font-semibold mb-1">
                    {{ t('best.expectedResults') }}
                  </h4>
                  <ul class="list-disc list-inside text-slate-400 space-y-1">
                    <li v-for="(ex, i) in p.pillars.examples" :key="i">{{ ex }}</li>
                  </ul>
                </section>

                <!-- Then / Now (Futuristic Technical Layout) -->
                <section v-if="p.history" class="relative pt-10 sm:pt-14">
                  <!-- CONNECTOR LINE -->
                  <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-slate-900 via-slate-600/50 to-slate-900 pointer-events-none">
                  </div>

                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 relative z-10 w-full max-w-full px-3 box-border">
                    <!-- THEN -->
                    <div class="relative w-full max-w-full box-border rounded-lg border border-slate-700/60
    bg-gradient-to-br from-[#0a0a14] via-[#10101e] to-[#0a0a14]
    p-4 sm:p-6 backdrop-blur-sm hover:border-slate-500/60
    transition-all duration-200 group">

                      <div class="absolute top-4 -right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full
      bg-slate-500/60 border border-slate-300/10 group-hover:bg-slate-400/70">
                      </div>

                      <header class="flex items-center justify-between text-[11px] sm:text-sm
      text-slate-400 uppercase tracking-[0.12em] sm:tracking-[0.15em]">
                        <span class="font-semibold text-slate-300">{{ t('best.then') }}</span>
                        <span v-if="p.history.dateThen" class="font-mono text-[10px] sm:text-[11px] text-slate-500/90">
                          {{ p.history.dateThen }}
                        </span>
                      </header>

                      <div class="mt-2 sm:mt-3 border-t border-slate-700/50"></div>

                      <p class="mt-2 sm:mt-3 text-slate-200 text-[12px] sm:text-sm
      leading-relaxed font-light tracking-wide break-words">
                        {{ p.history.then }}
                      </p>
                    </div>

                    <!-- NOW -->
                    <div class="relative w-full max-w-full box-border rounded-lg border border-slate-700/60
    bg-gradient-to-br from-[#101020] via-[#15152c] to-[#101020]
    p-4 sm:p-6 backdrop-blur-sm hover:border-slate-500/60
    transition-all duration-200 group">

                      <div class="absolute top-4 -left-3 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full
      bg-slate-500/60 border border-slate-300/10 group-hover:bg-slate-400/70">
                      </div>

                      <header class="flex items-center justify-between text-[11px] sm:text-sm
      text-slate-400 uppercase tracking-[0.12em] sm:tracking-[0.15em]">
                        <span class="font-semibold text-slate-300">{{ t('best.now') }}</span>
                        <span v-if="p.history.dateNow" class="font-mono text-[10px] sm:text-[11px] text-slate-500/90">
                          {{ p.history.dateNow }}
                        </span>
                      </header>

                      <div class="mt-2 sm:mt-3 border-t border-slate-700/50"></div>

                      <p class="mt-2 sm:mt-3 text-slate-200 text-[12px] sm:text-sm
      leading-relaxed font-light tracking-wide break-words">
                        {{ p.history.now }}
                      </p>
                    </div>
                  </div>



                  <!-- CENTRAL NODE -->
                  <div
                    class="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-slate-400/40 bg-slate-600/70">
                  </div>
                </section>



                <!-- References -->
                <section v-if="p.references?.length">
                  <h4 class="text-slate-300 font-semibold mb-1">{{ t('best.references') }}</h4>
                  <ul class="list-disc list-inside text-[11px] sm:text-xs space-y-1">
                    <li v-for="(r, i) in p.references" :key="i">
                      <a :href="r" target="_blank" class="text-blue-400 hover:text-blue-300 underline break-all">{{ r
                      }}</a>
                    </li>
                  </ul>
                </section>
              </div>
            </transition>
          </article>
        </transition-group>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { usePractices } from '@/content/bestPractices'

const { t, locale } = useI18n()
const PRACTICES = usePractices() // ✅ now a computed ref (reactive)
const route = useRoute()
const router = useRouter()

const activeTags = ref<Set<string>>(new Set())
const expanded = ref<Set<string>>(new Set())

function toggleExpand(id: string) {
  const s = new Set(expanded.value)
  s.has(id) ? s.delete(id) : s.add(id)
  expanded.value = s
}

// ✅ Skill counts — PRACTICES is now a ref, so use PRACTICES.value
const skillCounts = computed(() => {
  const counts: Record<string, number> = {}
  PRACTICES.value.forEach(p => {
    p.skills.forEach(s => {
      counts[s] = (counts[s] || 0) + 1
    })
  })
  return counts
})

// ✅ All unique sorted tags
const allSkillTags = computed(() => Object.keys(skillCounts.value).sort())

const filtered = computed(() => {
  if (!activeTags.value.size) return PRACTICES.value
  return PRACTICES.value.filter(p => p.skills.some(s => activeTags.value.has(s)))
})

function tagDisplay(tag: string) {
  const map: Record<string, string> = {
    csharp: 'C#',
    dotnet: '.NET',
    vue: 'Vue',
    docker: 'Docker',
    sql: 'SQL',
    python: 'Python',
    git: 'Git'
  }
  const label = map[tag] ?? tag
  const count = skillCounts.value[tag] ?? 0
  return `${label} (${count})`
}

// ✅ Tag filter logic
function toggleTag(tag: string) {
  const s = new Set(activeTags.value)
  s.has(tag) ? s.delete(tag) : s.add(tag)
  activeTags.value = s

  const q = new URLSearchParams(route.query as Record<string, string>)
  if (activeTags.value.size > 0) {
    q.set('skill', Array.from(activeTags.value).join(','))
  } else {
    q.delete('skill')
  }
  router.replace({ query: Object.fromEntries(q) })
}

function clearTags() {
  activeTags.value = new Set()
  const q = new URLSearchParams(route.query as Record<string, string>)
  q.delete('skill')
  router.replace({ query: Object.fromEntries(q) })
}

onMounted(() => {
  const skill = String(route.query.skill ?? '').trim()
  if (skill) skill.split(',').forEach(s => activeTags.value.add(s))
})
</script>



<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* ----------- Mobile fine-tuning ----------- */
@media (max-width: 425px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1rem;
  }

  pre {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  code {
    font-size: 10px;
  }

  .list-disc {
    padding-left: 1rem;
  }
}
</style>
