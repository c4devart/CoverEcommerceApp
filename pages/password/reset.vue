<template>
  <div class="account-login max-w-lg m-auto p-4">
    <BaseAlert v-if="alert.type" :type="alert.type" class="my-3">
      {{ alert.message }}
    </BaseAlert>
    <AuthForm v-if="!isSent" @post="postReset" type="reset" />
    <div v-if="alert.type === 'success'" class="text-center mt-6 text-sm">
      <nuxt-link :to="{ name: 'login' }">
        Login
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { handleApiCaughtErrors } from '@/utils/errors'
import { isStrong } from '@/utils/helpers'

import AuthForm from '@/components/auth/AuthForm'
import BaseAlert from '@/components/base/BaseAlert'

export default {
  layout: 'auth',
  auth: false,
  components: {
    AuthForm,
    BaseAlert
  },
  head: () => ({
    title: 'Reset Password / HotTub Covers Canada'
  }),
  data() {
    return {
      loading: false,
      isSent: false,
      alert: {
        type: null,
        message: null
      }
    }
  },
  methods: {
    checkPassword(form) {
      this.alert = {
        type: null,
        message: null
      }
      const pass = form.password
      const rePass = form.password_confirmation
      let message = ''
      if (pass !== rePass) {
        message = "Passwords don't match."
      } else if (!isStrong(pass)) {
        message =
          'Your new password needs to have at least 8 characters with 1 number and 1 upper case letter'
      }
      if (message) {
        this.alert = {
          type: 'error',
          message
        }
        return false
      }
      return true
    },
    postReset(form) {
      if (!this.checkPassword(form)) {
        return
      }
      this.resetPassword(form)
    },
    async resetPassword(form) {
      this.loading = true
      try {
        await this.$axios.post('api/c/password/reset', {
          password: form.password,
          password_confirmation: form.password_confirmation,
          token: this.$route.query.token,
          email: this.$route.query.email
        })
        this.alert = {
          type: 'success',
          message: 'You password has been changed!'
        }
        this.isSent = true
      } catch (err) {
        this.alert = {
          type: 'error',
          message: handleApiCaughtErrors(err)
        }
      }
      this.loading = false
    }
  }
}
</script>
