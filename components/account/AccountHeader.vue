<template>
  <header class="account-header bg-grey-100 px-4">
    <div class="container flex h-12 justify-between items-center text-sm">
      <nuxt-link to="/">Back Home</nuxt-link>
      <a
        v-if="$auth.loggedIn"
        @click.prevent="logout"
        href=""
        class="logout-link"
      >
        Log Out
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped></style>
