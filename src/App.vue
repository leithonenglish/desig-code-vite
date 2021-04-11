<template>
  <NavigationBar />
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
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
