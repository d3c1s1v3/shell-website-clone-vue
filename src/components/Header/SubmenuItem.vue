<script setup lang="ts">
import { ref, toRefs } from 'vue'

import type { SubMenuItemT } from '@/models/models'
import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

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
  <RouterLink
    class="submenu-link"
    :class="data.id.includes('main') && 'bold'"
    v-if="data.type === 'link'"
    :to="data.to!"
  >
    {{ data.label }}
  </RouterLink>
  <template v-if="data.type === 'expandable'">
    <div class="expandable" @click="expand = !expand">
      {{ data.label }}
      <div>
        <AkChevronDownSmall :class="expand && 'expand-icon-invert'" />
      </div>
    </div>
    <template v-if="expand">
      <div class="expandable" v-for="child in data.children" :key="child.id">
        <div class="nested-submenu" :class="child.id.includes('main') && 'bold'">
          <RouterLink v-if="child.type === 'link'" :to="child.to!">{{ child.label }}</RouterLink>
        </div>
      </div>
    </template>
  </template>
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
  white-space: wrap;
  border-radius: 0.3rem;

  &:hover {
    background-color: vars.$link-hover;
  }

  .expand-icon-invert {
    transform: rotate(180deg);
  }
}

.nested-submenu {
  padding-left: 1rem;
  line-height: 1.4;
}

.bold {
  font-weight: 600;
}
</style>
