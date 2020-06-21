<template>
  <section class="checkout checkout-payment pb-12 lg:pb-20">
    <div class="text-2xl leading-none text-blue-900 hidden lg:flex">
      Payment Selection
    </div>
    <CheckoutPaymentForm />
  </section>
</template>
<script>
import CheckoutPaymentForm from '@/components/checkout/CheckoutPaymentForm'

export default {
  // validate({ store, redirect }) {
  //   return store.state.auth.loggedIn
  // },
  components: {
    CheckoutPaymentForm
  },

  head() {
    return {
      title: 'Checkout / HotTub Covers Canada'
    }
  },
  mounted() {
    this.validateCheckoutInfo()
  },
  methods: {
    validateCheckoutInfo() {
      const checkout = this.$store.state.checkout.checkout
      if (
        !(
          this.$store.state.auth.loggedIn &&
          checkout.customer_id &&
          checkout.shipping_address
        ) &&
        !checkout.customer_info &&
        checkout.shipping_address
      ) {
        // this.$router.push('/404')
      }
    }
  }
}
</script>
