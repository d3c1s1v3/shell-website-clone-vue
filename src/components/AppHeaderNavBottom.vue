<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="border-bottom">
    <nav class="container">
      <RouterLink to="/">
        <img src="/favicon.ico" alt="Shell" />
      </RouterLink>
      <ul></ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;

.border-bottom {
  border-bottom: 1px solid vars.$border;

  .container {
    max-width: 130rem;
    margin: 0 auto;

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
