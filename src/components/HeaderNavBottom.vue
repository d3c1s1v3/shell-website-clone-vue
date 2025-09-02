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
          <span v-else>
            {{ link.label }}
            <component :is="link.icon" class="chevron" />
          </span>
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
  height: 6rem;

  nav.container {
    height: 100%;
    max-width: 130rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    ul {
      display: flex;
      height: 100%;

      &.list-dropdown {
        flex: 1;
        li {
          position: relative;
          cursor: pointer;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          height: 100%;

          & > * {
            @include mixins.link-hover;
            font-size: 1.4rem;
            padding: 1.2rem;
          }
          & .router-link-active {
            @include mixins.active-link-indicator(93%);
          }

          svg {
            transform: translateY(4px);
          }
        }
      }
    }
  }
}

.chevron {
  font-size: 1.8rem;
}

img {
  width: 45px;
  height: 45px;
}
</style>
