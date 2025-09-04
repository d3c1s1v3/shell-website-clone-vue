<script setup lang="ts">
import NavBottomDropdown from './NavBottomDropdown.vue'
import { homePageLinks } from '@/constants/nav-links'
import { useToggle } from '@/composables/useToggle'

const { currentIndex, isOpen, toggle } = useToggle()
</script>

<template>
  <div class="border-bottom">
    <nav class="container">
      <RouterLink to="/">
        <img src="/favicon.ico" alt="Shell" />
      </RouterLink>
      <ul class="list-dropdown">
        <li v-for="(link, index) in homePageLinks" :key="link.label">
          <RouterLink v-if="link.path" :to="link.path">
            {{ link.label }}
          </RouterLink>
          <span v-else @click="toggle(index)">
            {{ link.label }}
            <component :is="link.icon" class="chevron" />
          </span>
          <NavBottomDropdown v-if="currentIndex === index && isOpen" v-bind="link" />
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

      &.list-dropdown {
        flex: 1;
        li {
          position: relative;
          font-size: 1.4rem;
          display: flex;
          align-items: center;

          & > a,
          & > span {
            @include mixins.link-hover;
            font-size: 1.4rem;
            padding: 1.2rem;
            cursor: pointer;
          }

          & > .router-link-active {
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
