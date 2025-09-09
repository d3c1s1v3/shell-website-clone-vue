<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import BreadCrumbsNavigation from './components/BreadCrumbsNavigation.vue'
</script>

<template>
  <AppHeader />
  <BreadCrumbsNavigation />
  <RouterView />
</template>

<style scoped lang="scss"></style>
