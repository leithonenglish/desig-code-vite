<template>
  <FormHolder v-bind="formContent" @submit="onSubmit">
    <div class="w-full">
      <Field name="email" v-model="email" v-slot="{ field }">
        <AccountInput
          v-bind="field"
          placeholder="Email address"
          class="blurIn"
        />
      </Field>
      <ErrorMessage name="email" />
    </div>
    <div class="w-full">
      <Field name="password" v-model="password" v-slot="{ field }">
        <AccountInput
          v-bind="field"
          password
          placeholder="Password"
          class="blurIn"
        />
      </Field>
      <ErrorMessage name="password" />
    </div>
    <div class="w-full">
      <Field name="confirm" v-model="confirmPassword" v-slot="{ field }">
        <AccountInput
          v-bind="field"
          password
          placeholder="Confirm password"
          class="blurIn"
        />
      </Field>
      <ErrorMessage name="confirm" />
    </div>
    <p class="text-tiny text-white text-opacity-70 font-light blurIn">
      By clicking on Sign up, you agree to our Terms of service and Privacy policy.
    </p>
    <template v-slot:footer="{ change }">
      <p>Already have an account? <button @click.prevent="change('SignInForm')">Sign in</button></p>
    </template>
  </FormHolder>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';
import FormHolder from './FormHolder.vue';
import AccountInput from './Input.vue';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirm: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
});

export default defineComponent({
  name: 'SignInForm',
  components: {
    FormHolder,
    Field,
    ErrorMessage,
    AccountInput
  },
  data() {
    return {
      formContent: {
        title: 'Sign Up',
        description: 'Access to 120+ hours of courses, tutorials and livestreams',
        submitText: 'Sign up',
        schema
      },
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('Yah');
    }
  }
})
</script>
