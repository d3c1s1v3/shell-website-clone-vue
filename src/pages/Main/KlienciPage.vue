<script setup lang="ts">
import AppContainer from '@/components/Global/AppContainer.vue'
import AppCard from '@/components/Global/AppCard.vue'
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
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10%;
      padding: 2.4rem;

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
