<script lang="ts" setup>
import { BsArrowRight } from '@kalimahapps/vue-icons'

type Props = {
  img: string
  alt: string
  title: string
  text?: string
  withLink: boolean
  path: string
}

defineProps<Props>()
</script>
<template>
  <RouterLink :to="path" v-if="withLink">
    <div>
      <img :src="img" :alt="alt" />
    </div>
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div>
      <span>Czytaj więcej</span>
      <BsArrowRight />
    </div>
  </RouterLink>
  <div>
    <div>
      <img :src="img" :alt="alt" />
    </div>
    <div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
