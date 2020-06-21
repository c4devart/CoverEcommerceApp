<template>
  <section :class="paddingClass" class="cart-statistics w-full">
    <div
      class="flex items-center justify-between border-grey-200 border-b pb-8"
    >
      <div class="text-2xl">
        {{ cartTitle }}
      </div>
      <div
        class="w-5 h-5 bg-red-500 text-white text-xs flex justify-center items-center cart-statistics__noti"
      >
        {{ totalItems }}
      </div>
    </div>
    <div v-if="type != 'cart'" class="flex flex-col mt-10">
      <template v-if="items && items.length">
        <CartStatisticsItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          with-price
          class="cart-statistics__product-item"
        />
      </template>
    </div>

    <div class="flex items-center justify-between mt-10">
      <div class="text-sm font-semibold cart-statistics__color--blue1000">
        {{ type != 'cart' ? 'Discount Code' : 'Referral Code If You Have One' }}
      </div>
    </div>
    <div class="flex items-center mt-2">
      <BaseInput
        v-model="referralCode"
        placeholder="Enter Code"
        text-align="left"
        px-type="2"
      >
        <button
          @click="onReferralCodeApply"
          class="btn btn--cancel cart-statistics__apply-button"
        >
          Apply
        </button>
      </BaseInput>
    </div>
    <div class="flex justify-between mt-5 text-grey-600">
      <div>Sub Total</div>
      <div>{{ subtotal }}</div>
    </div>
    <div
      v-if="type != 'cart' && isPaymentPage"
      class="flex justify-between mt-2 text-grey-600"
    >
      <div>Shipping</div>
      <div class="text-green-500 font-bold">Free</div>
    </div>
    <div v-if="isPaymentPage" class="flex justify-between mt-2 text-grey-600">
      <div>Tax</div>
      <div>{{ taxes }}</div>
    </div>
    <div class="border-t-2 border-grey-200 mt-4 pt-6">
      <div v-if="isPaymentPage" class="flex justify-between mb-1 font-bold">
        <div>Total</div>
        <div class="flex items-center">
          <span class="mr-2 text-xs font-light">CAD</span>{{ total }}
        </div>
      </div>
      <div v-if="type === 'cart'" class="mt-4">
        <nuxt-link
          v-if="isValid"
          :to="{ name: 'checkout-customer' }"
          class="btn btn--primary cart-statistics__button"
        >
          Proceed to checkout
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import { currencyFormat } from '@/utils/helpers'
import BaseInput from '@/components/base/BaseInput'
import CartStatisticsItem from '@/components/cart/CartStatisticsItem'
export default {
  components: {
    CartStatisticsItem,
    BaseInput
  },
  props: {
    type: {
      type: String,
      default: 'cart'
    },
    isValid: Boolean
  },
  data: () => ({
    referralCode: ''
  }),
  computed: {
    ...mapGetters({
      checkout: 'checkout/getCheckoutDetails',
      totalItems: 'checkout/getTotalItems',
      items: 'checkout/getCart'
    }),
    cartTitle() {
      return this.type !== 'cart' ? 'Shopping Cart' : 'Total'
    },
    isPaymentPage() {
      return this.$route.name === 'checkout-payment'
    },
    paddingClass() {
      return this.type === 'cart' ? 'p-10' : ['px-10', 'pt-10', 'pb-24']
    },
    subtotal() {
      return currencyFormat(this.checkout.subtotal)
    },
    taxes() {
      const taxes = Number(this.checkout.total) - Number(this.checkout.subtotal)
      return currencyFormat(taxes)
    },
    total() {
      return currencyFormat(this.checkout.total)
    }
  },
  methods: {
    onReferralCodeApply() {
      alert('click referral code apply!')
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-statistics {
  &__button {
    width: 195px;
  }
  &__apply-button {
    min-width: 88px;
    border: none;
    border-radius: 5px;
    border-left: 1px solid;
    @apply border-grey-300;
  }
  &__noti {
    border-radius: 50%;
  }
  &__color--blue1000 {
    color: #002c69;
  }
  &__product-item:not(:last-child) {
    @apply mb-8;
  }
}
</style>
