<template>
  <BaseListGrid>
    <template v-if="!category.products">
      <ProductLoadingPlaceholder v-for="(l, i) in 6" :key="i" />
    </template>
    <ProductItem
      v-else
      v-for="product in category.products"
      :key="product.id"
      :product="product"
    />
    <ProductCustomShape v-if="hasCustom" class="products-item" />
  </BaseListGrid>
</template>

<script>
import BaseListGrid from '@/components/base/BaseListGrid'
import ProductItem from '@/components/product/ProductItem'
import ProductLoadingPlaceholder from '@/components/product/ProductLoadingPlaceholder'
import ProductCustomShape from '@/components/product/ProductCustomShape'

export default {
  components: {
    BaseListGrid,
    ProductItem,
    ProductLoadingPlaceholder,
    ProductCustomShape
  },
  props: {
    hasCustom: Boolean,
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
