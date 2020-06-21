<template>
  <section class="product-section flex flex-col mb-8">
    <h2 v-if="title" class="text-2xl leading-none">
      {{ title }}
    </h2>
    <div
      class="text-base leading-normal text-grey-600 product-section__content"
    >
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.product-section__content {
  white-space: pre-line;
}
</style>
