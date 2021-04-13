<template>
  <teleport to="body">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      appear
      @after-leave="afterModalLeave"
    >
      <div
        v-show="modalOpen"
        class="account-modal fixed z-30 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-20"
      >
        <transition
          enter-active-class="comeIn"
          leave-active-class="goOut"
          @leave="afterInnerLeave"
          appear
        >
          <div
            v-show="innerOpen"
            class="inner relative max-w-[960px] w-full p-5 justify-items-center"
          >
            <button
              class="closer absolute right-[-18px] top-[-18px] flex justify-center items-center rounded-full w-9 h-9 cursor-pointer"
              @click="onClose"
            >
              <img src="@/assets/images/icons/x.svg" />
            </button>
            <div class="cover">
              <img src="@/assets/images/illustrations/teamwork.svg" />
            </div>
            <component
              :key="currentForm"
              :is="currentForm"
              @change="currentForm = $event"
            />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignInForm from './SignInForm.vue';
import SignUpForm from './SignUpForm.vue';
import ResetPasswordForm from './ResetPasswordForm.vue';
import SetPasswordForm from './SetPasswordForm.vue';

export default defineComponent({
  name: 'AccountModal',
  emits: ['close'],
  components: {
    SignInForm,
    SignUpForm,
    ResetPasswordForm,
    SetPasswordForm
  },
  data() {
    return {
      currentForm: 'SignInForm',
      innerOpen: true,
      modalOpen: true
    };
  },
  mounted() {
    this.innerOpen = true;
    this.modalOpen = true;
  },
  methods: {
    onClose() {
      this.innerOpen = false;
    },
    afterInnerLeave() {
      this.modalOpen = false;
    },
    afterModalLeave() {
      this.$emit('close');
    }
  }
})
</script>

<style lang="scss" scoped>
.account-modal {
  backdrop-filter: blur(20px) saturate(100%);

  .inner {
    display: grid;
    grid-template-columns: 360px auto;
    background: rgba(25, 24, 63, 0.9) none repeat scroll 0% 0%;
    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
    border-radius: 20px;
    backdrop-filter: blur(40px);

    .closer {
      background: linear-gradient(
        360deg,
        rgba(99, 106, 150, 0.4) 0%,
        rgba(182, 186, 214, 0.5) 100%
      );
      box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px, rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
      backdrop-filter: blur(40px);
    }

    .cover {
      display: grid;
      width: 100%;
      height: 100%;
      place-content: center;
      background-image: url("src/assets/images/backgrounds/account-cover.svg");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 20px;
      box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
    }
  }
}

.comeIn {
  animation: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal forwards running comeIn;
}

.goOut {
  animation: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal forwards running goOut;
}

@keyframes comeIn {
  from {
    opacity: 0;
    transform: translateY(-100px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes goOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
}
</style>
