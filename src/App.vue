<script setup lang="ts">
import AppHeader from './components/Header/AppHeader.vue'
import BreadCrumbsNavigation from './components/Global/BreadCrumbsNavigation.vue'
</script>

<template>
  <AppHeader />
  <BreadCrumbsNavigation />
  <RouterView />
</template>

<style scoped lang="scss"></style>
