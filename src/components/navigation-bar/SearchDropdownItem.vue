
<template>
  <DropdownItem :opened="opened" class="search">
    <template v-slot:toggler="{ toggle, isOpened }">
      <button :class="['button', { active: isOpened }]" @click="toggle">
        <img src="@/assets/images/search.svg" alt="search" class="h-6 w-6" />
      </button>
    </template>
    <div class="relative h-11">
      <label class="absolute transform left-[10px] top-1/2 -translate-y-1/2">
        <img
          src="@/assets/images/search.svg"
          alt="search"
          class="w-6 h-6"
        />
      </label>
      <input
        type="text"
        placeholder="Search"
        class="w-full h-full text-white font-extralight tracking-wider"
      />
    </div>
    <div class="mt-8">
      <div class="flex items-center mb-5">
        <h1
          class="uppercase text-white text-opacity-70 text-sm"
        >
          Quick Links
        </h1>
        <span class="flex-auto bg-white bg-opacity-10 h-[1px] ml-3"></span>
      </div>
      <div
        v-if="quickLinks && quickLinks.length > 0"
        class="flex flex-col"
      >
        <router-link
          v-for="{ icon, name, url } in quickLinks"
          :key="name"
          :to="url"
          class="flex items-center p-[10px] rounded-lg bg-blend-overlay mix-blend-normal hover:bg-white hover:bg-opacity-10"
        >
          <img :src="icon" :alt="name" class="h-6 w-6" />
          <span class="text-white font-light ml-[10px]">
            {{ name }}
          </span>
        </router-link>
      </div>
      <h1
        v-else
        class="uppercase text-white text-xxs text-opacity-70"
      >
        No results found
      </h1>   
    </div>
    <div class="mt-5">
      <div class="flex items-center mb-5">
        <h1
          class="uppercase text-white text-opacity-70 text-sm"
        >
          Suggested Search
        </h1>
        <span class="flex-auto bg-white bg-opacity-10 h-[1px] ml-3"></span>
      </div>
      <div class="flex flex-col">
        <router-link
          v-for="{ icon, name, url } in sugguestedLinks"
          :key="name"
          :to="url"
          class="flex items-center p-[10px] rounded-lg bg-blend-overlay mix-blend-normal hover:bg-white hover:bg-opacity-10"
        >
          <img :src="icon" :alt="name" class="h-6 w-6" />
          <span class="text-white font-light ml-[10px]">
            {{ name }}
          </span>
        </router-link>
      </div>
    </div>
  </DropdownItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownItem from './DropdownItem.vue';

export default defineComponent({
  name: 'SearchDropdownItem',
  components: {
    DropdownItem
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    },
    sugguestedLinks: {
      type: Array,
      required: true
    },
    quickLinks: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
::v-deep(.dropdown) {
    @apply left-auto right-0 w-[320px] max-w-none;

    input {
      transition-property: box-shadow, background, outline;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      padding: 10px 42px;
      border-radius: 30px;
      background: rgba(0, 0, 0, 0) linear-gradient(rgba(99, 106, 150, 0.8) 0%, rgba(182, 186, 214, 0.6) 100%) repeat scroll 0% 0%;

      &:focus {
        outline: currentcolor none medium;
        box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px, rgb(47, 184, 255) 0px 0px 0px 1px inset;
        background: rgba(0, 0, 0, 0) linear-gradient(rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%) repeat scroll 0% 0%;
      }
    }
  }
</style>
