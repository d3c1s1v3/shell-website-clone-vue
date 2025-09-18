<script setup lang="ts">
import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

import { useMenu } from '@/composables/useMenu'
import { menuItems, iconItems } from '@/constants/navigation'
import IconLink from './IconLink.vue'
import SubMenu from './SubMenu.vue'
import AppContainer from '../Global/AppContainer.vue'

const { openMenuId, isLinkActive, hasActiveChild, toggleMenu } = useMenu()
</script>

<template>
  <nav>
    <AppContainer className="container">
      <RouterLink to="/" class="logo-wrapper">
        <img src="/favicon.ico" alt="Shell" id="logo" />
      </RouterLink>

      <div class="menu-wrapper">
        <template v-for="item in menuItems" :key="item.id">
          <RouterLink
            v-if="item.type === 'link'"
            :to="item.to!"
            class="link-wrapper"
            :class="{ 'router-link-active': isLinkActive(item.to!).value }"
          >
            <div class="link-inner">{{ item.label }}</div>
          </RouterLink>

          <button
            @click="toggleMenu(item.id)"
            v-else-if="item.type === 'expandable'"
            class="link-wrapper"
            :class="{
              'router-link-active': hasActiveChild(item),
            }"
          >
            <div class="link-inner">
              <span>{{ item.label }}</span>
              <AkChevronDownSmall />
            </div>

            <SubMenu :item="item" :openMenuId="openMenuId" :toggleMenu="toggleMenu" />
          </button>
        </template>
      </div>

      <IconLink :iconItems="iconItems" />
    </AppContainer>
  </nav>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as vars;
@use '../../styles/_mixins' as mixins;

nav {
  border-bottom: 1px solid vars.$border;
}

.container {
  height: 7rem;
  display: flex;
  align-items: center;
}

.logo-wrapper {
  #logo {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
}

.menu-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    .link-inner {
      background-color: vars.$link-hover;
    }
  }

  .link-inner {
    padding: 1.4rem 0.8rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    @include mixins.transition;
  }
}

.router-link-active:not(:has(img))::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.4rem;
  background-color: vars.$golden-yellow;
  bottom: 0;
  left: 0;
  opacity: 1;
  transform: scaleY(1);
  @include mixins.transition;
}

.link-wrapper:not(.router-link-active):not(:has(img))::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.4rem;
  bottom: 0;
  left: 0;
  opacity: 0;
  transform: scaleY(0);
  @include mixins.transition;
}

.icons-wrapper .link-wrapper::before,
.submenu-link.router-link-active::before {
  display: none !important;
  content: none !important;
}
</style>
