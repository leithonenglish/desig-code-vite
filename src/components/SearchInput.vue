<template>
  <div class="relative h-[44px] min-w-[150px]">
    <label for="search" class="absolute left-[10px] top-[10px]">
      <img
        src="@/assets/images/icons/search.svg"
        alt="search"
      />
    </label>
    <input
      v-model="value"
      type="text"
      id="search"
      placeholder="Search"
      class="h-full w-full text-white"
    />
    <transition
      enter-active-class="animate__animated animate__fadeInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <button
        v-if="!!value"
        @click="value = ''"
        class="absolute top-[12px] right-[12px] w-5 h-5 cursor-pointer"
      >
        <img
          src="@/assets/images/icons/close-input.svg"
          alt="search"
        />
      </button>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SearchInput',
  emits: ['change', 'update:modelValue'],
  data() {
    return { value: '' };
  },
  props: {
    modelValue: {
      type: String
    }
  },
  beforeMount() {
    this.value = this.modelValue || '';
  },
  watch: {
    modelValue(value: string | undefined) {
      this.value = value || '';
    },
    value(value: string) {
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  border-radius: 30px;
  background: linear-gradient(rgba(99, 106, 150, 0.8) 0%, rgba(182, 186, 214, 0.6) 100%);
  box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px, rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  padding: 10px 42px;
  transition-property: background box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: 0.25s;

  &:focus {
    outline: none;
    box-shadow: rgb(47 184 255 / 30%) 0px 10px 40px, rgb(47 184 255) 0px 0px 0px 1px inset;
    background: linear-gradient(rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%);
  }
  &::placeholder {
    color: #fff;
    opacity: 0.5;
    font-weight: 300;
  }
}
</style>