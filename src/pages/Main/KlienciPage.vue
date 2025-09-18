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

  .hero-img {
    flex: 8;
    border-radius: vars.$border-radius;
    width: 84.4rem;
    height: 76.5rem;
    object-fit: cover;
  }

  .card-container {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
