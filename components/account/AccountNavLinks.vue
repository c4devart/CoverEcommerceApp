<template>
  <nav
    v-if="isNotResetForgot"
    class="account-nav-links flex my-8 text-center px-4"
  >
    <template v-if="!isAuthPages">
      <nuxt-link :to="{ name: 'account-profile' }">Profile</nuxt-link>
      <nuxt-link :to="{ name: 'account-orders' }">Orders</nuxt-link>
      <nuxt-link :to="{ name: 'account-addresses' }">Addresses</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link :to="{ name: 'login', query: $route.query }">Log In</nuxt-link>
      <nuxt-link :to="{ name: 'signup', query: $route.query }">
        Sign Up
      </nuxt-link>
    </template>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthPages() {
      const authPages = ['login', 'signup']
      return authPages.includes(this.$route.name)
    },
    isNotResetForgot() {
      const recoverPages = ['password-forgot', 'password-reset']
      return !recoverPages.includes(this.$route.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.account-nav-links {
  a {
    flex: 1;
    border-bottom: 3px solid;
    @apply text-grey-600 pb-3  border-grey-200;
    &.nuxt-link-active,
    &:hover {
      @apply text-blue-900;
      border-bottom: 3px solid;
      @apply border-blue-500;
    }
  }
}
</style>
