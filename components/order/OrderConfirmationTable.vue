<template>
  <section v-if="order" class="checkout-confirmation-order px-4">
    <AccountOrderHeader
      :order="order"
      class="checkout-confirmation-order__header"
    />
    <div
      class="confirmation-table-header flex flex-col md:flex-row border-t border-b border-grey-300 text-sm py-3 font-bold mt-10"
    >
      <div class="table__col-sm" />
      <div class="table__col">Item</div>
      <div class="table__col-sm text-right pr-4">Subtotal</div>
    </div>
    <AccountOrderItem
      v-for="item in order.items"
      :key="item.id"
      :item="item"
      type="checkout"
    />
    <AccountOrderTotal :order="order" />
    <AccountOrderDetails :order="order" type="checkout" />
  </section>
</template>

<script>
import AccountOrderItem from '@/components/account/AccountOrderItem'
import AccountOrderHeader from '@/components/account/AccountOrderHeader'
import AccountOrderTotal from '@/components/account/AccountOrderTotal'
import AccountOrderDetails from '@/components/account/AccountOrderDetails'

export default {
  components: {
    AccountOrderItem,
    AccountOrderHeader,
    AccountOrderTotal,
    AccountOrderDetails
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.checkout-confirmation-order {
  .table {
    &__col {
      flex: 0 1 76%;
      &-sm {
        flex: 0 1 12%;
      }
    }
  }
}
</style>
