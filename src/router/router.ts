import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Klienci',
      component: () => import('@/pages/KlienciPage.vue'),
      meta: { title: 'Witamy w Shell' },
    },
    {
      path: '/biznesowi',
      name: 'Biznesowi',
      component: () => import('@/pages/BiznesowiPage.vue'),
      meta: { title: 'Klienci Biznesowi' },
    },
    {
      path: '/o-shell',
      name: 'O Shell',
      component: () => import('@/pages/OShellPage.vue'),
      meta: { title: 'O Shell' },
    },
    {
      path: '/stacje-shell',
      name: 'Stacje Shell',
      component: () => import('@/pages/StacjeShell.vue'),
      meta: { title: 'Stacje Shell | Witamy w Shell' },
    },
    {
      path: '/ladowanie-samochodow-elektrycznych',
      name: 'Ładowanie pojazdów elektrycznych',
      component: () => import('@/pages/LadowaniePage.vue'),
      meta: { title: 'Ładowanie pojazdów elektrycznych | Witamy w Shell' },
    },
    {
      path: '/clubsmart',
      name: 'ClubSmart',
      component: () => import('@/pages/ClubSmartPage.vue'),
      meta: { title: 'Shell ClubSmart | Witamy w Shell' },
      children: [
        {
          path: '/aplikacja',
          name: 'ClubSmartAplikacja',
          component: () => null,
          meta: { title: 'Aplikacja Shell ClubSmart' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Not Found',
      component: () => import('@/pages/NotFoundPage.vue'),
      meta: { title: 'Strona nie istnieje | Witamy w Shell' },
    },
  ],
})

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : ''
})

export default router
