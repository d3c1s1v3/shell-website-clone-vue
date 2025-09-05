<script lang="ts" setup>
import { FaUser, PhBoldCopySimple } from '@kalimahapps/vue-icons'
import ButtonPrimary from './ButtonPrimary.vue'
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
@use '../styles/mixins' as mixins;

li {
  position: relative;
  a {
    @include mixins.link-hover;
    padding: 0.8rem;
    border-radius: 0.4rem;
    margin: 0 0.6rem;
  }

  .router-link-active {
    @include mixins.active-link-indicator(0);
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

      a {
        font-size: 1.2rem;
      }
    }
  }

  button {
    height: 3.2rem;
  }
}
</style>
