import type { Component } from 'vue'

interface MenuItem {
  id: string
  label: string
  type: 'link' | 'dropdown'
  to?: string
  items?: SubMenuItem[]
}

interface SubMenuItem {
  id: string
  label: string
  type: 'link' | 'expandable'
  to?: string
  items?: SubMenuItem[]
}

interface IconItem {
  id: string
  type: 'link' | 'external'
  to?: string
  href?: string
  icon: Component
  target?: string
}

export type { IconItem, MenuItem }
