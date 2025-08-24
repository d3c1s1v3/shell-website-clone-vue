import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Klienci',
      component: () => import('@/pages/KlienciPage.vue'),
    },
    {
      path: '/biznesowi',
      name: 'Biznesowi',
      component: () => import('@/pages/BiznesowiPage.vue'),
    },
    {
      path: '/o-shell',
      name: 'O Shell',
      component: () => import('@/pages/OShellPage.vue'),
    },
  ],
})

export default router
