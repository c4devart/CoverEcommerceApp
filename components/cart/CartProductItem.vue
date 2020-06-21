<template>
  <div
    class="cart-item flex justify-between items-start py-3 border-b border-grey-300"
  >
    <div class="flex items-start w-2/5">
      <div
        :style="itemImg"
        class="hidden md:block cart-item__img border border-grey-300 rounded"
      />
      <div class="md:ml-4">
        <div class="md:mt-5">
          {{ item.product.title }}
        </div>
        <div v-if="productOptions.length" class="md:mb-5">
          <div
            v-for="option in productOptions"
            :key="option.id"
            class="text-grey-500 text-sm capitalize leading-tight my-1"
          >
            <span class="font-semibold">{{ optionLabel(option) }}</span
            >: {{ optionValue(option) }}
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block md:mt-5 text-grey-600 w-1/6 text-center">
      {{ format(item.unit_price) }}
    </div>
    <div
      class="hidden sm:block text-center cart-product-list__product-item-count-div w-1/6"
    >
      <FormItem v-model="quantity" class="w-32 flex justify-center" />
    </div>
    <div class="text-grey-600 md:mt-5 w-1/6 text-center">
      {{ format(item.subtotal) }}
    </div>
    <div class="w-1/6 md:mt-6 flex items-center justify-end">
      <nuxt-link
        :to="editRoute"
        class="text-xs leading-normal text-blue-600 mr-6"
      >
        Edit
      </nuxt-link>
      <a
        @click.prevent="removeProduct()"
        href=""
        class="text-xs leading-normal text-blue-600"
      >
        Remove
      </a>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'

import FormItem from '@/components/form/FormItem'
export default {
  components: {
    FormItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: this.item.qty
    }
  },
  computed: {
    productOptions() {
      if (this.item.is_special_order && this.item.product.options.length) {
        const stringBuilder = localStorage.getItem('builder')

        if (stringBuilder) {
          const builder = JSON.parse(stringBuilder)
          console.log(builder[this.item.product_id].options)
          return builder[this.item.product_id]
            ? builder[this.item.product_id].options
            : []
        }
        return []
      }
      return []
    },
    editRoute() {
      const name = this.item.is_special_order
        ? 'products-slug-build-shape'
        : 'products-slug'
      return {
        name,
        params: {
          slug: this.item.product.permalink
        }
      }
    },
    itemImg() {
      if (this.item.product.images.length) {
        return `background: no-repeat url(${this.item.product.images[0].public_url}) center center / cover`
      }
      return `background: #f7fafc`
    }
  },
  watch: {
    quantity() {
      this.$store.dispatch('checkout/updateCartItem', {
        productId: this.item.product_id,
        itemId: this.item.id,
        qty: this.quantity
      })
    }
  },
  methods: {
    format(item) {
      return currencyFormat(item)
    },
    removeProduct() {
      this.$store.dispatch('checkout/deleteCartItem', this.item)
    },
    optionLabel(option) {
      return option.title || option.slug
    },
    optionValue(option) {
      return option.value || option.label
    }
  }
}
</script>

<style lang="scss">
.cart-item {
  &__img {
    min-width: 60px;
    height: 60px;
  }
  .form-item {
    max-width: 56px !important;
    input {
      text-align: center;
    }
  }
}
</style>
