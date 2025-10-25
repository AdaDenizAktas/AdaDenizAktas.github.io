import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../pages/About.vue') },
  { path: '/skills', name: 'Skills', component: () => import('../pages/Skills.vue') },
  { path: '/experience', name: 'Experience', component: () => import('../pages/Experience.vue') },
  { path: '/projects', name: 'Projects', component: () => import('../pages/Projects.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../pages/Contact.vue') },
  { path: '/rift', name: 'Rift', component: () => import('../layouts/RiftLayout.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
