<script lang="ts" setup>
import type { Component } from 'vue'
import { useRoute } from 'vue-router'

type SubMenu = {
  label: string
  path?: string
  icon?: Component
  submenu?: SubMenu[]
}

const { submenu } = defineProps<SubMenu>()
const route = useRoute()

console.log(route.path)
</script>

<template>
  <ul class="absolute">
    <li v-for="(link, index) in submenu" :key="link.label">
      <RouterLink
        v-if="link.path"
        :to="link.path"
        :style="{ fontWeight: index === 0 ? 'bold' : undefined }"
      >
        {{ link.label }}
      </RouterLink>
      <span v-else>
        {{ link.label }}
        <component v-if="link.icon" :is="link.icon" />
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '../styles/mixins' as mixins;
@use '../styles/variables' as vars;

ul.absolute {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 34.6rem;
  padding: 0.5rem;
  background-color: vars.$dark-grey;
  border: 1px solid vars.$border;
  border-radius: 1rem;
  top: 150%;
  animation: show 200ms ease-out;
  transform-origin: top;

  li {
    border-radius: 0.4rem;
    @include mixins.link-hover;

    a,
    span {
      display: inline-block;
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
    }

    .submenu {
      padding-left: 3rem;
    }
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
