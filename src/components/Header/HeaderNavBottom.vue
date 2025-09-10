<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

import { iconItems, menuItems } from '@/constants/navigation'

const openMenuId = ref<string | null>()
const expand = ref(false)
const route = useRoute()

watchEffect(() => {
  if (openMenuId.value) console.log(openMenuId.value)
  else console.log('Menu disabled')
})

const isClubSmartActive = computed(() => route.path.startsWith('/clubsmart'))
</script>

<template>
  <nav>
    <div class="container">
      <!-- Logo -->
      <RouterLink to="/" class="logo-wrapper">
        <img src="/favicon.ico" alt="Shell" id="logo" />
      </RouterLink>

      <!-- Main Menu -->
      <div class="menu-wrapper">
        <template v-for="item in menuItems" :key="item.id">
          <!-- Regular Link -->
          <RouterLink v-if="item.type === 'link'" :to="item.to!" class="link-wrapper">
            <div class="link-inner">{{ item.label }}</div>
          </RouterLink>

          <!-- Dropdown Menu -->
          <button
            v-else-if="item.type === 'dropdown'"
            class="link-wrapper"
            :class="{ 'router-link-active': item.id === 'clubsmart' && isClubSmartActive }"
            @click="openMenuId = openMenuId === item.id ? null : item.id"
          >
            <div class="link-inner">
              <span>{{ item.label }}</span>
              <AkChevronDownSmall class="chevron-icon" />
            </div>

            <!-- Submenu -->
            <div v-if="item.items && openMenuId === item.id" class="submenu">
              <template v-for="subItem in item.items" :key="subItem.id">
                <!-- Submenu Link -->
                <RouterLink
                  v-if="subItem.type === 'link'"
                  :to="subItem.to!"
                  class="submenu-link"
                  :class="{ bold: subItem.id.includes('main') }"
                >
                  {{ subItem.label }}
                </RouterLink>

                <!-- Expandable Submenu -->
                <div
                  v-else-if="subItem.type === 'expandable'"
                  class="submenu-link expand"
                  @click.stop="expand = !expand"
                >
                  <div class="chevron-wrapper">
                    {{ subItem.label }}
                    <AkChevronDownSmall :class="expand && 'expand-icon-invert'" />
                  </div>
                </div>
                <!-- Expanded Items -->
                <template v-if="expand && subItem.items">
                  <RouterLink
                    v-for="expandedItem in subItem.items"
                    :key="expandedItem.id"
                    :to="expandedItem.to!"
                    class="submenu-link nested"
                    :class="{ bold: expandedItem.id.includes('main') }"
                  >
                    {{ expandedItem.label }}
                  </RouterLink>
                </template>
              </template>
            </div>
          </button>
        </template>
      </div>

      <!-- Icon Menu -->
      <div class="icons-wrapper">
        <template v-for="item in iconItems" :key="item.id">
          <!-- Internal Link -->
          <RouterLink v-if="item.type === 'link'" :to="item.to!" class="link-wrapper">
            <div class="link-inner">
              <component :is="item.icon" class="icon" />
            </div>
          </RouterLink>

          <!-- External Link -->
          <a
            v-else-if="item.type === 'external'"
            :href="item.href"
            :target="item.target"
            class="link-wrapper"
          >
            <div class="link-inner">
              <component :is="item.icon" class="icon" />
            </div>
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as vars;
@use '../../styles/_mixins' as mixins;

nav {
  border-bottom: 1px solid vars.$border;
}

.container {
  max-width: 130rem;
  height: 7rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

// Logo
.logo-wrapper {
  #logo {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
}

// Main Menu
.menu-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Icon Menu
.icons-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  gap: 1rem;

  a div {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
}

// Link Styles
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

// Submenu
.submenu {
  position: absolute;
  left: 0;
  top: 120%;
  border: 1px solid vars.$border-light;
  padding: 0.8rem;
  min-width: 100%;
  border-radius: 0.8rem;
  z-index: 10;
}

.submenu-link {
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
  white-space: nowrap;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;

  @include mixins.transition;

  &.bold {
    font-weight: 600;
  }

  &.nested {
    padding-left: 2rem;
    white-space: wrap;
    line-height: 1.6;
  }

  &:hover {
    background-color: vars.$link-hover;
  }

  .chevron-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .expand-icon-invert {
      transform: rotate(180deg);
    }
  }
}

// Active Link Indicators
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

// Hide indicators on icon links and submenu links
.icons-wrapper .link-wrapper::before,
.submenu-link.router-link-active::before {
  display: none !important;
  content: none !important;
}
</style>
