import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // top bar start
    {
      path: '/',
      component: () => import('@/pages/Main/KlienciPage.vue'),
      meta: { title: 'Witamy w Shell' },
    },
    {
      path: '/biznesowi',
      component: () => import('@/pages/Main/BiznesowiPage.vue'),
      meta: { title: 'Klienci Biznesowi' },
    },
    {
      path: '/o-shell',
      component: () => import('@/pages/Main/OShellPage.vue'),
      meta: { title: 'O Shell' },
    },
    // top bar end
    // bottom nav start
    {
      path: '/clubsmart',
      name: 'Korzyści z Shell ClubSmart',
      component: () => import('@/pages/ClubSmart/ClubSmartPage.vue'),
      meta: { title: 'Korzyści z Shell ClubSmart' },
      children: [
        {
          path: 'aplikacja',
          name: 'Aplikacja Shell ClubSmart',
          component: () => import('@/pages/ClubSmart/ClubSmartAplikacjaPage.vue'),
          meta: { title: 'Aplikacja Shell ClubSmart' },
        },
      ],
    },

    {
      path: '/stacje-shell',
      name: 'Stacje Shell',
      component: () => import('@/pages/Stacje/StacjeShell.vue'),
      meta: { title: 'Stacje Shell' },
    },
    {
      path: '/ladowanie-samochodow-elektrycznych',
      name: 'Ładowanie pojazdów elektrycznych',
      component: () => import('@/pages/Ladowanie/LadowaniePage.vue'),
      meta: { title: 'Ładowanie pojazdów elektrycznych ' },
    },
    {
      path: '/paliwa-oleje-i-plyny-do-chlodnic',
      name: 'Paliwa, oleje i płyny do chłodnic',
      component: () => import('@/pages/Produkty/ProduktyPage.vue'),
      meta: { title: 'Paliwa, oleje i płyny chłodzące firmy Shell  ' },
    },
    // bottom nav end

    {
      path: '/strona-nie-istnieje',
      name: 'Strona nie istnieje',
      component: () => import('@/pages/NotFoundPage.vue'),
      meta: { title: 'Strona nie istnieje' },
    },
    {
      path: '/:patchMatch(.*)*',
      redirect: '/strona-nie-istnieje',
    },
  ],
})

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? `${to.meta.title} | Witamy w Shell` : ''
})

export default router
