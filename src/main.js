import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import { i18n } from './i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)

router.isReady().then(() => {
    // Restore path set by 404.html (if any)
    const key = 'vue-spa-redirect'
    const redirectPath = sessionStorage.getItem(key)

    if (redirectPath && redirectPath !== location.pathname + location.search + location.hash) {
        sessionStorage.removeItem(key)
        // Use replace to avoid extra history entry
        router.replace(redirectPath).catch(() => { /* ignore if same route */ })
    }
})

app.mount('#app')
