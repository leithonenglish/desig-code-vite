<template>
  <div>
    <div class="hero h-[890px]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
.hero {
  background: rgba(0, 0, 0, 0) url("../assets/images/backgrounds/hero-background.jpg") no-repeat scroll 40% -140px / 3000px;
  @media screen and (min-width: 640px) {
    background-position: center top;
  }
}
</style>
