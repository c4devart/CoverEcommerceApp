<template>
  <div class="app-header-top-nav bg-grey-100 md:block">
    <nav
      class="container-pc flex pt-8 pb-20 pl-5 md:p-4 items-center justify-between text-sm "
    >
      <div
        class="text-blue-900 font-semibold hidden md:flex items-center leading-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          class="mr-2"
        >
          <path
            fill="#24C8FF"
            fill-rule="nonzero"
            d="M1.554 14C8.556 14 14.24 8.326 14.24 1.313a.655.655 0 0 0-.508-.64L10.889.017a.66.66 0 0 0-.752.38L8.824 3.459a.655.655 0 0 0 .19.766L10.67 5.58a10.134 10.134 0 0 1-4.845 4.845L4.469 8.77a.656.656 0 0 0-.766-.188L.64 9.893a.664.664 0 0 0-.382.755l.656 2.844c.068.295.33.508.64.508z"
          />
        </svg>

        Order by phone 1.877.544.COVER (2683)
      </div>
      <nav
        class="app-header-top-nav__nav flex flex-col-reverse md:flex-row md:items-center w-full md:w-auto"
      >
        <BaseLink
          label="About Our Covers"
          class="pb-5 md:pb-0 md:pr-4"
          is-small
        >
          <nuxt-link to="/upgrade-options">Upgrade Options</nuxt-link>
          <nuxt-link to="/cover-insulations">Cover Insulations</nuxt-link>
          <nuxt-link to="/inside-our-covers">Inside Our Covers</nuxt-link>
          <nuxt-link to="/r-values-for-covers">R-Values for Covers</nuxt-link>
          <nuxt-link to="/cover-features">Cover Features</nuxt-link>
        </BaseLink>

        <BaseLink label="Customer Care" class="pb-5 md:pb-0 md:px-4" is-small>
          <nuxt-link to="/measurement-guide">Measurement Guide</nuxt-link>
          <nuxt-link :to="{ name: 'faq' }">FAQs</nuxt-link>
          <nuxt-link to="/custom-cover-template">
            Custom Cover Template
          </nuxt-link>
          <nuxt-link to="/shipping-returns">Shipping & Returns</nuxt-link>
          <nuxt-link to="/7-year-warranty">7-Year Warranty</nuxt-link>
        </BaseLink>

        <BaseLink label="Resources" class="pb-5 md:pb-0 md:px-4" is-small>
          <nuxt-link to="/caring-for-your-hot-tub-cover"
            >Caring for Your Hot Tub Cover</nuxt-link
          >
          <nuxt-link to="/shopping-for-your-hot-tub-cover"
            >Shopping for Your Hot Tub Cover</nuxt-link
          >
          <nuxt-link to="/history-of-the-hot-tub"
            >History of the Hot Tub</nuxt-link
          >
          <nuxt-link to="/benefits-of-saltwater-hot-tubs"
            >Benefits of Saltwater Hot Tubs</nuxt-link
          >
          <nuxt-link to="/helpful-links">Helpful Links</nuxt-link>
          <nuxt-link :to="{ name: 'videos' }">Videos</nuxt-link>
          <nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
        </BaseLink>
        <nuxt-link :to="{ name: 'testimonials' }" class="pb-5 md:pb-0 md:px-4"
          >Testimonials</nuxt-link
        >
        <nuxt-link :to="{ name: 'contact' }" class="pb-5 md:pb-0 md:px-4"
          >Contact</nuxt-link
        >
        <div class="separator hidden md:block" />
        <nuxt-link :to="{ name: authLink.url }" class="pb-5 md:pb-0 md:px-4">
          {{ authLink.label }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'cart' }" class="hidden md:block relative">
          <div
            v-if="totalItems > 0"
            class="cart-notifications rounded-full w-4 h-4 bg-red-500 text-white text-xs flex justify-center items-center absolute"
          >
            {{ totalItems }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
          >
            <path
              fill="#0A2857"
              fill-rule="evenodd"
              d="M10.643 17.226a2.525 2.525 0 0 0-2.414 2.607 2.474 2.474 0 0 0 2.462 2.39h.049c1.375-.073 2.462-1.231 2.39-2.607a2.496 2.496 0 0 0-2.487-2.39M23.702 5.253c-.048 0-.12-.024-.193-.024H8.301l-.24-1.617a2.162 2.162 0 0 0-2.15-1.859H3.957a.968.968 0 0 0-.965.966c0 .53.434.965.965.965h1.956c.12 0 .217.097.241.218L7.65 14.088a2.647 2.647 0 0 0 2.607 2.245h10.042a2.683 2.683 0 0 0 2.607-2.124l1.569-7.845a.954.954 0 0 0-.773-1.11m-1.907 14.482c0 1.4-1.135 2.51-2.51 2.51-1.4 0-2.51-1.134-2.51-2.51 0-1.4 1.134-2.51 2.51-2.51 1.375 0 2.486 1.135 2.51 2.51"
            />
          </svg>
        </nuxt-link>
      </nav>
    </nav>
  </div>
</template>

<script>
import BaseLink from '@/components/base/BaseLink'

export default {
  components: {
    BaseLink
  },
  computed: {
    authLink() {
      return {
        label: this.$auth.loggedIn ? 'My Account' : 'Login',
        url: this.$auth.loggedIn ? 'account-profile' : 'login'
      }
    },
    totalItems() {
      return this.$store.getters['checkout/getTotalItems']
    }
  }
}
</script>

<style scoped>
.cart-notifications {
  top: -8px;
  right: -10px;
}
.separator {
  width: 1px;
  @apply bg-grey-400 h-6;
}
</style>
