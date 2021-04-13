<template>
  <NavigationBar />
  <router-view v-slot="{ Component }">
    <div class="w-full z-10">
      <component :is="Component"></component>
    </div>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/navigation-bar/Index.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar
  }
})
</script>
