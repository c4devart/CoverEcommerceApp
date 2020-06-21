<template>
  <div class="account-order-total flex justify-end">
    <div class="account-order-total__tl my-6">
      <div class="flex justify-between mt-1">
        <div>Sub Total</div>
        <div>{{ subtotal }}</div>
      </div>
      <div class="flex justify-between mt-1">
        <div>Shipping</div>
        <div>{{ shipping }}</div>
      </div>
      <div class="flex justify-between mt-1">
        <div>Taxes</div>
        <div>{{ taxes }}</div>
      </div>
      <div class="flex justify-between font-bold mt-2">
        <div>Total</div>
        <div>{{ total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'

export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    subtotal() {
      return currencyFormat(this.order.subtotal)
    },
    shipping() {
      return currencyFormat(this.order.shipping)
    },
    taxes() {
      return currencyFormat(this.order.taxes)
    },
    total() {
      return currencyFormat(this.order.total)
    }
  }
}
</script>

<style lang="scss" scoped>
.account-order-total {
  &__tl {
    flex: 0 1 290px;
  }
}
</style>
