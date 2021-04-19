<template>
  <div class="relative grid gap-5 max-w-[420px] text-center lg:text-left">
    <h3 class="text-black text-opacity-60 text-15 uppercase font-semibold">
      {{ caption }}
    </h3>
    <h1 class="text-3xl font-bold leading-none sm:text-40">{{ title }}</h1>
    <p class="text-17 max-w-[480px] mx-auto lg:mx-0">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlockInfo',
  props: {
    caption: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})
</script>
