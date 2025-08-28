<script lang="ts" setup>
import { FaUser } from '@kalimahapps/vue-icons'
import { PhBoldCopySimple } from '@kalimahapps/vue-icons'

import ButtonPrimary from './ButtonPrimary.vue'
</script>
<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <router-link to="/">Klienci</router-link>
        </li>
        <li>
          <router-link to="/biznesowi">Biznes</router-link>
        </li>
        <li>
          <router-link to="/o-shell">O Shell</router-link>
        </li>
      </ul>
      <ButtonPrimary text="Shell ClubSmart" :start-icon="FaUser" :end-icon="PhBoldCopySimple" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;
@use '../styles/mixins' as mixins;

li {
  position: relative;

  a {
    @include mixins.link-hover;
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
