<template>
  <section
    class="p-4 lg:px-4 w-full md:w-1/2 lg:w-1/2 flex flex-col items-center "
  >
    <div
      class="custom-shape text-center custom-shape__weater-bg
    border rounded-md border border-white py-20 h-full w-full relative flex items-center justify-center"
    >
      <div class="relative z-10">
        <div class="text-blue-100 text-5xl font-semibold leading-none">
          Custom shape <br />
          or speakers?
        </div>
        <div class="mt-2 text-blue-100 text-2xl leading-normal">
          We've got you covered.
        </div>
        <nuxt-link
          to="/measurement-guide"
          class="btn btn--small btn--terciary mt-6"
        >
          Measure Your Cover
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>

<style scoped lang="scss">
.custom-shape {
  &__weater-bg {
    background: no-repeat url('/img/waterbg.jpg') center center / cover;
    &:before {
      content: '';
      @apply absolute inset-0 opacity-75 rounded;
      background: linear-gradient(to bottom, #008abd, #005380);
    }
  }
}
</style>
