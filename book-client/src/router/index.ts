// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import FormView from '../views/FormView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/done',
    name: 'done',
    component: ConfirmationView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL) || '/',
  routes
})

export default router
