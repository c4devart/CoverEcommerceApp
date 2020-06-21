<template>
  <section
    class="p-4 lg:px-8 w-full md:w-1/2 lg:w-1/3 flex flex-col items-center pulse"
  >
    <div
      class="products-item text-center border rounded border border-white p-6 h-full flex flex-col"
    >
      <div class="flex flex-col items-center mb-4">
        <div class=" w-56 h-8 bg-grey-200"></div>
        <p class="w-56 h-4 bg-grey-200 mt-2"></p>
      </div>

      <div class="flex justify-center mt-auto">
        <div
          class="w-56 h-40"
          style="background: no-repeat url('/img/product-placeholder.png') center center / cover"
        />
      </div>
      <div class="flex justify-between mt-8 items-center">
        <div class="w-16 h-12 bg-grey-200"></div>
        <div class="h-12 rounded bg-grey-200 w-32" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
