<template>
  <section v-if="order" class="account-order px-4">
    <AccountOrderHeader :order="order" />
    <div
      class="flex flex-col md:flex-row border-t border-b border-grey-300 text-sm py-3 font-bold mt-10"
    >
      <div class="table__col-sm" />
      <div class="table__col">Item</div>
      <div class="table__col">Tracking Number</div>
      <div class="table__col-sm text-right">Subtotal</div>
    </div>
    <AccountOrderItem v-for="item in order.items" :key="item.id" :item="item" />
    <AccountOrderTotal :order="order" />
    <AccountOrderDetails :order="order" />
    <div class="mt-6 flex justify-end">
      <nuxt-link :to="{ name: 'account-orders' }" class="text-blue-500 text-sm">
        Back to all orders
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import AccountOrderItem from '@/components/account/AccountOrderItem'
import AccountOrderHeader from '@/components/account/AccountOrderHeader'
import AccountOrderTotal from '@/components/account/AccountOrderTotal'
import AccountOrderDetails from '@/components/account/AccountOrderDetails'

export default {
  layout: 'customer',
  components: {
    AccountOrderItem,
    AccountOrderHeader,
    AccountOrderTotal,
    AccountOrderDetails
  },
  head() {
    return {
      title: 'Order # / HotTub Covers Canada'
    }
  },
  computed: {
    order() {
      const id = this.$route.params.id
      return this.$store.getters['customer/getOrder'](id)
    }
  }
}
</script>

<style lang="scss">
.account-order {
  .table {
    &__col {
      flex: 0 1 42%;
      &-sm {
        flex: 0 1 12%;
      }
    }
  }
}
</style>
