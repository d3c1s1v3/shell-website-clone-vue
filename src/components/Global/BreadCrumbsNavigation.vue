<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { AkChevronRight } from '@kalimahapps/vue-icons'

import { useRouterBreadcrums } from '@/composables/useBreadcrumer'
import AppContainer from './AppContainer.vue'

const route = useRoute()

const breadCrumbItems = useRouterBreadcrums()

watchEffect(() => console.log(breadCrumbItems.value))
</script>
<template>
  <AppContainer className="breadcrumb-container">
    <nav class="breadcrumbs" v-if="route.path !== '/'">
      <RouterLink to="/">Strona Główna</RouterLink>
      <template v-for="item in breadCrumbItems" :key="item.route">
        <AkChevronRight class="separator" />
        <RouterLink :to="item.route">{{ item.title }}</RouterLink>
      </template>
    </nav>
  </AppContainer>
</template>
<style scoped lang="scss">
.breadcrumb-container {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }
}

a {
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
}

.separator {
  width: 1.2rem;
  height: 1.2rem;
  opacity: 0.7;
  margin-inline: 0.5rem;
}
</style>
