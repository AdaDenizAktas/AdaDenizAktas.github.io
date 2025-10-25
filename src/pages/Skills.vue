<template>
  <section
    class="page-section flex flex-col items-center text-center py-24 bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black">
    <!-- Section Title -->
    <transition name="lang-phase" mode="out-in">
      <h2 :key="locale" class="text-4xl sm:text-5xl font-bold uppercase tracking-widest text-white mb-14">
        {{ t('skills.title') }}
      </h2>
    </transition>

    <!-- Skill Categories -->

    <transition name="lang-phase" mode="out-in">
      <div :key="locale" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <SkillCard v-for="(s, i) in skills" :key="i" :icon="s.icon" :title="t(`skills.items.${i}.title`)"
          :description="t(`skills.items.${i}.description`)" :best="t(`skills.items.${i}.best`)"
          :improvable="t(`skills.items.${i}.improvable`)" :bad="t(`skills.items.${i}.bad`)" />
      </div>

    </transition>
  </section>
</template>

<script setup>
import SkillCard from '@/components/SkillCard.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const skills = [
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'
  },
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg'
  },
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
  },
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
  },
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    icon:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
  }
]
</script>