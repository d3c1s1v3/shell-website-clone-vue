<script setup lang="ts">
import {
  AkChevronDownSmall,
  BxGasPump,
  ReBattery2ChargeFill,
  BxSearch,
  AnOutlinedQuestionCircle,
} from '@kalimahapps/vue-icons'
</script>

<template>
  <nav>
    <div class="container">
      <RouterLink to="/" class="logo-wrapper">
        <img src="/favicon.ico" alt="Shell" id="logo" />
      </RouterLink>
      <div class="menu-wrapper">
        <RouterLink to="/" class="link-wrapper">
          <div>Strona Główna</div>
        </RouterLink>
        <button class="link-wrapper">
          <div>
            <span>Korzyści z Shell ClubSmart</span>
            <AkChevronDownSmall class="chevron-icon" />
          </div>
        </button>
        <button class="link-wrapper">
          <div>
            <span>Stacje Shell</span>
            <AkChevronDownSmall class="chevron-icon" />
          </div>
        </button>
        <button class="link-wrapper">
          <div>
            <span>Ładowanie pojazdów elektrycznych</span>
            <AkChevronDownSmall class="chevron-icon" />
          </div>
        </button>
        <button class="link-wrapper">
          <div>
            <span>Paliwa, oleje i płyny chłodzące firmy Shell</span>
            <AkChevronDownSmall class="chevron-icon" />
          </div>
        </button>
      </div>
      <div class="icons-wrapper">
        <RouterLink to="/stacje-shell/lokalizator-stacji-paliw-shell" class="link-wrapper">
          <div>
            <BxGasPump class="icon" />
          </div>
        </RouterLink>
        <RouterLink
          to="/ladowanie-samochodow-elektrycznych/find-an-ev-charge-point"
          class="link-wrapper"
        >
          <div>
            <ReBattery2ChargeFill class="icon" />
          </div>
        </RouterLink>
        <a href="https://shell.pl" target="_blank" class="link-wrapper">
          <div>
            <AnOutlinedQuestionCircle class="icon" />
          </div>
        </a>
        <RouterLink to="/search" class="link-wrapper">
          <div>
            <BxSearch class="icon" />
          </div>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/variables' as vars;

nav {
  border-bottom: 1px solid vars.$border;

  .container {
    max-width: 130rem;
    height: 7rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

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

    .icons-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: auto;
      gap: 1rem;

      a {
        div {
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
    }

    .link-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      div {
        padding: 1.4rem 0.8rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        transition: background-color 200ms ease-in-out;
        border-radius: 0.3rem;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        &:hover {
          background-color: vars.$link-hover;
        }
      }
    }
  }
}

.router-link-active:not(:has(img)) {
  transition: all 200ms ease-out;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.4rem;
    background-color: vars.$golden-yellow;
    bottom: 0;
    left: 0;
    opacity: 1;
    transform: scaleY(1);
    transition:
      opacity 200ms ease-out,
      transform 200ms ease-out;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
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
  transition:
    opacity 200ms ease-out,
    transform 200ms ease-out;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.icons-wrapper .link-wrapper::before {
  display: none !important;
  content: none !important;
}
</style>
