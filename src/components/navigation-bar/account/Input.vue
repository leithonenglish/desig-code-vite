<template>
  <div class="relative w-full">
    <label
      class="absolute transform top-1/2 left-1 -translate-y-1/2 flex justify-center items-center w-9 h-9 bg-white bg-opacity-20 rounded-full"
    >
      <img
        :src="icon"
        class="w-5 h-5"
      />
    </label>
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EnvelopeIcon from '@/assets/images/icons/envelope-blue.svg';
import LockIcon from '@/assets/images/icons/lock-blue.svg';

export default defineComponent({
  name: 'AccountInput',
  data() {
    return {
      value: null as string | null
    };
  },
  props: {
    modelValue: {
      type: String
    },
    placeholder: {
      type: String
    },
    password: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.value = this.modelValue || null;
  },
  computed: {
    icon(): string {
      return this.password ? LockIcon : EnvelopeIcon;
    },
    type(): string {
      return this.password ? 'password' : 'text';
    }
  },
  methods: {
    onInput() {
      this.$emit('update:modelValue', this.value);
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: medium none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px, rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(99, 106, 150, 0.8) 0%, rgba(182, 186, 214, 0.6) 100%) repeat scroll 0% 0%;
  padding: 10px 42px 10px 56px;
  border-radius: 30px;
  color: white;
  font-weight: 300;
  transition-property: box-shadow background outline;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  &:focus {
    outline: currentcolor none medium;
    box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px, rgb(47, 184, 255) 0px 0px 0px 1px inset;
    background: rgba(0, 0, 0, 0) linear-gradient(rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%) repeat scroll 0% 0%;
  }
}
</style>
