<script lang="ts" setup>
import { BsArrowRight } from '@kalimahapps/vue-icons'

type Props = {
  imgSrc: string
  imgAlt: string
  title: string
  withLink: boolean
}

defineProps<Props>()
</script>

<template>
  <RouterLink to="#" v-if="withLink">
    <div class="card card-with-link-hover">
      <div class="card-img-container">
        <img :src="imgSrc" :alt="imgAlt" class="card-img" />
      </div>
      <div class="card-body">
        <div class="card-title-container">
          <h3 class="card-title">{{ title }}</h3>
        </div>
        <div v-if="withLink" class="card-link-container">
          <span class="card-link">Czytaj więcej</span>
          <BsArrowRight class="card-arrow" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped lang="scss">
@use '../../styles/variables' as vars;
@use '../../styles/_mixins.scss' as mixins;

.card {
  background-color: vars.$very-dark-grey;
  border-radius: vars.$border-radius;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }

  .card-body {
    padding: 2rem;

    .card-title {
      font-size: 2rem;
      line-height: 1.5;
    }

    .card-link-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2.6rem;

      .card-link {
        font-size: 1.4rem;
      }

      .card-arrow {
        color: white;
        font-size: 2rem;
      }
    }
  }
}
</style>
