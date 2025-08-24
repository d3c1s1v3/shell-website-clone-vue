<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink to="/">
      <img src="/favicon.ico" alt="Shell" class="" />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 130rem;
  margin: 0 auto;
  padding: 1rem 0;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
