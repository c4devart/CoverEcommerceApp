<template>
  <section class="products products-single lg:pb-24">
    <ProductContainer :product="product" />
    <ProductFeatured
      v-if="hasFeaturedProducts"
      :products="product.featured"
      class="mt-24"
    />
  </section>
</template>
<script>
import { getProductByPermalink } from '@/graphql/product'
import ProductContainer from '@/components/product/ProductContainer'
import ProductFeatured from '@/components/product/ProductFeatured'

const makeQuery = (variables) => {
  return {
    query: getProductByPermalink,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  components: {
    ProductContainer,
    ProductFeatured
  },
  computed: {
    hasFeaturedProducts() {
      return this.product.featured && this.product.featured.length
    }
  },
  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        permalink: params.slug
      })
    )
    if (
      !data.productByPermalink ||
      data.productByPermalink.is_special_order === 1 ||
      data.productByPermalink.status !== 'online'
    ) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      product: data.productByPermalink
    }
  }
}
</script>
