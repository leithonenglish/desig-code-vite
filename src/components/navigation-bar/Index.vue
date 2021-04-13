<template>
  <div class="navigation-bar absolute z-20 left-0 top-0 p-5 w-full sm:pt-0 sm:px-0 sm:top-[60px]">
    <div class="flex justify-between m-auto max-w-[1234px] sm:px-[30px]">
      <router-link id="logo" to="/" class="flex-shrink-0">
        <img
          src="@/assets/images/icons/logo.svg"
          alt="logo"
          class="h-11 w-11"
        />
      </router-link>
      <nav class="hidden gap-6 grid-cols-7-auto sm:grid" ref="nav">
        <router-link
          v-for="{ icon, name, url } in mainLinks"
          :key="name"
          :to="url"
          class="link"
        >
          <img :src="icon" />
          <span>{{ name }}</span>
        </router-link>
        <MoreDropdownItem :links="moreLinks" :opened="moreOpened" />
        <SearchDropdownItem v-bind="search" :quickLinks="quickLinks" />
        <button class="button" @click="accountOpen = true">
          <img src="@/assets/images/icons/account.svg" alt="account" class="h-6 w-6" />
        </button>
      </nav>
      <DropdownItem :opened="opened" alignRight divider class="sm:hidden">
        <template v-slot:toggler="{ toggle }">
          <button
            class="flex justify-center items-center bg-port-gore bg-opacity-[0.98] h-11 w-11 rounded-full shadow-white-border"
            @click.prevent="toggle"
          >
            <img src="@/assets/images/icons/hamburger-menu.svg" alt="account" class="h-6 w-6" />
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
        <button class="relative flex items-center p-[10px]">
          <img src="@/assets/images/icons/sign-in.svg" alt="Sign In" class="h-6 w-6" />
          <span class="text-white font-light ml-[10px]">
            Sign In
          </span>
        </button>
      </DropdownItem>
    </div>
  </div>
  <AccountModal v-if="accountOpen" @close="accountOpen = false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownItem from './DropdownItem.vue';
import MoreDropdownItem from './MoreDropdownItem.vue';
import SearchDropdownItem from './SearchDropdownItem.vue';
import AccountModal from './account/Modal.vue';
import CoursesIcon from '@/assets/images/icons/courses.svg';
import TutorialsIcon from '@/assets/images/icons/tutorials.svg';
import LivestreamsIcon from '@/assets/images/icons/livestreams.svg';
import PricingIcon from '@/assets/images/icons/pricing.svg';
import DownloadsIcon from '@/assets/images/icons/downloads.svg';
import UpdatesIcon from '@/assets/images/icons/calendar.svg';
import SearchIcon from '@/assets/images/icons/search.svg';

export default defineComponent({
  name: 'NavigationBar',
  components: {
    DropdownItem,
    MoreDropdownItem,
    SearchDropdownItem,
    AccountModal
  },
  data() {
    const links = [
      { icon: CoursesIcon, name: 'Courses', url: '/courses', tags: ['suggested', 'main'] },
      { icon: TutorialsIcon, name: 'Tutorials', url: '/tutorials', tags: ['suggested', 'main'] },
      { icon: LivestreamsIcon, name: 'Livestreams', url: '/livestream', tags: ['suggested', 'main'] },
      { icon: PricingIcon, name: 'Pricing', url: '/pricing', tags: ['main'] },
      { icon: UpdatesIcon, name: 'Updates', url: '/updates', tags: ['more'] },
      { icon: DownloadsIcon, name: 'Downloads', url: '/downloads', tags: ['more'] },
      { icon: SearchIcon, name: 'Search', url: '/search', tags: ['search'] },
    ];
    return {
      invisibleIndexes: [] as number[],
      accountOpen: false,
      menuOpened: false,
      moreOpened: false,
      links,
      search: {
        opened: false,
        sugguestedLinks: [...links.filter(({ tags }) => tags.includes('suggested'))]
      },
      mainLinks: [...links.filter(({ tags }) => tags.includes('main'))]
    }
  },
  mounted() {
    window.addEventListener('resize', this.onPageResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onPageResize);
  },
  computed: {
    moreLinks(): any[] {
      let links = this.links.filter(({ tags }) => tags.includes('more'));
      if (this.invisibleIndexes.length > 0) {
        const mainLinks = this.links.slice(0, this.invisibleIndexes.length);
        links = [...mainLinks, ...links];
      }
      return links;
    },
    quickLinks() {
      return [];
    }
  },
  methods: {
    onPageResize() {
      const logo = document.getElementById('logo');
      if (logo) {
        const logoOffset = logo.offsetLeft + logo.offsetWidth;
        const links = document.querySelectorAll('.navigation-bar nav a.link');
        let invisibleWidth = 0;
        links.forEach((link, index) => {
          const item = link as HTMLElement;
          const offset = item.offsetLeft - logoOffset;
          if (offset <= 10 && offset >= 0) {
            invisibleWidth += item.clientWidth;
            item.dataset.offset = `${item.clientWidth + invisibleWidth}`;
            item.dataset.index = index.toString();
            item.style.display = 'none';
            this.invisibleIndexes.unshift(index);
          } else {
            const navOffset = (this.$refs.nav as HTMLElement).offsetLeft;
            const itemOffset = parseFloat(item.dataset.offset || '0');
            const itemIndex = parseInt(item.dataset.index || '-1');
            if (
              navOffset > itemOffset &&
              itemIndex > -1 &&
              this.invisibleIndexes[0] === itemIndex &&
              item.style.display == 'none'
            ) {
              invisibleWidth -= itemOffset;
              item.style.display = 'flex';
              this.invisibleIndexes.shift();
            }
          }
        });
      }
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
