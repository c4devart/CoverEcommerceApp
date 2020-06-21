<template>
  <section class="pb-20">
    <BaseHeaderLoadingPlaceholder v-if="loading" />
    <CategoryHeader v-else :category="category" />
    <ProductList :category="category" has-custom />
  </section>
</template>
<script>
import { getCategoryBySlug } from '@/graphql/category'
import BaseHeaderLoadingPlaceholder from '@/components/base/BaseHeaderLoadingPlaceholder'
import ProductList from '@/components/product/ProductList'
import CategoryHeader from '@/components/category/CategoryHeader'

const makeQuery = (variables) => {
  return {
    query: getCategoryBySlug,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  components: {
    BaseHeaderLoadingPlaceholder,
    ProductList,
    CategoryHeader
  },
  data: () => ({
    loading: true,
    category: {}
  }),
  head() {
    return {
      title: this.pageTitle
    }
  },
  computed: {
    pageTitle() {
      if (this.category.name) {
        return `${this.category.name} / HotTub Covers Canada`
      }
      return 'HotTub Covers Canada'
    }
  },
  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        slug: params.slug
      })
    )
    if (!data.categoryBySlug) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      category: data.categoryBySlug,
      loading: false
    }
  }
}
</script>
