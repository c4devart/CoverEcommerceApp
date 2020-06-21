<template>
  <section class="checkout checkout-confirmation pb-20">
    <main class="m-auto max-w-3xl">
      <div class="page-header flex flex-col items-center mt-16">
        <div class="mb-2">
          <svg
            fill="#e53e3e"
            width="48px"
            height="48px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M9,0 C13.963,0 18,4.038 18,9 C18,13.963 13.963,18 9,18 C4.037,18 0,13.963 0,9 C0,4.038 4.037,0 9,0 Z M9,2 C5.141,2 2,5.141 2,9 C2,12.86 5.141,16 9,16 C12.859,16 16,12.86 16,9 C16,5.141 12.859,2 9,2 Z M9,11.811 C9.553,11.811 10,12.259 10,12.811 C10,13.364 9.553,13.811 9,13.811 C8.447,13.811 8,13.364 8,12.811 C8,12.259 8.447,11.811 9,11.811 Z M9,4.19 C9.553,4.19 10,4.637 10,5.19 L10,9.881 C10,10.434 9.553,10.881 9,10.881 C8.447,10.881 8,10.434 8,9.881 L8,5.19 C8,4.637 8.447,4.19 9,4.19 Z"
            />
          </svg>
        </div>
        <div class="text-blue-900 text-4xl font-bold leading-none mt-3">
          Something went wrong
        </div>
        <div class="text-blue-900 font-normal mt-1">
          The payment hasn't been processed. Please try again.
        </div>
      </div>
      <div class="mt-8 justify-center flex text-center">
        <nuxt-link
          :to="{
            name: 'checkout-payment'
          }"
          class="btn btn--terciary"
        >
          Try Again
        </nuxt-link>
      </div>
    </main>
  </section>
</template>
<script>
import { getOrder } from '@/graphql/order'

const makeQuery = (variables) => {
  return {
    query: getOrder,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  data: () => ({
    order: null
  }),
  computed: {
    checkout() {
      return this.$store.getters['checkout/getCheckoutDetails']
    }
  },

  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        id: params.id
      })
    )
    if (!data.order || data.order.status !== 'error') {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      order: data.order,
      loading: false
    }
  },

  methods: {
    retryCheckout() {
      this.$router.push({
        name: 'checkout-payment',
        params: { id: this.checkout.id }
      })
    }
  }
}
</script>
<style lang="scss">
@media print {
  .app-header,
  .app-banner,
  .confirmation-table-header,
  .app-footer,
  .checkout-confirmation__msg {
    display: none;
  }
  .confirmation-table-header {
  }
  .account-order-item > div {
    display: table;
    width: 100%;
  }
  .table__col-sm,
  .table__col {
    display: table-cell;
    vertical-align: middle;
    padding-right: 12pt;
  }
  .table__col-sm {
    width: 90px;
  }
  .account-order-details {
    display: table;
    margin: 0 auto;
  }
  .account-order-details__item {
    display: table-cell;
    padding: 12pt;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
