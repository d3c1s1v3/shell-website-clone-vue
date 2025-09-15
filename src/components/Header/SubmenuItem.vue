<script setup lang="ts">
import { ref, toRefs } from 'vue'
// import { useRoute } from 'vue-router'
import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

import SubmenuItem from '@/components//Header/SubmenuItem.vue'
import type { SubMenuItemT } from '@/models/models'

type Props = {
  data: SubMenuItemT
  className: string
  toggleMenu: (id: string) => void
  openMenuId: string
}

const props = defineProps<Props>()
const { data } = toRefs(props)
const expand = ref(false)
</script>

<template>
  <div>
    <RouterLink
      v-if="data.to"
      class="submenu-link"
      :class="data.id.includes('main') && 'bold'"
      :to="data.to!"
    >
      {{ data.label }}
    </RouterLink>
    <div v-else>
      <div class="expandable" @click="expand = !expand">
        {{ data.label }}
        <AkChevronDownSmall :class="expand && 'expand-icon-invert'" />
      </div>

      <div v-if="expand && data.children" class="submenu-children">
        <SubmenuItem
          v-for="child in data.children"
          :key="child.id"
          :data="child"
          :className="className"
          :toggleMenu="toggleMenu"
          :openMenuId="openMenuId"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as mixins;
@use '../../styles/variables' as vars;

.submenu-link {
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
  white-space: nowrap;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;

  @include mixins.transition;
  animation: animate 200ms ease;

  &:hover {
    background-color: vars.$link-hover;
  }
}

.expandable {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
  white-space: nowrap;
  border-radius: 0.3rem;
  animation: animate 200ms ease;

  a {
    width: 100%;
  }

  &:hover {
    background-color: vars.$link-hover;
  }

  .expand-icon-invert {
    transform: rotate(180deg);
  }
}

.bold {
  font-weight: 600;
}

.submenu-children {
  padding-left: 1.5rem;
  white-space: normal;

  .expandable,
  .submenu-link {
    white-space: normal;
    line-height: 1.4;
  }
}
</style>
