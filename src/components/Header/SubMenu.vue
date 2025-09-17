<script lang="ts" setup>
import type { SubMenuItemT } from '@/models/models'
import SubmenuItem from './SubmenuItem.vue'

type Props = {
  item: SubMenuItemT
  openMenuId: string | null
  toggleMenu: (id: string) => void
}

defineProps<Props>()
</script>
<template>
  <div class="submenu" @click.stop v-if="openMenuId === item.id">
    <template v-for="childItem in item.children" :key="childItem.id">
      <SubmenuItem
        className="submenu-link"
        :data="childItem"
        :toggleMenu="toggleMenu"
        :openMenuId="openMenuId"
      />
    </template>
  </div>
</template>
<style lang="scss" scoped>
@use '../../styles/variables' as vars;
@use '../../styles/_mixins' as mixins;

.submenu {
  position: absolute;
  left: 0;
  top: 120%;
  border: 1px solid vars.$border-light;
  padding: 0.5rem;
  min-width: 100%;
  border-radius: 0.8rem;
  z-index: 10;
  background-color: vars.$dark-grey;
  animation: animate 200ms ease;
}
</style>
