<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { FaUser } from '@kalimahapps/vue-icons'
import { PhBoldCopySimple } from '@kalimahapps/vue-icons'

import ButtonPrimary from './AppButtonPrimary.vue'
</script>
<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <RouterLink to="/">Klienci</RouterLink>
        </li>
        <li>
          <RouterLink to="/biznesowi">Biznes</RouterLink>
        </li>
        <li>
          <RouterLink to="/o-shell">O Shell</RouterLink>
        </li>
      </ul>
      <ButtonPrimary text="Shell ClubSmart" :start-icon="FaUser" :end-icon="PhBoldCopySimple" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;

li {
  position: relative;

  a {
    display: inline-block;
    transition: 200ms ease-in-out;
    font-size: 1.2rem;
    padding: 0.8rem;
    border-radius: 0.6rem;
    margin: 0 0.6rem;
    &:hover {
      background-color: vars.$link-hover;
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
    }
  }
}

nav {
  background-color: vars.$very-dark-grey;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container {
    max-width: 130rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }

  ul {
    display: flex;
    li {
      height: 4.8rem;
      display: flex;
      align-items: center;
    }
  }
  button {
    height: 3.2rem;
  }
}
</style>
