<script lang="ts" setup>
import type { Component } from 'vue'

type Props = {
  label: string
  path?: string
  icon?: Component
  submenu?: { label: string; path?: string }[]
}

const { submenu } = defineProps<Props>()

console.log(submenu === undefined ? 'no submenu yet' : submenu)
</script>

<template>
  <ul>
    <li v-for="link in submenu" :key="link.label">{{ link.label }}</li>
  </ul>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;

ul {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 34.6rem;
  gap: 2rem;
  padding: 1rem;
  background-color: vars.$dark-grey;
  border: 1px solid vars.$border;
  border-radius: 1rem;
  top: 130%;

  animation: show 200ms ease-out;
  transform-origin: top;

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
