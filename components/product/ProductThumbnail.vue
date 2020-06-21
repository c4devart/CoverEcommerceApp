<template>
  <a
    @click.prevent="$emit('selected', url)"
    :class="active ? 'border-blue-500' : 'border-grey-300'"
    href=""
    class="rounded-md border-solid border border-grey-300 hover:border-blue-500
              flex items-center justify-center product-thumbnail__product-outline"
  >
    <img
      :src="url"
      alt="product image"
      class="product-thumbnail__product-img"
    />
  </a>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    active: Boolean
  }
}
</script>
<style lang="scss" scoped>
.product-thumbnail {
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
