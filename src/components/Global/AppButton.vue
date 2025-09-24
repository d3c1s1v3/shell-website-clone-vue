<script setup lang="ts">
import type { Component } from 'vue'

type Props = {
  text: string
  className?: string
  startIcon?: Component
  endIcon?: Component
}

const { text, startIcon, endIcon } = defineProps<Props>()
</script>

<template>
  <a href="https://shell.pl" target="_blank">
    <button :class="className" class="button-primary">
      <component v-if="startIcon" :is="startIcon" class="button-icon" />
      {{ text }}
      <component v-if="endIcon" :is="endIcon" class="button-icon" />
    </button>
  </a>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as vars;

button {
  height: 3.1rem;
  gap: 0.7rem;

  .button-icon {
    font-size: 1.8rem;
  }
}
</style>
