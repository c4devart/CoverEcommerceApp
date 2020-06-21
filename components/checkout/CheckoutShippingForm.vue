<template>
  <section class="checkout-shipping-form">
    <CheckoutLoadingPlaceholder v-if="loading" is-shipping class="mt-5" />
    <CheckoutShippingAddress v-else class="mt-5" />
  </section>
</template>
<script>
import CheckoutShippingAddress from '@/components/checkout/CheckoutShippingAddress'
import CheckoutLoadingPlaceholder from '@/components/checkout/CheckoutLoadingPlaceholder'

export default {
  components: {
    CheckoutShippingAddress,
    CheckoutLoadingPlaceholder
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => (this.loading = false), 500)
  }
}
</script>
