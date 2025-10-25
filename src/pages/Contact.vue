<template>
  <section ref="rootEl" class="relative overflow-hidden py-20 text-white flex flex-col items-center select-none">
    <!-- Starfield background (static) -->
    <canvas ref="bgCanvas" class="absolute inset-0 w-full -z-10"></canvas>

    <!-- Subtle SVG energy lines -->
    <svg class="absolute inset-0 -z-5 opacity-40 pointer-events-none">
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1">
          <stop offset="0%" stop-color="#1e293b" stop-opacity="0" />
          <stop offset="100%" stop-color="#1e40af" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <path d="M0 200 C260 120, 480 320, 1200 200" stroke="url(#lineGrad)" stroke-width="1" fill="none"
        class="animate-pulse-slow" />
      <path d="M30 10 C200 40, 340 0, 900 60" stroke="url(#lineGrad)" stroke-width="1" fill="none"
        class="animate-pulse-slow" />
    </svg>

    <!-- Title -->
    <h2 class="text-4xl sm:text-5xl font-bold uppercase tracking-widest mb-10">
      {{ t('contact.title') }}
    </h2>

    <div class="max-w-5xl w-full px-6">
      <!-- Tabs -->
      <div class="flex justify-center gap-6 mb-8 border-b border-slate-700/40">
        <button :class="tabClass('contact')" @click="() => setTab('contact')">{{ t('contact.tabs.contact') }}</button>
        <button :class="tabClass('project')" @click="() => setTab('project')">{{ t('contact.tabs.project') }}</button>
      </div>

      <!-- Contact Form -->
      <div v-if="activeTab === 'contact'" key="contact"
        class="glass-panel shadow-glass bg-slateGlass p-6 rounded-xl space-y-6 max-w-xl mx-auto"
        style="background-color: rgba(30, 41, 59, 0.4);">
        <a href="mailto:Ada.deniz.aktas0@gmail.com"
          class="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors">
          <EnvelopeIcon class="h-6 w-6 text-blue-400" />
          <span>Ada.deniz.aktas0@gmail.com</span>
        </a>
        <a href="tel:+905541177404"
          class="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors">
          <PhoneIcon class="h-6 w-6 text-blue-400" />
          <span>+90 554 117 7404</span>
        </a>
        <div class="flex items-center gap-3 text-slate-300">
          <MapPinIcon class="h-6 w-6 text-blue-400" />
          <span>{{ t('contact.info.location') }}</span>
        </div>

        <form @submit.prevent="sendContact" class="mt-4 flex flex-col gap-4">
          <input v-model="contact.name" type="text" :placeholder="t('contact.form.name')" required class="input" />
          <input v-model="contact.email" type="email" :placeholder="t('contact.form.email')" required class="input" />

          <div class="themed-textarea-wrapper">
            <textarea v-model="contact.message" :placeholder="t('contact.form.message')" rows="4" required
              class="input themed-textarea scrollbar-glass"></textarea>
          </div>

          <button type="submit" class="btn" :disabled="sendingContact">
            {{ sendingContact ? t('contact.form.sending') : t('contact.form.send') }}
          </button>
        </form>

        <p v-if="contactSent" class="text-green-400 text-sm mt-2 text-center">
          {{ t('contact.form.sent') }}
        </p>
      </div>

      <!-- Project Form -->
      <div v-else key="project"
        class="glass-panel shadow-glass bg-slateGlass p-6 rounded-xl space-y-6 max-w-xl mx-auto">
        <form @submit.prevent="sendProject" class="grid gap-3">
          <input v-model="project.title" :placeholder="t('contact.form.project.title')" required class="input" />
          <input v-model="project.objective" :placeholder="t('contact.form.project.objective')" required
            class="input" />

          <textarea v-model="project.scope" :placeholder="t('contact.form.project.scope')" rows="3"
            class="input themed-textarea scrollbar-glass"></textarea>

          <textarea v-model="project.logic" :placeholder="t('contact.form.project.logic')" rows="3"
            class="input themed-textarea scrollbar-glass"></textarea>

          <input v-model="project.dependencies" :placeholder="t('contact.form.project.dependencies')" class="input" />
          <input v-model="project.performance" :placeholder="t('contact.form.project.performance')" class="input" />

          <!-- Budget -->
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <label class="text-slate-400 w-40">{{ t('contact.form.project.budgetLabel') }}</label>
            <div class="relative flex-1">
              <input v-model.number="project.budget" type="number" min="0" step="50" class="input w-full pr-12 appearance-none [appearance:textfield]
                    [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
              <div
                class="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center text-blue-400/70 hover:text-blue-300 transition-all">
                <button type="button" @click="project.budget += 50" class="hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                    <path fill-rule="evenodd" d="M10 4l4 6H6l4-6z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button type="button" @click="project.budget = Math.max(0, project.budget - 50)"
                  class="hover:scale-110 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-3 h-3 rotate-180">
                    <path fill-rule="evenodd" d="M10 4l4 6H6l4-6z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Urgency -->
          <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
            <label class="text-slate-400 w-40">{{ t('contact.form.project.urgencyLabel') }}</label>
            <div class="flex-1">
              <CustomSelect v-model="project.urgency" :options="urgencyOptions" />
            </div>
          </div>

          <textarea v-model="project.notes" :placeholder="t('contact.form.project.notes')" rows="3"
            class="input"></textarea>

          <button type="submit" class="btn" :disabled="sendingProject">
            {{ sendingProject ? t('contact.form.project.submitting') : t('contact.form.project.submit') }}
          </button>
        </form>

        <p v-if="projectSent" class="text-green-400 text-sm mt-2 text-center">
          {{ t('contact.form.project.sent') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { ref, onMounted, nextTick, watch, computed } from 'vue'
import * as THREE from 'three'
import { useI18n } from 'vue-i18n'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid'
import CustomSelect from '@/components/CustomSelect.vue'

const { t } = useI18n()

const activeTab = ref('contact')
const sendingContact = ref(false)
const contactSent = ref(false)
const sendingProject = ref(false)
const projectSent = ref(false)
const rootEl = ref(null)
const bgCanvas = ref(null)

const contact = ref({ name: '', email: '', message: '' })
const project = ref({
  title: '', objective: '', scope: '', logic: '', dependencies: '', performance: '', budget: null, urgency: 'Normal', notes: ''
})

const urgencyOptions = computed(() => [
  { value: 'Immediate', label: t('common.urgency.immediate') },
  { value: 'High', label: t('common.urgency.high') },
  { value: 'Normal', label: t('common.urgency.normal') },
  { value: 'Research-only', label: t('common.urgency.research') }
])


function tabClass(tab) {
  return [
    'pb-2 px-4 text-lg font-semibold border-b-2 transition-all duration-300',
    activeTab.value === tab ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-blue-300'
  ]
}

async function sendContact() {
  if (!contact.value.name || !contact.value.email || !contact.value.message) return

  sendingContact.value = true
  try {
    await addDoc(collection(db, 'contactMessages'), {
      name: contact.value.name,
      email: contact.value.email,
      message: contact.value.message,
      createdAt: serverTimestamp()
    })

    // Reset UI
    contact.value = { name: '', email: '', message: '' }
    contactSent.value = true
    setTimeout(() => (contactSent.value = false), 3000)
  } catch (err) {
    console.error('❌ Error sending contact:', err)
    alert('Error sending message. Please try again later.')
  } finally {
    sendingContact.value = false
  }
}


async function sendProject() {
  if (!project.value.title || !project.value.objective) return

  sendingProject.value = true
  try {
    await addDoc(collection(db, 'projectRequests'), {
      title: project.value.title,
      objective: project.value.objective,
      scope: project.value.scope,
      logic: project.value.logic,
      dependencies: project.value.dependencies,
      performance: project.value.performance,
      budget: project.value.budget,
      urgency: project.value.urgency,
      notes: project.value.notes,
      createdAt: serverTimestamp()
    })

    // Reset UI
    project.value = {
      title: '', objective: '', scope: '', logic: '',
      dependencies: '', performance: '', budget: null,
      urgency: 'Normal', notes: ''
    }
    projectSent.value = true
    setTimeout(() => (projectSent.value = false), 3000)
  } catch (err) {
    console.error('❌ Error sending project:', err)
    alert('Error submitting project. Please try again later.')
  } finally {
    sendingProject.value = false
  }
}


function setTab(tab) { activeTab.value = tab }

/* --- Static background setup --- */
let renderer, camera, scene, stars
onMounted(() => {
  const canvas = bgCanvas.value
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x03040a)
  scene.fog = new THREE.FogExp2(0x020617, 0.002)

  camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  camera.position.z = 3

  const starCount = window.innerWidth < 768 ? 400 : 900
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(starCount * 3)
  const col = new Float32Array(starCount * 3)
  const color = new THREE.Color()
  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3
    pos[i3] = (Math.random() - 0.5) * 400
    pos[i3 + 1] = (Math.random() - 0.5) * 400
    pos[i3 + 2] = (Math.random() - 0.5) * 400
    color.setHSL(0.6 + Math.random() * 0.1, 0.6, 0.9 + Math.random() * 0.05)
    col[i3] = color.r; col[i3 + 1] = color.g; col[i3 + 2] = color.b
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
  stars = new THREE.Points(geo, new THREE.PointsMaterial({
    vertexColors: true, size: 0.07, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
  }))
  scene.add(stars)

  renderer.setSize(canvas.clientWidth, rootEl.value.offsetHeight)
  window.addEventListener('resize', () => renderer.setSize(canvas.clientWidth, rootEl.value.offsetHeight))

  const animate = () => {
    requestAnimationFrame(animate)
    stars.rotation.y += 0.0004
    stars.rotation.x += 0.0002
    renderer.render(scene, camera)
  }
  animate()
})
</script>


<style scoped>
.themed-textarea {
  resize: none;
  /* disable browser resizer completely */
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 3rem;
  width: 100%;
  cursor: text;
  padding-right: 0.75rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(100, 150, 255, 0.2);
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}

/* custom scrollbar */
.scrollbar-glass::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-glass::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(80, 120, 255, 0.4), rgba(100, 160, 255, 0.2));
  border-radius: 6px;
}

