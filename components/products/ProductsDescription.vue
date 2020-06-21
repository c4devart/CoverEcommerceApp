<template>
  <section class="products-overview flex flex-col">
    <div class="text-2xl leading-none">
      <slot name="field" />
    </div>
    <div class="mt-4 text-base leading-normal text-grey-600">
      <slot name="content" />
    </div>
  </section>
</template>
<script>
export default {
  components: {}
}
</script>
