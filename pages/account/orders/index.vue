<template>
  <section v-if="orders" class="account-orders px-4">
    <div class="account-orders__header px-8 flex pb-4 flex-col md:flex-row">
      <span class="order-col">Order Date</span>
      <span class="order-col py-2 md:py-0">Order No.</span>
      <span class="order-col">Status</span>
      <span class="order-col-large py-2 md:py-0">Tracking Number</span>
      <span class="order-col-large" />
    </div>
    <template v-if="orders.length">
      <AccountOrdersItem
        v-for="order in orders"
        :key="order.id"
        :order="order"
      />
    </template>
    <p v-else class="mt-6 text-grey-500 text-center font-semi text-sm">
      No order available.
    </p>
  </section>
</template>

<script>
import AccountOrdersItem from '@/components/account/AccountOrdersItem'

export default {
  layout: 'customer',
  components: {
    AccountOrdersItem
  },
  head: () => ({
    title: 'Orders / HotTub Covers Canada'
  }),
  computed: {
    orders() {
      return this.$store.getters['customer/getOrders']
    }
  }
}
</script>

<style lang="scss" scoped>
.account-orders {
  .account-orders__header {
    .order-col {
      max-width: 120px;
      &-large {
        max-width: auto;
      }
    }
    span {
      @apply font-bold text-sm flex-1;
    }
  }
}
</style>
