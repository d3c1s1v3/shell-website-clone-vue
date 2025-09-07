<script lang="ts" setup>
import { ref } from 'vue'
import type { Component } from 'vue'

type SubMenu = {
  label: string
  path?: string
  icon?: Component
  submenu?: SubMenu[]
}

const { submenu } = defineProps<SubMenu>()
const firstListItem = (index: number) => (index === 0 ? 'bold' : 'normal')

const open = ref(false)
</script>

<template>
  <ul class="absolute">
    <li v-for="(link, index) in submenu" :key="link.label">
      <RouterLink v-if="link.path" :to="link.path" :style="{ fontWeight: firstListItem(index) }">
        {{ link.label }}
      </RouterLink>

      <span v-else @click="open = !open">
        <div class="label">
          {{ link.label }}
          <component v-if="link.icon" :is="link.icon" />
        </div>
        <div class="content" v-if="open">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '../styles/mixins' as mixins;
@use '../styles/variables' as vars;

ul.absolute {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0.5rem;
  background-color: vars.$dark-grey;
  border: 1px solid vars.$border-light;
  border-radius: 1rem;
  top: 150%;
  animation: show 200ms ease-out;
  transform-origin: top;

  li {
    border-radius: 0.4rem;
    @include mixins.link-hover;

    a,
    span {
      display: inline-block;
      height: 100%;
      width: 100%;
      padding: 1rem;
      white-space: nowrap;
    }

    span {
      cursor: pointer;
      position: relative;
      background: lightcoral;

      .label {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .content {
        height: 300px;
      }
    }
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
