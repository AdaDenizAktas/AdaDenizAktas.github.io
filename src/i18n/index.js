import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'
import de from './de.json'
import es from './es.json'

// Detect best locale
const savedLocale = localStorage.getItem('locale')?.toLowerCase()
const browserLocale = navigator.language?.split('-')[0]?.toLowerCase()

const supported = ['en', 'fr', 'de', 'es']

const locale =
  savedLocale ||
  (supported.includes(browserLocale) ? browserLocale : 'en')

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: { en, fr, de, es }
})
