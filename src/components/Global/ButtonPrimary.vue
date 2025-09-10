<script setup lang="ts">
import type { Component } from 'vue'

type Props = {
  text: string
  startIcon?: Component
  endIcon?: Component
}

const { text, startIcon, endIcon } = defineProps<Props>()
</script>

<template>
  <a href="https://shell.pl" target="_blank">
    <button>
      <component v-if="startIcon" :is="startIcon" class="button-icon" />
      {{ text }}
      <component v-if="endIcon" :is="endIcon" class="button-icon" />
    </button>
  </a>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as vars;

button {
  padding: 1.2rem;
  height: 3.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: vars.$golden-yellow;
  border-radius: 0.4rem;
  border: 0.1rem solid transparent;
  transition: all 200ms ease-out;
  font-weight: bolder;
  color: vars.$dark-grey;

  .button-icon {
    font-size: 1.8rem;
  }

  &:hover {
    background-color: vars.$dark-grey;
    border-color: vars.$golden-yellow;
    color: vars.$golden-yellow;
  }
}
</style>