.scrollbar-glass::-webkit-scrollbar-track {
  background: rgba(30, 40, 70, 0.2);
}

/* focus glow */
.themed-textarea:focus {
  border-color: rgba(80, 130, 255, 0.6);
  box-shadow: 0 0 12px rgba(60, 120, 255, 0.25);
  outline: none;
}

.input {
  @apply bg-black/40 backdrop-blur-sm border border-slate-700/40 rounded-lg p-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200;
}

.btn {
  @apply bg-blue-500/80 hover:bg-blue-600 text-black font-bold rounded-lg p-3 uppercase tracking-wide transition-transform duration-200;
}

.btn:hover {
  transform: scale(1.02);
}

.scrollbar-glass::-webkit-scrollbar,
.scrollbar-glass::-webkit-scrollbar-thumb {
  cursor: default;
}

/* Glow on hover */
.scrollbar-glass::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(120, 160, 255, 0.8), rgba(80, 130, 255, 0.5));
  box-shadow: 0 0 6px rgba(100, 150, 255, 0.7);
  transition: all 0.3s ease;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.animate-pulse-slow {
  animation: pulseSlow 6s ease-in-out infinite;
}

@keyframes pulseSlow {

  0%,
  100% {
    opacity: 0.3
  }

  50% {
    opacity: 0.7
  }
}
</style>
