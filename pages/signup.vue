<template>
  <section class="account-signup max-w-lg m-auto p-4">
    <BaseAlert v-if="error" type="error" class="mb-3">
      {{ error }}
    </BaseAlert>
    <AuthForm @post="postSignup" type="signup" />
  </section>
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
    title: 'Signup / HotTub Covers Canada'
  }),
  data: () => ({
    error: null,
    loading: null
  }),
  methods: {
    async login(form) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: form.email,
            password: form.password
          }
        })
        const token = this.$auth.getToken('local')
        await this.$apolloHelpers.onLogin(token.split(' ')[1])
        await this.redirectAuthUser()
      } catch (err) {
        this.error = handleApiCaughtErrors(err)
      }
    },
    postSignup(form) {
      if (!isStrong(form.password)) {
        this.error =
          'Your password needs to have at least 8 characters with 1 number and 1 upper case letter'
        return
      }
      this.signupUser(form)
    },
    async signupUser(form) {
      this.loading = true
      try {
        await this.$axios.post('api/c/register', {
          email: form.email,
          password: form.password
        })
        await this.login(form)
      } catch (err) {
        this.error = handleApiCaughtErrors(err)
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
