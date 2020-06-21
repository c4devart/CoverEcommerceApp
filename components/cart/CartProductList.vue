<template>
  <div class="w-full">
    <table class="cart-product-list-table">
      <thead
        class="text-sm font-bold leading-normal text-blue-900
                    border-t border-b border-grey-300"
      >
        <th v-for="element in fields" :key="element.id" class="pb-2 pt-3">
          {{ element.label }}
        </th>
      </thead>
      <!--
      <tbody v-if="items.length <= 0">
        <tr>
          <td colspan="20" style="text-align: center;line-height: 40px;">
            Empty
          </td>
        </tr>
      </tbody>
      -->
      <tbody>
        <tr
          v-for="item in items"
          :key="item.product_id"
          class="cart-product-list__product-content-tr border-b border-grey-300"
        >
          <td
            v-for="field in fields"
            :key="field.id"
            :class="
              field.type == 'inputbox'
                ? [
                    'cart-product-list____product-item-td--align-center',
                    'product-count'
                  ]
                : ''
            "
          >
            <ProductItem
              v-if="field.type == 'product-item'"
              :product="item[field.key]"
              class="cart-product-list__product-item"
            />
            <div
              v-if="field.type == 'text'"
              class="text-base leading-tight text-grey-600 text-center pl-3 pr-3"
            >
              ${{ item[field.key] }}
            </div>
            <div class="text-center cart-product-list__product-item-count-div">
              <BaseInput
                v-if="field.type == 'inputbox'"
                v-model="item[field.key]"
              />
            </div>
            <div v-if="field.type == 'action'" class="text-center pl-3 pr-3">
              <a
                @click="onRemoveProduct(item[field.key])"
                href="#"
                class="text-xs leading-normal text-blue-600"
              >
                Remove
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ProductItem from '@/components/cart/ProductItem'
import BaseInput from '@/components/base/BaseInput'
export default {
  name: 'CartProductList',
  components: {
    ProductItem,
    BaseInput
  },
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onRemoveProduct(id) {
      alert('product id is ' + id)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-product-list {
  &__product-item {
    margin-right: 43.5px;
  }
  &__product-content-tr td {
    padding-top: 20.5px;
    padding-bottom: 20px;
  }
  &__product-content-tr td.product-count {
    padding-left: 35.5px;
    padding-right: 35.5px;
  }
  &__product-item-count-div {
    width: 56px;
  }
  &__product-item-td--align-center {
    display: flex;
    justify-content: center;
  }
}
</style>
