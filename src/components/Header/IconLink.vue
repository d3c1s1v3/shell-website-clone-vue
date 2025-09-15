<script lang="ts" setup>
import type { IconItemT } from '@/models/models'

type Props = {
  iconItems: IconItemT[]
}

defineProps<Props>()
</script>
<template>
  <div class="icons-wrapper">
    <template v-for="item in iconItems" :key="item.id">
      <RouterLink v-if="item.type === 'link'" :to="item.to!" class="link-wrapper">
        <div class="link-inner">
          <component :is="item.icon" class="icon" />
        </div>
      </RouterLink>

      <a
        v-else-if="item.type === 'external'"
        :href="item.href"
        :target="item.target"
        class="link-wrapper"
      >
        <div class="link-inner">
          <component :is="item.icon" class="icon" />
        </div>
      </a>
    </template>
  </div>
</template>
<style scoped lang="scss">
@use '../../styles/mixins' as mixins;
@use '../../styles/variables' as vars;

.icons-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  gap: 1rem;

  a div {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    @include mixins.transition;

    &:hover {
      background-color: vars.$link-hover;
    }

    .icon {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
}
</style>
