<template>
  <section class="account-profile max-w-lg m-auto p-4">
    <AccountProfileForm v-if="customer" :initial-data="customer" />
  </section>
</template>

<script>
import AccountProfileForm from '@/components/account/AccountProfileForm'

export default {
  layout: 'customer',
  components: {
    AccountProfileForm
  },
  head: () => ({
    title: 'Profile / HotTub Covers Canada'
  }),
  computed: {
    customer() {
      return this.$store.getters['customer/getCustomer']
    }
  }
}
</script>

<style lang="scss" scoped></style>
