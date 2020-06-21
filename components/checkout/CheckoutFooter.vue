<template>
  <section class="checkout-footer absolute md:static mobile-checkout-footer">
    <!-- <div class="w-full flex items-center justify-between"> -->
    <div class="w-full items-center justify-between hidden md:flex">
      <nuxt-link
        :to="{ name: goBack.url }"
        class="text-sm leading-normal text-blue-500 font-semibold flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <path
            fill="#00B3EF"
            fill-rule="evenodd"
            d="M9.49 13.385l4.249 4.248a1.252 1.252 0 0 0 1.77-1.77L12.145 12.5l3.364-3.363a1.252 1.252 0 0 0-1.77-1.77L9.49 11.615a1.252 1.252 0 0 0 0 1.77"
          />
        </svg>
        {{ goBack.label }}
      </nuxt-link>
      <button
        v-if="showNext"
        @click="$emit('continue')"
        class="btn btn--primary"
      >
        {{ goNext.label }}
      </button>
    </div>
    <div class="w-full items-center flex md:hidden">
      <nuxt-link
        :to="{ name: goBack.url }"
        class="md:hidden btn btn--back w-1/3 checkout-footer__button--border-none"
      >
        Go Back
      </nuxt-link>
      <button
        v-if="showNext"
        @click="$emit('continue')"
        class="btn btn--primary w-2/3 checkout-footer__button--border-none checkout-footer__button--shopping border border-blue-500"
      >
        {{ goNext.label }}
      </button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'customer'
    },
    noContinue: Boolean
  },
  computed: {
    goBack() {
      let label = 'Return to Shop'
      let url = 'index'
      if (this.type === 'payment') {
        url = 'checkout-shipping'
        label = 'Return to Shipping Info'
      }
      if (this.type === 'shipping') {
        url = 'checkout-customer'
        label = 'Return to Customer Info'
      }
      return { url, label }
    },
    goNext() {
      let label = 'Complete Order'
      let url = 'checkout-confirmation'
      if (this.type === 'customer') {
        url = 'checkout-shipping'
        label = 'Continue to Shipping'
      }
      if (this.type === 'shipping') {
        url = 'checkout-payment'
        label = 'Continue to Payment'
      }
      return { url, label }
    },
    showNext() {
      if (this.type === 'shipping' && this.$auth.loggedIn) {
        return !!this.$store.getters['customer/getShippingAddress']
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.mobile-checkout-footer {
  width: 100%;
  left: 0;
}
.checkout-footer {
  &__button {
    &--border-none {
      border-radius: 0px;
    }
    &--shopping:hover {
      @apply border border-blue-900;
    }
  }
}
</style>
