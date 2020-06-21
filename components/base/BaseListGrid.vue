<template>
  <section class="home-models container mt-12">
    <div class="base-grid flex flex-wrap content-start mt-6">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    category: Object
  }
}
</script>

<style lang="scss" scoped>
.base-grid {
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
