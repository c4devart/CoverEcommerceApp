<template>
  <div>
    <AccountHeader />
    <main class="account-page m-auto pb-16 max-w-3xl">
      <AccountNav title="My Account" />
      <nuxt />
    </main>
  </div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader'
import AccountNav from '@/components/account/AccountNav'

export default {
  middleware: 'auth',
  components: {
    AccountHeader,
    AccountNav
  },
  created() {
    this.$store.dispatch('customer/getCustomer')
  }
}
</script>
