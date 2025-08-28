<script setup lang="ts">
import { homePageLinks } from '@/constants/NavLinks'
</script>

<template>
  <div class="border-bottom">
    <nav class="container">
      <router-link to="/">
        <img src="/favicon.ico" alt="Shell" />
      </router-link>
      <ul class="list-dropdown">
        <li v-for="link in homePageLinks" :key="link.label">
          <router-link v-if="link.path" :to="link.path">
            {{ link.label }}
          </router-link>
          <span v-else>{{ link.label }} <component :is="link.icon" /></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;
@use '../styles/mixins' as mixins;

.border-bottom {
  border-bottom: 1px solid vars.$border;

  nav.container {
    max-width: 130rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;

      &.list-dropdown {
        flex: 1;
        li {
          cursor: pointer;
          @include mixins.link-hover;
        }
      }
    }
  }
}

img {
  width: 50px;
  height: 50px;
}
</style>
