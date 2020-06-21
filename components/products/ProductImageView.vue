<template>
  <section class="product-image-view">
    <div class="flex justify-center">
      <div class="w-56">
        <img :src="featured" :alt="product.title" />
      </div>
    </div>
    <div v-if="thumbnails.length" class="flex mt-5 flex-wrap">
      <ProductThumbnail
        v-for="(thumbnail, i) in thumbnails"
        :key="i"
        :active="isCurrentlyFeatured(thumbnail.public_url)"
        :url="thumbnail.public_url"
        @selected="setFeatured"
        class="mr-3 mb-2"
      />
    </div>
  </section>
</template>
<script>
import ProductThumbnail from '@/components/product/ProductThumbnail'

export default {
  components: {
    ProductThumbnail
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    featured: '/img/product-placeholder.png',
    thumbnails: []
  }),
  mounted() {
    this.setImages()
  },
  methods: {
    isCurrentlyFeatured(thumbnail) {
      return thumbnail === this.featured
    },
    setImages() {
      if (this.product.images.length) {
        this.featured = this.product.images[0].public_url
        this.thumbnails = this.product.images
      }
    },
    setFeatured(src) {
      this.featured = src
    }
  }
}
</script>
<style scoped lang="scss">
.product-image-view {
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
