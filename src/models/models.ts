import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

interface MenuItemI {
  id: string
  label: string
  type: 'link' | 'expandable'
  to?: string
  isOpen?: boolean
  toggle?: () => void
  children?: SubMenuItemI[]
}

interface SubMenuItemI {
  id: string
  label: string
  type: 'link' | 'expandable'
  to?: string
  children?: SubMenuItemI[]
}

interface IconItemI {
  id: string
  type: 'link' | 'external'
  to?: string
  href?: string
  icon: Component
  target?: string
}

type BreadcrumbItemI = {
  title: string
  route: RouteLocationRaw
  isCurrent: boolean
}

export type { IconItemI, MenuItemI, SubMenuItemI, BreadcrumbItemI }
