<template>
  <div
    class="home-why-us-card bg-gradient rounded-md pt-2 pb-8 sm:py-2 px-3 sm:px-5 flex flex-1 items-center text-white my-2 md:mb-0 md:mt-6 flex-col sm:flex-row"
  >
    <div class="home-why-us-card__icon w-32 h-32 mr-4">
      <img
        v-if="isWarranty"
        src="/img/7year-warranty.png"
        alt="7 years warranty"
      />
      <img v-else src="/img/measuring-tape.png" alt="Made to Mesure Tape" />
    </div>
    <div class="home-why-us-card__info text-center sm:text-left">
      <h3 class="text-3xl leading-none font-semibold">{{ title }}</h3>
      <p class="text-lg">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isWarranty: Boolean
  },
  computed: {
    title() {
      return this.isWarranty ? '7-Year Pro-Rated Warranty' : 'Made to Measure'
    },
    subtitle() {
      return this.isWarranty
        ? 'We stand by our products.'
        : 'For the perfect fit every time. '
    }
  }
}
</script>
