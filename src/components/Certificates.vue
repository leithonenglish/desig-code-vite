<template>
  <div class="flex flex-col items-center mx-auto px-[30px] lg:flex-row lg:items-start">
    <div class="relative flex-shrink-0 order-2 w-[640px] h-[280px] mt-16 lg:order-1 lg:mr-16 lg:mt-0">
      <div class="card-holder relative max-w-[335px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <BlockInfo v-bind="info" class="max-w-none order-1 lg:order-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlockInfo from './BlockInfo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BlockInfo
  },
  data() {
    return {
      info: {
        caption: 'Create a profile',
        title: 'Get certificates',
        description: 'After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.'
      }
    }
  }
})
</script>

<style lang="scss">
.card-holder {
  > div {
    position: absolute;
    transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    cursor: auto;
    width: 335px;
    height: 220px;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: space-between;
    padding: 20px;

    &:nth-child(4) {
      top: 0;
      left: 0;
      background: radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%);
      box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px, rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    }

    &:nth-child(3) {
      top: 20px;
      left: 200px;
      background: radial-gradient(100% 128.38% at 100% 100%, rgba(51, 168, 253, 0.2) 0%, rgba(76, 0, 200, 0.2) 100%);
      box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px, rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    }

    &:nth-child(2) {
      top: 40px;
      left: 280px;
      background: radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%);
      box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px, rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    }

    &:nth-child(1) {
      top: 60px;
      left: 310px;
      background: linear-gradient(rgb(117, 224, 230) 0%, rgb(57, 19, 184) 100%);
      box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px, rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    }
  }

  &:hover {
    > div {
      &:nth-child(4) {
        transform: translate(-30px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);

        &:hover {
          transform: translate(-30px, -30px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);
        }
      }

      &:nth-child(3) {
        transform: translate(-120px, -10px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);

        &:hover {
          transform: translate(-120px, -40px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);
        }
      }

      &:nth-child(2) {
        transform: translate(-90px, -20px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);

        &:hover {
          transform: translate(-90px, -50px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);
        }
      }

      &:nth-child(1) {
        transform: translate(-30px, -30px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);

        &:hover {
          transform: translate(-30px, -60px) skewX(-10deg) rotateZ(-10deg) scaleX(0.9);
        }
      }
    }
  }
}
</style>
