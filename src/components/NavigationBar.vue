<template>
  <div class="navigation-bar fixed left-0 top-[60px] w-full">
    <div class="flex justify-between m-auto max-w-[1234px]">
      <router-link to="/" class="flex-shrink-0">
        <img
          src="../assets/images/logo.svg"
          alt="logo"
          class="h-11 w-11"
        />
      </router-link>

      <nav class="grid gap-6 grid-cols-7-auto">
        <router-link
          v-for="{ icon, name, url } in links"
          :key="name"
          :to="url"
          class="link"
        >
          <img :src="icon" />
          <span>{{ name }}</span>
        </router-link>
        <div class="relative">
          <button class="button" @click="more.opened = !more.opened">
            <img src="../assets/images/more.svg" alt="more" class="h-6 w-6" />
          </button>
          <div :class="['more-links', { opened: more.opened }]">
            <router-link
              v-for="{ icon, name, url } in more.links"
              :key="name"
              :to="url"
              class="relative flex items-center p-[10px]"
            >
              <img :src="icon" :alt="name" class="h-6 w-6" />
              <span class="text-white text-15 font-light ml-[10px]">
                {{ name }}
              </span>
            </router-link>
          </div>
        </div>
        <button class="button">
          <img src="../assets/images/search.svg" alt="search" class="h-6 w-6" />
        </button>
        <button class="button">
          <img src="../assets/images/account.svg" alt="account" class="h-6 w-6" />
        </button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoursesIcon from '../assets/images/courses.svg';
import TutorialsIcon from '../assets/images/tutorials.svg';
import LivestreamsIcon from '../assets/images/livestreams.svg';
import PricingIcon from '../assets/images/pricing.svg';
import DownloadsIcon from '../assets/images/downloads.svg';
import UpdatesIcon from '../assets/images/calendar.svg';

export default defineComponent({
  name: 'NavigationBar',
  data() {
    return {
      links: [
        { icon: CoursesIcon, name: 'Courses', url: '/courses' },
        { icon: TutorialsIcon, name: 'Tutorials', url: '/tutorials' },
        { icon: LivestreamsIcon, name: 'Livestreams', url: '/livestream' },
        { icon: PricingIcon, name: 'Pricing', url: '/pricing' }
      ],
      more: {
        opened: false,
        links: [
          { icon: DownloadsIcon, name: 'Downloads', url: '/downloads' },
          { icon: UpdatesIcon, name: 'Updates', url: '/updates' },
        ]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.link,
.button {
  transition-property: background,  box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  @apply flex items-center px-5 py-[10px] rounded-[14px] bg-blend-overlay cursor-pointer;

  &:is(a) {
    img {
      @apply h-6 w-6;
    }

    span {
      transition: transform 0.3s ease-in-out;
      @apply text-white text-15 font-light ml-[10px];
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2) none repeat scroll 0% 0%;
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 5px, rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;

    &:is(a) {
      span {
        transform: translateY(-1px);
      }
    }
  }
}

.more-links {
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  transition-property: opacity transform;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: center top 0px;
  transform: skewY(-5deg) rotate(5deg) translateY(-30px);
  opacity: 0;
  @apply absolute left-0 bg-port-gore bg-opacity-95 p-5 max-w-[260px] w-[220px] mt-3;

  a {
    border-radius: 10px;
    transition-property: box-shadow, background;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    margin-bottom: 3px;

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

    &:hover {
      @apply bg-white bg-opacity-10 bg-blend-overlay;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
    }
  }

  &.opened {
    opacity: 1;
    transform: skewY(0deg) rotate(0deg) translateY(0px);
  }
}
</style>
