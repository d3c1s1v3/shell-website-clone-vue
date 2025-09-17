import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import type { SubMenuItemI } from '@/models/models'

export const useMenu = () => {
  const route = useRoute()
  const openMenuId = ref<string | null>(null)
  const expand = ref(false)

  const isActive = (value: SubMenuItemI) => {
    return computed(() => value.to && route.path === value.to)
  }
  const isLinkActive = (linkPath: string) => {
    return computed(() => route.path === linkPath)
  }
  const hasActiveChild = (item: SubMenuItemI): boolean => {
    if (item.to && route.path === item.to) return true
    if (item.children) {
      return item.children.some((child: SubMenuItemI) => hasActiveChild(child))
    }
    return false
  }
  const toggleMenu = (id: string) => {
    openMenuId.value = openMenuId.value === id ? null : id
  }

  return { route, openMenuId, isLinkActive, hasActiveChild, toggleMenu, isActive, expand }
}
