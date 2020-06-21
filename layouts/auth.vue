<template>
  <div>
    <AccountHeader />
    <main class="account-page m-auto pb-16 max-w-xl  p-8">
      <AccountNav :title="pageTitle" />
      <nuxt />
    </main>
  </div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader'
import AccountNav from '@/components/account/AccountNav'

export default {
  components: {
    AccountHeader,
    AccountNav
  },
  computed: {
    pageTitle() {
      if (this.$route.name === 'password-forgot') {
        return 'Forgot Password?'
      }
      if (this.$route.name === 'password-reset') {
        return 'Reset Password'
      }
      return 'Hello'
    }
  }
}
</script>
