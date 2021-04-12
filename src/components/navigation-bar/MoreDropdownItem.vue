<template>
  <DropdownItem :opened="opened">
    <template v-slot:toggler="{ toggle, isOpened }">
      <button :class="['button', { active: isOpened }]" @click="toggle">
        <img src="@/assets/images/icons/more.svg" alt="more" class="h-6 w-6" />
      </button>
    </template>
    <router-link
      v-for="{ icon, name, url } in links"
      :key="name"
      :to="url"
      class="relative flex items-center p-[10px]"
    >
      <img :src="icon" :alt="name" class="h-6 w-6" />
      <span class="text-white font-light ml-[10px]">
        {{ name }}
      </span>
    </router-link>
  </DropdownItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownItem from './DropdownItem.vue';

export default defineComponent({
  name: 'MoreDropdownItem',
  components: {
    DropdownItem
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  &::after {
    @apply bg-white bg-opacity-20;
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    transition: opacity 0.2s ease-in-out;
  }
}
</style>
