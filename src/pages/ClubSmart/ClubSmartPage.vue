<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <template v-if="route.path === '/clubsmart'">
    <div>CLUBSMARTPAGE</div>
  </template>
  <RouterView />
</template>
<style scoped lang="scss"></style>
