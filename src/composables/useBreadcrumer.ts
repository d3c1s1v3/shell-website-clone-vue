import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { BreadcrumbItemI } from '@/models/models'

export const useRouterBreadcrums = () => {
  const router = useRouter()
  const route = useRoute()

  const getRouteSegments = (): BreadcrumbItemI[] => {
    const current = router.currentRoute.value
    const pathSegments = current.path.split('/').filter(Boolean)

    const pathIncrementalSegments = pathSegments.map(
      (_, idx) => `/${pathSegments.slice(0, idx + 1).join('/')}`,
    )

    const matchedRoutes = pathIncrementalSegments.map((s) => router.resolve(s))

    return matchedRoutes
      .filter((r) => r.name)
      .map((r) => {
        return {
          route: r.path,
          title: String(r.name),
          isCurrent: r.name === route.name,
        }
      })
  }
  const breadCrumbItems = computed(getRouteSegments)
  return breadCrumbItems
}
