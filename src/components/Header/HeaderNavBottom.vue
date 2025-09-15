<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

import { menuItems, iconItems } from '@/constants/navigation'
import SubmenuItem from './SubmenuItem.vue'
import HeaderContainer from './HeaderContainer.vue'
import IconLink from './IconLink.vue'

const route = useRoute()

const openMenuId = ref<string | null>(null)
const toggleMenu = (id: string) => {
  openMenuId.value = openMenuId.value === id ? null : id
}

watchEffect(() => {
  console.log(route.fullPath)
})
</script>

<template>
  <nav>
    <HeaderContainer className="container">
      <RouterLink to="/" class="logo-wrapper">
        <img src="/favicon.ico" alt="Shell" id="logo" />
      </RouterLink>

      <div class="menu-wrapper">
        <template v-for="item in menuItems" :key="item.id">
          <RouterLink v-if="item.type === 'link'" :to="item.to!" class="link-wrapper">
            <div class="link-inner">{{ item.label }}</div>
          </RouterLink>

          <button
            @click="toggleMenu(item.id)"
            v-else-if="item.type === 'expandable'"
            class="link-wrapper"
            :class="{
              'router-link-active': route.path.startsWith(`/${item.id}`),
            }"
          >
            <div class="link-inner">
              <span>{{ item.label }}</span>
              <AkChevronDownSmall />
            </div>
            <div class="submenu" @click.stop v-if="openMenuId === item.id">
              <template v-for="childItem in item.children" :key="childItem.id">
                <SubmenuItem
                  className="submenu-link"
                  :data="childItem"
                  :toggleMenu="toggleMenu"
                  :openMenuId="openMenuId"
                />
              </template>
            </div>
          </button>
        </template>
      </div>

      <IconLink :iconItems="iconItems" />
    </HeaderContainer>
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

  .link-inner {
    padding: 1.4rem 0.8rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    @include mixins.transition;

    &:hover {
      background-color: vars.$link-hover;
    }
  }
}

.submenu {
  position: absolute;
  left: 0;
  top: 120%;
  border: 1px solid vars.$border-light;
  padding: 0.8rem;
  min-width: 100%;
  border-radius: 0.8rem;
  z-index: 10;
  background-color: vars.$dark-grey;
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
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
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
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  @include mixins.transition;
}

.icons-wrapper .link-wrapper::before,
.submenu-link.router-link-active::before {
  display: none !important;
  content: none !important;
}
</style>
