<script setup lang="ts">
import type { Component } from 'vue'

import AppContainer from './Global/AppContainer.vue'

type Props = {
  inverted?: boolean
  imgUrl: string
  imgAlt: string
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
      <div class="img-box">
        <img :src="imgUrl" :alt="imgAlt" />
      </div>
      <div class="text-box">TEXT</div>
    </div>
  </AppContainer>
</template>
<style scoped lang="scss">
@use '../styles/variables' as vars;
.promo-box {
  margin-block: 2rem;
  border-radius: vars.$border-radius;
  display: flex;
  overflow: hidden;

  &.inverted {
    flex-direction: row-reverse;
  }

  .img-box {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  .text-box {
    flex: 1;
    background-color: vars.$very-dark-grey;
  }
}
</style>
