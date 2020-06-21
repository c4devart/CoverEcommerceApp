<template>
  <div class="processing text-center flex flex-col items-center">
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      class="mb-3"
    >
      <defs>
        <linearGradient id="a" x1="8.042%" y1="0%" x2="65.682%" y2="23.865%">
          <stop stop-color="#00b3ef" stop-opacity="0" offset="0%" />
          <stop stop-color="#00b3ef" stop-opacity=".631" offset="63.146%" />
          <stop stop-color="#00b3ef" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
          <path
            id="Oval-2"
            d="M36 18c0-9.94-8.06-18-18-18"
            stroke="url(#a)"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill="#00b3ef" cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
    <h1 class="text-3xl font-semibold">Hang tight..</h1>
    <p class="text-grey-500">{{ processingInfo }}</p>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  computed: {
    isPaypal() {
      return this.$route.query.hasOwnProperty('paypal')
    },
    processingInfo() {
      return this.isPaypal
        ? "You're being redirected to Paypal."
        : 'Your payment is being processed.'
    }
  },
  asyncData({ store, error }) {
    const checkout = store.state.checkout.checkout
    if (!checkout.id) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      checkout
    }
  },
  mounted() {
    if (!this.checkout.id) {
      this.$router.push('/404')
    }
    if (this.isPaypal) {
      this.payByPaypal()
      return
    }
    this.payByCreditCard()
  },
  methods: {
    async payByCreditCard() {
      try {
        await this.$axios.post(
          `api/checkout/${this.checkout.id}/complete`,
          this.checkout.card_info
        )
        await this.$router.push(`/order/confirmation/${this.checkout.id}`)
      } catch (err) {
        console.error(err)
      }
    },
    async payByPaypal() {
      try {
        const { data } = await this.$axios.post(
          `api/checkout/${this.checkout.id}/paypal`
        )
        window.location.replace(data)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.processing {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
