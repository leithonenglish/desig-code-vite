<template>
  <div class="navigation-bar fixed left-0 top-[60px] w-full">
    <div class="flex justify-between m-auto max-w-[1234px]">
      <router-link to="/" class="flex-shrink-0">
        <img
          src="@/assets/images/icons/logo.svg"
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
        <MoreDropdownItem v-bind="more" />
        <SearchDropdownItem v-bind="search" :quickLinks="quickLinks" />
        <button class="button" @click="accountOpen = true">
          <img src="@/assets/images/icons/account.svg" alt="account" class="h-6 w-6" />
        </button>
      </nav>
    </div>
  </div>
  <AccountModal v-if="accountOpen" @close="accountOpen = false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoreDropdownItem from './MoreDropdownItem.vue';
import SearchDropdownItem from './SearchDropdownItem.vue';
import AccountModal from './account/Modal.vue';
import CoursesIcon from '@/assets/images/icons/courses.svg';
import TutorialsIcon from '@/assets/images/icons/tutorials.svg';
import LivestreamsIcon from '@/assets/images/icons/livestreams.svg';
import PricingIcon from '@/assets/images/icons/pricing.svg';
import DownloadsIcon from '@/assets/images/icons/downloads.svg';
import UpdatesIcon from '@/assets/images/icons/calendar.svg';

export default defineComponent({
  name: 'NavigationBar',
  components: {
    MoreDropdownItem,
    SearchDropdownItem,
    AccountModal
  },
  data() {
    return {
      accountOpen: false,
      search: {
        opened: false,
        sugguestedLinks: [
          { icon: CoursesIcon, name: 'Courses', url: '/courses' },
          { icon: TutorialsIcon, name: 'Tutorials', url: '/tutorials' },
          { icon: LivestreamsIcon, name: 'Livestreams', url: '/livestream' }
        ]
      },
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
  },
  computed: {
    quickLinks() {
      return [];
    }
  }
})
</script>

<style lang="scss" scoped>
.link,
::v-deep(.button) {
  transition-property: background,  box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  @apply flex items-center px-5 py-[10px] rounded-[14px] bg-blend-overlay cursor-pointer;

  &:is(a) {
    img {
      @apply h-6 w-6;
    }

    span {
      transition: transform 0.2s ease-in-out;
      @apply text-white font-light ml-[10px];
    }
  }

  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.2) none repeat scroll 0% 0%;
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 5px, rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;

    &:is(a) {
      span {
        transform: translateY(-1px);
      }
    }
  }
}
</style>
