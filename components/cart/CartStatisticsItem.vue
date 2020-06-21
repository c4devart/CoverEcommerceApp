<template>
  <div class="flex flex-row items-center">
    <div
      class="rounded-md border-solid border border-grey-300
                flex items-center justify-center product-item__product-outline"
    >
      <img
        src="/img/hero-hottub.png"
        alt="product image"
        class="product-item__product-img"
      />
    </div>
    <div
      v-if="withPrice"
      class="ml-4 text-base leading-normal text-blue-900 flex flex-col"
    >
      <div>
        {{ productName }}
      </div>
      <div class="font-bold">{{ productPrice }}</div>
    </div>
    <div v-if="!withPrice" class="ml-4 text-base leading-normal text-blue-900">
      {{ item.product.title }}
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '@/utils/helpers'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    withPrice: Boolean
  },
  computed: {
    productName() {
      return `${this.item.product.title} (x${this.item.qty})`
    },
    productPrice() {
      const price = this.item.product.sale_price || this.item.product.reg_price
      return currencyFormat(price)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  &__product-img {
    width: 48.5px;
    height: 48.5px;
  }
  &__product-outline {
    width: 60px;
    height: 60px;
  }
}
</style>
