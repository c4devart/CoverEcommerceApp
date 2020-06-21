<template>
  <section class="account-login max-w-lg m-auto p-4">
    <BaseAlert v-if="error" type="error" class="my-3">
      {{ error }}
    </BaseAlert>
    <AuthForm @post="loginUser" type="login" />
    <div class="text-center mt-6 text-sm">
      <nuxt-link :to="{ name: 'password-forgot' }">
        Forgot password?
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import AuthForm from '@/components/auth/AuthForm'
import BaseAlert from '@/components/base/BaseAlert'
import { handleApiCaughtErrors } from '@/utils/errors'

export default {
  layout: 'auth',
  components: {
    AuthForm,
    BaseAlert
  },
  data: () => ({
    error: null
  }),
  head: () => ({
    loading: false,
    title: 'Login / HotTub Covers Canada'
  }),
  methods: {
    handleLoginErrors(error) {
      let message = handleApiCaughtErrors(error)
      if (error.response && error.response.status === 401) {
        message = "The email and password you entered don't match any account."
      }
      this.error = message
    },
    async loginUser(form) {
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: form.email,
            password: form.password
          }
        })
        const token = await this.$auth.getToken('local')
        await this.$apolloHelpers.onLogin(token.split(' ')[1])
        await this.redirectAuthUser()
        // await this.$router.push('/account')
      } catch (err) {
        this.handleLoginErrors(err)
      }
      this.loading = false
    },
    redirectAuthUser() {
      const params = this.$route.query
      if (!params || !params.continue) {
        this.$router.push('/account')
        return
      }
      const urlParam = params.continue.replace('-', '/')
      this.$router.push(`/${urlParam}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
