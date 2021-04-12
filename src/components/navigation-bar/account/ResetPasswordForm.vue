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
    <template v-slot:footer="{ change }">
      <p>Back to <button @click.prevent="change('SignInForm')">Sign in</button></p>
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
  email: Yup.string().email().required()
});

export default defineComponent({
  name: 'ResetPasswordForm',
  components: {
    FormHolder,
    Field,
    ErrorMessage,
    AccountInput
  },
  data() {
    return {
      formContent: {
        title: 'Reset password',
        description: 'Enter the email address associated to your Design+Code account. We will send you a link to reset your password.',
        submitText: 'Reset password',
        schema
      },
      email: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('Yah');
    }
  }
})
</script>
