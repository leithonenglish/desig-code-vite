<template>
  <div class="grid gap-5 pt-[75px] mb-[70.5px] max-w-xs">
    <h1 class="text-4xl text-white font-bold blurIn">{{ title}}</h1>
    <p class="text-s text-white text-opacity-70 font-light blurIn">
      {{ description }}
    </p>
    <Form :validation-schema="schema" class="grid gap-5" @submit="onSubmit">
      <slot></slot>
      <button class="blurIn">
        {{ submitText }}
      </button>
    </Form>
    <div class="footer grid gap-4 blurIn">
      <span class="h-[1px] bg-white bg-opacity-10" />
      <slot name="footer" :change="change"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Form } from 'vee-validate';

export default defineComponent({
  name: 'AccountFormHolder',
  emits: ['change', 'submit'],
  components: {
    Form
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    submitText: {
      type: String,
      required: true
    },
    schema: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
    change(name: string) {
      this.$emit('change', name);
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  button {
    background: rgba(0, 0, 0, 0) linear-gradient(91.4deg, rgb(47, 184, 255) 0%, rgb(158, 236, 217) 100%) repeat scroll 0% 0%;
    border: medium none;
    border-radius: 30px;
    box-shadow: rgba(147, 231, 221, 0.3) 0px 20px 40px;
    cursor: pointer;
    text-align: center;
    padding: 12px 0px;
    margin-top: 10px;
    width: 100%;
    position: relative;
    color: #0e435c;
    font-weight: 500;
    transition-property: background box-shadow;
    transition-timing-function: ease-in-out;
    transition-duration: 0.25s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px, rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
    }
  }

  ::v-deep(span[role='alert']) {
    @apply block mt-2 text-sm font-light;
    color: #d87c7c;
  }
}

.footer {
  ::v-deep(p) {
    @apply text-white text-opacity-70 text-sm font-light;

    button {
      color: #2fb8ff;
      margin-left: 5px;
    }
  }
}

::v-deep(.blurIn) {
  opacity: 0;
  filter: blur(10px);
  animation: 0.8s ease-out 0.3s 1 normal forwards running blurIn;
}

@keyframes blurIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>
