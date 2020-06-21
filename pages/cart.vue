<template>
  <section class="cart-index cart pb-20">
    <BasePageColumns title="Shopping Cart" type="general" hidden>
      <template v-slot:main>
        <div class="w-full hidden md:block">
          <div v-if="items.length" class="cart-product-list-table">
            <div
              class="text-sm font-bold leading-normal text-blue-900
                      border-t border-b border-grey-300 flex justify-between py-3"
            >
              <div class="w-2/5">Product Name</div>
              <div class="hidden md:block w-1/6 text-center">Unit Price</div>
              <div class="hidden sm:block w-1/6 text-center">Quantity</div>
              <div class="w-1/6 text-center">Subtotal</div>
              <div class="w-1/6">&nbsp;</div>
            </div>
            <div class="">
              <CartProductItem
                v-for="item in items"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>
          <p v-else class="text-grey-600 my-8 bg-grey-100 rounded p-4">
            Your cart is empty.
          </p>
          <div class="cart-footer-banner flex items-center mt-10">
            <img src="/img/red-flag.png" class="cart-container__img mr-3" />
            <div class="cart-container__text">
              Our hot tub covers are <br />
              <label>shipped free across Canada!</label>
            </div>
          </div>
          <div
            class="cart-footer-action mt-10 flex items-center justify-between"
          >
            <nuxt-link
              to="/"
              class="text-sm leading-normal text-blue-500 font-semibold flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
              >
                <path
                  fill="#00B3EF"
                  fill-rule="evenodd"
                  d="M9.99 13.385l4.249 4.248a1.252 1.252 0 0 0 1.77-1.77L12.645 12.5l3.364-3.363a1.252 1.252 0 0 0-1.77-1.77L9.99 11.615a1.252 1.252 0 0 0 0 1.77"
                />
              </svg>

              Continue Shopping
            </nuxt-link>
            <!-- <button
              @click="updateShoppingCart"
              class="btn btn--cancel cart-container__button"
            >
              Update Shopping Cart
            </button> -->
          </div>
        </div>
        <CartStatistics class="block md:hidden" type="checkout" />
      </template>
      <template v-slot:aside>
        <CartStatistics :is-valid="items.length > 0" class="hidden md:block" />
      </template>
    </BasePageColumns>
    <div class="block md:hidden">
      <nuxt-link
        v-if="items.length"
        :to="{ name: 'checkout-customer' }"
        class="btn btn--primary w-full rounded-none"
      >
        Proceed to checkout
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import BasePageColumns from '@/components/base/BasePageColumns'
import CartStatistics from '@/components/cart/CartStatistics'
import CartProductItem from '@/components/cart/CartProductItem'

export default {
  components: {
    BasePageColumns,
    CartStatistics,
    CartProductItem
  },
  head() {
    return {
      title: 'Cart / HotTub Covers Canada'
    }
  },
  computed: {
    items() {
      return this.$store.getters['checkout/getCart']
    }
  },
  methods: {
    updateShoppingCart() {
      alert('you clicked Update Shopping Cart')
    }
  }
}
</script>
<style lang="scss">
.cart-container {
  &__img {
    width: 48px;
    height: 50px;
  }
  &__text {
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    label {
      @apply text-red-500;
    }
  }
  &__button {
    min-width: 213px;
  }
}
</style>
