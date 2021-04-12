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
    <template v-slot:footer="{ change }">
      <p>Don't have an account? <button @click.prevent="change('SignUpForm')">Sign up</button></p>
      <p>Forgot password? <button @click.prevent="change('ResetPasswordForm')">Reset password</button></p>
      <p>Don't have a password yet? <button @click.prevent="change('SetPasswordForm')">Set password</button></p>
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
  password: Yup.string().required()
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
        title: 'Sign In',
        description: 'Access to 120+ hours of courses, tutorials and livestreams',
        submitText: 'Sign In',
        schema
      },
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('Yah');
    }
  }
})
</script>
