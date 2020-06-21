<template>
  <section class="account-nav">
    <h1 class="text-4xl text-bold text-center mt-8 mb-6 font-title">
      {{ title }}
    </h1>
    <AccountNavLinks />
  </section>
</template>

<script>
import AccountNavLinks from '@/components/account/AccountNavLinks'

export default {
  components: {
    AccountNavLinks
  },
  props: {
    isAuth: Boolean,
    title: {
      type: String,
      default: 'My Account'
    }
  }
}
</script>

<style lang="scss" scoped></style>
