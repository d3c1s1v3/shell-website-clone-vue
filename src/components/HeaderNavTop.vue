<script lang="ts" setup>
import { FaUser, PhBoldCopySimple } from '@kalimahapps/vue-icons'

import ButtonPrimary from './ButtonPrimary.vue'
</script>

<template>
  <nav>
    <div class="container">
      <RouterLink to="/">
        <div class="nav-link">Klienci</div>
      </RouterLink>
      <RouterLink to="/biznesowi">
        <div class="nav-link">Biznes</div>
      </RouterLink>
      <RouterLink to="/o-shell">
        <div class="nav-link">O Shell</div>
      </RouterLink>
      <div class="grow"></div>
      <ButtonPrimary text="Shell ClubSmart" :start-icon="FaUser" :end-icon="PhBoldCopySimple" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;

nav {
  background-color: vars.$very-dark-grey;
}

.container {
  max-width: 130rem;
  height: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grow {
  flex: 1;
}

a {
  position: relative;
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  .nav-link {
    position: relative;
    padding: 0.8rem;
    transition: background-color 200ms ease-in-out;
    border-radius: 0.3rem;
    &:hover {
      background-color: vars.$link-hover;
    }
  }
}

.router-link-active {
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.4rem;
    background-color: vars.$golden-yellow;
    top: 0;
    left: 0;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
