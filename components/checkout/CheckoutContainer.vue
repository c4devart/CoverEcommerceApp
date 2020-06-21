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
            :disabled="!isShippingAv"
            to="/checkout/shipping"
            label="SHIPPING INFO"
            step="02"
          />
          <BaseTabsItem
            :disabled="!isPaymentAv"
            to="/checkout/payment"
            label="PAYMENT SELECTION"
            step="03"
          />
        </BaseTabs>
        <div class="my-8">
          <div
            v-if="label != ''"
            class="text-2xl leading-none text-blue-900 hidden lg:flex"
          >
            {{ label }}
          </div>
          <slot />
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
    isShippingAv() {
      // return this.$auth.loggedIn || !!this.$store.state.guest.guest
      return !!this.$store.state.guest.guest
    },
    isPaymentAv() {
      // if (this.$auth.loggedIn) {
      //   return true
      // }
      const guest = this.$store.state.guest.guest
      return guest && guest.addresses && guest.addresses.length > 0
    }
  }
}
</script>
