<template>
  <section class="auth-form">
    <form @submit.prevent="postAuth">
      <ValidationObserver ref="observer">
        <FormItem
          v-if="!isReset"
          v-model="form.email"
          label="Email Address"
          required
          autocomplete="off"
        />
        <FormItem
          v-if="!isForgot"
          v-model="form.password"
          class="pb-4 mt-3"
          type="password"
          label="Password"
          autocomplete="off"
          required
        />
        <FormItem
          v-if="isReset"
          v-model="form.password_confirmation"
          class="pb-4 mt-3"
          type="password"
          label="Confirm Password"
          autocomplete="off"
          required
        />
        <p v-if="isSignup" class="text-sm mt-5">
          By creating an account, you agree to our
          <nuxt-link to="/privacy-security" class="text-blue-500"
            >Privacy Policy</nuxt-link
          >
          and
          <nuxt-link class="text-blue-500" to="/terms-and-conditions"
            >Terms</nuxt-link
          >. We’ll send you updates on all things Hot Tub Covers Canada. Your
          privacy is important to us and you may unsubscribe at any time.
        </p>
      </ValidationObserver>
      <BaseBtn :label="btnLabel" :class="btnMargin" class="btn-auth" />
    </form>
  </section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

import BaseBtn from '@/components/base/BaseBtn'
import FormItem from '@/components/form/FormItem'
export default {
  components: {
    BaseBtn,
    FormItem,
    ValidationObserver
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data: () => ({
    form: {
      email: null,
      password: null,
      password_confirmation: null
    }
  }),
  computed: {
    btnMargin() {
      return this.isLogin ? 'mt-8' : 'mt-5'
    },
    isLogin() {
      return this.type === 'login'
    },
    isSignup() {
      return this.type === 'signup'
    },
    isForgot() {
      return this.type === 'forgot'
    },
    isReset() {
      return this.type === 'reset'
    },
    btnLabel() {
      if (this.isLogin) {
        return 'Sign In'
      }
      if (this.isForgot) {
        return 'Recover'
      }
      if (this.isReset) {
        return 'Reset Password'
      }
      return 'Sign Up'
    }
  },
  methods: {
    async postAuth() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      this.$emit('post', this.form)
    }
  }
}
</script>

<style lang="scss" scoped></style>
