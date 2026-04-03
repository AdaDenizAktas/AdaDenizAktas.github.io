// src/content/bestPractices.ts
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export type Practice = {
  id: string
  title: string
  summary: string
  skills: string[]
  pillars: {
    definition?: string
    whenToUse?: string[]
    whenToAvoid?: string[]
    keyRules?: string[]
    pitfalls?: string[]
    examples?: string[]
  }
  history?: { then: string; now: string; dateThen?: string; dateNow?: string }
  exampleCode?: string
  references?: string[]
}

// ✅ Reactive composable: updates when locale changes
export function usePractices() {
  const { messages, locale } = useI18n<{ [key: string]: any }>({ useScope: 'global' })

  return computed<Practice[]>(() => {
    const lang = locale.value
    const allMessages = messages.value as Record<string, any>
    const practices = allMessages?.[lang]?.best?.practices

    if (!Array.isArray(practices)) {
      console.warn('[usePractices] Missing or invalid best.practices structure for locale:', lang)
      return []
    }

    return practices as Practice[]
  })
}
