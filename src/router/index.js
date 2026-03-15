import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '@/components/test.vue'
import Counter from '@/components/Counter.vue'
import VFor from '@/components/VFor.vue'
import Computed from '@/components/Computed.vue'
import ControlledInput from '@/components/ControlledInput.vue'
import DinamicCSS from '@/components/DinamicCSS.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: test,
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter,
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: VFor,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/ControlledInput',
      name: 'ControlledInput',
      component: ControlledInput,
    },
    {
      path: '/DinamicCSS',
      name: 'DinamicCSS',
      component: DinamicCSS,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
