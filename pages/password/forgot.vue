<template>
  <section class="account-login max-w-lg m-auto p-4">
    <BaseAlert v-if="alert.type" :type="alert.type" class="my-3">
      {{ alert.message }}
    </BaseAlert>
    <AuthForm v-if="!isSent" @post="postForgot" type="forgot" />
    <div class="text-center mt-6 text-sm">
      <nuxt-link :to="{ name: 'login' }">
        {{ btnLabel }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { handleApiCaughtErrors } from '@/utils/errors'

import AuthForm from '@/components/auth/AuthForm'
import BaseAlert from '@/components/base/BaseAlert'

export default {
  layout: 'auth',
  auth: false,
  components: {
    AuthForm,
    BaseAlert
  },
  data: () => ({
    isSent: false,
    alert: {
      type: null,
      message: null
    }
  }),
  head: () => ({
    loading: false,
    title: 'Forgot Password / HotTub Covers Canada'
  }),
  computed: {
    btnLabel() {
      return this.isSent ? 'Back' : 'Cancel'
    }
  },
  methods: {
    async postForgot(form) {
      this.loading = true
      try {
        await this.$axios.post('api/c/password/email', { email: form.email })
        this.alert = {
          type: 'success',
          message:
            'A message has been sent to that address containing a link to reset your password'
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

<style lang="scss" scoped></style>
