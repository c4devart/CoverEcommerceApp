<template>
  <section class="product-detail w-full px-12 py-10">
    <ProductImageView :product="product" class="mb-5" />

    <div class="py-4 border-t-2 border-b-2 border-grey-300">
      <div
        v-if="product.sale_price"
        class="flex items-center justify-between text-green-500 font-bold"
      >
        <div>Special Price</div>
        <div>{{ salePrice }}</div>
      </div>
      <div class="flex items-center justify-between text-grey-600 my-3">
        <div>Regular</div>
        <div class="product-detail__text--decoration">{{ regPrice }}</div>
      </div>
      <div
        v-if="!product.is_special_order"
        class="flex items-center justify-between text-grey-600"
      >
        <div>Availability</div>
        <div>In stock</div>
      </div>
    </div>
    <div
      class="flex items-center justify-between font-bold py-5 border-b-2 border-grey-300"
    >
      <div>Total</div>
      <div><span class="text-xs font-hairline">CAD</span> {{ totalPrice }}</div>
    </div>
    <div v-if="product.is_special_order" class="pt-6">
      <nuxt-link
        :to="{
          name: 'products-slug-build-shape',
          params: { slug: product.permalink }
        }"
        class="btn btn--primary product-detail__button"
      >
        Start Building
      </nuxt-link>
    </div>
    <div v-else class="flex items-end justify-between">
      <FormItem
        v-model="quantity"
        label="Quantity"
        class="w-12 product-detail__input mt-5"
      />
      <button
        @click="addToCart"
        class="btn btn--primary product-detail__button"
      >
        Add to Cart
      </button>
      {{ $store.state.checkout.items }}
    </div>
  </section>
</template>
<script>
import { currencyFormat } from '@/utils/helpers'
import ProductImageView from '@/components/products/ProductImageView'
import FormItem from '@/components/form/FormItem'

export default {
  components: {
    ProductImageView,
    FormItem
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    quantity: 1
  }),
  computed: {
    regPrice() {
      return currencyFormat(this.product.reg_price)
    },
    salePrice() {
      return currencyFormat(this.product.sale_price)
    },
    totalPrice() {
      const currentPrice = this.product.sale_price
        ? this.product.sale_price
        : this.product.reg_price
      const totalCalc = this.quantity * currentPrice
      return currencyFormat(totalCalc)
    }
  },
  methods: {
    async addToCart() {
      await this.$store.dispatch('checkout/addToCart', {
        productId: this.product.id,
        quantity: this.quantity
      })
      await this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss">
.product-detail {
  &__input input {
    text-align: center !important;
  }
  &__button {
    width: 205px;
  }
  &__text--decoration {
    // @apply line-through;
    text-decoration-color: #718096;
  }
}
</style>
