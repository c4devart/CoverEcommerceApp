<template>
  <section class="home-models mt-12">
    <div class="flex justify-center">
      <p class="max-w-2xl text-center">
        Begin building your hot tub cover by selecting one of the styles below.
        You will be guided through the steps to build your replacement cover.
        Hot Tub Covers Canada makes custom fitted tub covers in any shape or
        size up to 96" across.
      </p>
    </div>
    <ProductList :category="category" has-custom />
  </section>
</template>

<script>
import { getCategoryBySlug } from '@/graphql/category'
import ProductList from '@/components/product/ProductList'

export default {
  components: {
    ProductList
  },
  data: () => ({
    loading: true,
    category: {}
  }),
  mounted() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      const { data } = await this.$apollo.query({
        query: getCategoryBySlug,
        variables: {
          slug: 'hot-tub-covers'
        },
        fetchPolicy: 'no-cache'
      })
      this.category = data.categoryBySlug
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
