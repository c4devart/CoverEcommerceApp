<template>
  <section class="checkout checkout-confirmation pb-20">
    <main class="m-auto max-w-3xl">
      <div class="page-header flex flex-col items-center mt-16">
        <div class="p-2 bg-green-100 checkout-confirmation__msg">
          <img src="/img/checkmark1.svg" alt="check mark" />
        </div>
        <div class="text-blue-900 text-4xl font-bold leading-none mt-3">
          We've received your order.
        </div>
        <div class="text-blue-900 font-normal mt-1">
          Have a splashtastic time!
        </div>
      </div>
      <OrderConfirmationTable :order="order" class="mt-10" />
      <div class="mt-8 justify-center flex text-center">
        <button @click="print" class="btn btn--terciary">Print</button>
      </div>
    </main>
  </section>
</template>
<script>
import OrderConfirmationTable from '@/components/order/OrderConfirmationTable'
import { orderByCheckoutId } from '@/graphql/order'

const makeQuery = (variables) => {
  return {
    query: orderByCheckoutId,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  components: {
    OrderConfirmationTable
  },

  data: () => ({
    order: null
  }),

  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        checkout_id: params.id
      })
    )
    if (!data.orderByCheckoutId || data.orderByCheckoutId.status === 'error') {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      order: data.orderByCheckoutId,
      loading: false
    }
  },
  mounted() {
    setTimeout(() => this.clearCheckout(), 400)
  },
  methods: {
    clearCheckout() {
      localStorage.removeItem('checkoutUuid')
      localStorage.removeItem('builder')
      this.$store.dispatch('checkout/clearCartCheckout')
    },
    print() {
      window.print()
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
.checkout-confirmation {
  &__msg {
    border-radius: 50%;
  }
}
</style>
