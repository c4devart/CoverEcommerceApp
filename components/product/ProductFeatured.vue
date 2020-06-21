<template>
  <section class="product-featured">
    <CategoryHeader :category="{ name: 'Featured Products' }" />
    <BaseListGrid>
      <ProductItem v-for="(model, i) in products" :key="i" :product="model" />
    </BaseListGrid>
  </section>
</template>
<script>
import CategoryHeader from '@/components/category/CategoryHeader'
import BaseListGrid from '@/components/base/BaseListGrid'
import ProductItem from '@/components/product/ProductItem'
export default {
  components: {
    CategoryHeader,
    BaseListGrid,
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: false
    }
  }
}
</script>
