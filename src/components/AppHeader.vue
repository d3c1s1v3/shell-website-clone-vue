<script setup lang="ts">
import AppHeaderNavBottom from './AppHeaderNavBottom.vue'
import AppHeaderNavTop from './AppHeaderNavTop.vue'
</script>

<template>
  <header>
    <div class="container">
      <AppHeaderNavTop />
      <AppHeaderNavBottom />
    </div>
  </header>
</template>

<style scoped lang="scss">
.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
