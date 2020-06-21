<template>
  <div :id="pageId">
    <AppBanner />
    <AppHeader />
    <main :class="mainClass">
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppBanner,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      pageId: `page-${this.$route.name}`
    }
  },
  computed: {
    mainClass() {
      return this.$route.name === 'index' ? '' : 'my-8'
    }
  },
  beforeCreate() {
    const localGuest = localStorage.getItem('guest')
    if (localGuest) {
      this.$store.commit('guest/setGuest', JSON.parse(localGuest))
    }
  },
  created() {
    this.$store.dispatch('checkout/getCheckout')
  }
}
</script>

<style>
#page-testimonials {
  @apply bg-grey-100;
}
</style>
