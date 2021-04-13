<template>
  <Hero />
  <div class="relative pt-[85px]">
    <div class="max-w-screen flex items-end mx-auto px-[30px]">
      <BlockInfo v-bind="tools.info" class="flex-shrink-0" />
      <div class="flex flex-auto justify-between items-center my-7 ml-20">
        <div class="grid gap-5 grid-cols-7">
          <button
            v-for="{ icon, text } in tools.search.options"
            :key="text"
            class="cursor-pointer"
            @click.prevent="tools.search.text = text"
          >
            <img :src="icon" :alt="text" class="w-[44px] h-[44px]" />
          </button>
        </div>
        <SearchInput v-model="tools.search.text" class="max-w-[204px]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from '@/components/home/Hero.vue';
import BlockInfo from '@/components/BlockInfo.vue';
import SearchInput from '@/components/SearchInput.vue';
import SwiftUILogo from '@/assets/images/logos/swiftui-logo.svg';
import ReactLogo from '@/assets/images/logos/react-logo.svg';
import FigmaLogo from '@/assets/images/logos/figma-logo.svg';
import SketchLogo from '@/assets/images/logos/sketch-logo.svg';
import FramerLogo from '@/assets/images/logos/framer-logo.svg';
import WebflowLogo from '@/assets/images/logos/webflow-logo.svg';
import ProtopieLogo from '@/assets/images/logos/protopie-logo.svg';

export default defineComponent({
  name: 'Home',
  components: {
    Hero,
    BlockInfo,
    SearchInput
  },
  data() {
    return {
      tools: {
        info: {
          caption: '120 HOURS OF COURSES',
          title: 'Learn the best tools and platforms',
          description: 'We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.'
        },
        search: {
          text: null,
          options: [
            { icon: SwiftUILogo, text: 'swiftui' },
            { icon: ReactLogo, text: 'react' },
            { icon: FigmaLogo, text: 'figma' },
            { icon: SketchLogo, text: 'sketch' },
            { icon: FramerLogo, text: 'framer' },
            { icon: WebflowLogo, text: 'webflow' },
            { icon: ProtopieLogo, text: 'protopie' }
          ]
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
