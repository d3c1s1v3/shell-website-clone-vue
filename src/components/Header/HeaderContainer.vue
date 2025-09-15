<script lang="ts" setup>
defineProps<{ className: string }>()
</script>
<template>
  <div class="container" :class="className">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.container {
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
