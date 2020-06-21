<template>
  <section class="checkout-container">
    <BasePageColumns title="Checkout" type="general" hidden>
      <template v-slot:main>
        <BaseTabs>
          <BaseTabsItem
            to="/checkout/customer"
            label="CUSTOMER INFO"
            step="01"
          />
          <BaseTabsItem
            :disabled="!isShippingAvailable"
            to="/checkout/shipping"
            label="SHIPPING INFO"
            step="02"
          />
          <BaseTabsItem
            :disabled="!isPaymentAvailable"
            to="/checkout/payment"
            label="PAYMENT SELECTION"
            step="03"
          />
        </BaseTabs>
        <div v-if="checkout.id" class="my-8">
          <nuxt-child />
        </div>
      </template>
      <template v-slot:aside>
        <CartStatistics type="checkout" />
      </template>
    </BasePageColumns>
  </section>
</template>

<script>
import BaseTabs from '@/components/base/BaseTabs'
import BaseTabsItem from '@/components/base/BaseTabsItem'
import BasePageColumns from '@/components/base/BasePageColumns'
import CartStatistics from '@/components/cart/CartStatistics'

export default {
  components: {
    BaseTabs,
    BaseTabsItem,
    BasePageColumns,
    CartStatistics
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    checkout() {
      return this.$store.getters['checkout/getCheckoutDetails']
    },
    currentPage() {
      return this.$route.name
    },
    isShippingAvailable() {
      return (
        (this.$auth.loggedIn && this.checkout.customer_id) ||
        !!this.checkout.customer_info
      )
    },
    isPaymentAvailable() {
      return (
        (this.$auth.loggedIn &&
          this.checkout.customer_id &&
          this.checkout.shipping_address) ||
        (!!this.checkout.customer_info && this.checkout.shipping_address)
      )
    }
  }
}
</script>
