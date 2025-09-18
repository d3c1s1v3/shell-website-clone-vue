<script setup lang="ts">
import AppContainer from '@/components/Global/AppContainer.vue'
import AppCard from '@/components/Global/AppCard.vue'
</script>
<template>
  <AppContainer>
    <div class="hero">
      <img
        src="/img/man-driving-with-a-woman-passenger.avif"
        alt="Shell V-Power"
        class="hero-img"
      />
      <div class="card-wrapper">
        <AppCard alt="" path="" text="" title="" withLink img="">CARD 1</AppCard>
        <AppCard alt="" path="" text="" title="" withLink img="">CARD 2</AppCard>
      </div>
    </div>
  </AppContainer>
</template>
<style lang="scss" scoped>
.hero {
  display: flex;
  .hero-img {
    flex: 8;
  }
  .card-wrapper {
    flex: 4;
  }
}
</style>
