<template>
  <section
    class="container bg-blue-100 md:rounded-large md:my-12 p-6 text-center"
  >
    <h2 class="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
      SPRING SPECIALS ON NOW!
    </h2>
    <section class="flex flex-col md:flex-row justify-center">
      <div
        v-for="(special, i) in specials"
        :key="i"
        :class="{ 'md:border-l md:border-r md:border-grey-300 ': isMid(i) }"
        class="my-5 px-5 md:px-12"
      >
        <div
          class="text-5xl text-green-500 uppercase font-extrabold leading-none"
        >
          FREE
        </div>
        <div class="text-md font-semibold leading-none my-1">
          {{ special.product }}
        </div>
        <div class="text-sm">Reg. ${{ special.reg_price }}</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data: () => ({
    specials: [
      {
        product: 'Covered Skirt',
        reg_price: 29.95
      },
      {
        product: '6mil Vapour Barrier Upgrade',
        reg_price: 34.95
      },
      {
        product: 'Shipping Insurance',
        reg_price: 39.95
      }
    ]
  }),
  methods: {
    isMid(index) {
      return index === 1
    }
  }
}
</script>

<style lang="scss" scoped></style>
