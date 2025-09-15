import type { Component } from 'vue'

interface MenuItemT {
  id: string
  label: string
  type: 'link' | 'expandable'
  to?: string
  isOpen?: boolean
  toggle?: () => void
  children?: SubMenuItemT[]
}

interface SubMenuItemT {
  id: string
  label: string
  type: 'link' | 'expandable'
  to?: string
  children?: SubMenuItemT[]
}

interface IconItemT {
  id: string
  type: 'link' | 'external'
  to?: string
  href?: string
  icon: Component
  target?: string
}

export type { IconItemT, MenuItemT, SubMenuItemT }
