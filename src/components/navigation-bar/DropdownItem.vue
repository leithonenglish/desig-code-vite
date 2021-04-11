<template>
  <div class="relative" v-click-outside="onClickOutside">
    <slot name="toggler" :toggle="onToggle" :isOpened="isOpened"></slot>
    <div :class="['dropdown', { opened: isOpened }]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vClickOutside from 'vue3-click-outside';

export default defineComponent({
  name: 'DropdownItem',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return { isOpened: false };
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  beforeMount() {
    this.isOpened = this.opened;
  },
  methods: {
    onToggle() {
      this.updateState(!this.isOpened);
    },
    updateState(state = false) {
      this.isOpened = state;
      this.$emit('update:opened', this.isOpened);
      this.$emit('toggled', this.isOpened);
    },
    onClickOutside() {
      this.updateState();
    }
  }
})
</script>

<style lang="scss" scoped>
.dropdown {
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  transition-property: opacity transform;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: center top 0px;
  transform: skewY(-5deg) rotate(5deg) translateY(-30px);
  opacity: 0;
  visibility: hidden;
  @apply z-10 absolute left-0 bg-port-gore bg-opacity-95 p-5 max-w-[260px] w-[260px] mt-3;

  ::v-deep(a) {
    border-radius: 10px;
    transition-property: box-shadow, background;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    margin-bottom: 3px;

    &:hover {
      @apply bg-white bg-opacity-10 bg-blend-overlay;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset;
    }
  }

  &.opened {
    visibility: visible;
    opacity: 1;
    transform: skewY(0deg) rotate(0deg) translateY(0px);
  }
}
</style>
