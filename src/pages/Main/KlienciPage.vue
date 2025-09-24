<script setup lang="ts">
import { CaGasStation } from '@kalimahapps/vue-icons'
import { BsEvStation } from '@kalimahapps/vue-icons'
import { FaOilCan } from '@kalimahapps/vue-icons'

import AppContainer from '@/components/Global/AppContainer.vue'
import AppCard from '@/components/Global/AppCard.vue'
import PromoBox from '@/components/PromoBox.vue'
</script>
<template>
  <AppContainer>
    <div class="hero">
      <div class="hero-img-container">
        <img
          src="/img/man-driving-with-a-woman-passenger.avif"
          alt="Shell V-Power"
          class="hero-img"
        />
        <div class="mini-banner">
          <h1>W pełni ciesz się prowadzeniem samochodu</h1>
          <p>
            Znajdź inspirację, odkrywaj i dowiedz się, jak uzyskać najlepsze osiągi swojego pojazdu
            dzięki produktom Shell.
          </p>
          <div class="mini-banner-icons-container">
            <RouterLink to="#">
              <CaGasStation class="mini-banner-icon" />
              <span>Poznaj paliwa Shell</span>
            </RouterLink>
            <RouterLink to="#">
              <BsEvStation class="mini-banner-icon" />
              <span>Znajdź stacje Shell</span>
            </RouterLink>
            <RouterLink to="#">
              <BsEvStation class="mini-banner-icon" />
              <span>Ładowanie pojazdów elektrycznych</span>
            </RouterLink>
            <RouterLink to="#">
              <FaOilCan class="mini-banner-icon" />
              <span>Dobierz olej do silnika</span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="card-container">
        <AppCard
          imgSrc="/img/oferty.avif"
          imgAlt="Oferty i promocje"
          title="Oferty i promocje"
          withLink
        />
        <AppCard
          imgSrc="/img/shell-banner-na-shell.avif"
          imgAlt="Dołącz do Klubowiczów Shell ClubSmart już dzisiaj!"
          title="Oszczędzaj i zyskuj z programem lojalnościowym Shell ClubSmart"
          withLink
        />
      </div>
    </div>
    <PromoBox :imgUrl="''" :heading="''" :paragraph="''" :buttonText="''" />
    <PromoBox inverted :imgUrl="''" :heading="''" :paragraph="''" :buttonText="''" />
    <PromoBox :imgUrl="''" :heading="''" :paragraph="''" :buttonText="''" />
    <PromoBox inverted :imgUrl="''" :heading="''" :paragraph="''" :buttonText="''" />
  </AppContainer>
</template>
<style lang="scss" scoped>
@use '../../styles/variables' as vars;

.hero {
  display: flex;
  gap: 2rem;

  .hero-img-container {
    position: relative;

    .hero-img {
      flex: 8;
      border-radius: vars.$border-radius;
      width: 84.4rem;
      height: 76.5rem;
      object-fit: cover;
    }

    .mini-banner {
      width: 34rem;
      height: 43.9rem;
      border-radius: vars.$border-radius;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10%;
      padding: 2.4rem;

      .mini-banner-icons-container {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;

        a {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          width: fit-content;

          span {
            font-size: 1.4rem;
            font-weight: 600;
            text-decoration: underline;
          }
        }

        .mini-banner-icon {
          font-size: 2rem;
          margin-block: 0.5rem;
        }
      }

      h1 {
        font-size: 3.2rem;
        line-height: 1.5;
        color: vars.$light-grey;
        margin-bottom: 2rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 1.5;
      }
    }
  }

  .card-container {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
