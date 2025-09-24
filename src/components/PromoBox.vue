<script setup lang="ts">
import type { Component } from 'vue'

import AppContainer from './Global/AppContainer.vue'

type Props = {
  inverted?: boolean
  imgUrl: string
  heading: string
  paragraph: string
  buttonText: string
  buttonIcon?: Component
}

defineProps<Props>()
</script>
<template>
  <AppContainer>
    <div class="promo-box" :class="{ inverted: inverted }">
      <div class="img-box">IMAGE</div>
      <div class="text-box">TEXT</div>
    </div>
  </AppContainer>
</template>
<style scoped lang="scss">
@use '../styles/variables' as vars;
.promo-box {
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: vars.$border-radius;
  display: flex;
  overflow: hidden;

  &.inverted {
    flex-direction: row-reverse;
  }

  .img-box {
    background: red;
    flex: 1;
  }

  .text-box {
    background: blue;
    flex: 1;
  }
}
</style>
