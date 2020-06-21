<template>
  <section class="home-brand container py-4 md:py-16">
    <h2 class="text-4xl text-center font-bold text-blue-900 leading-none mb-4">
      Made for your brand.
    </h2>
    <p class="text-center text-blue-900">
      Don’t see your brand? No problem. We make covers to fit any hot tub.
    </p>
    <div class="home-brand__brands my-8 sm:my-12 flex flex-wrap justify-center">
      <div
        v-for="(brand, i) in brands"
        :key="i"
        class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex items-center justify-center p-4 h-24 my-3"
      >
        <img
          :src="`/img/brands/${brand}`"
          alt="brand logo"
          class="h-auto w-32"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    brands: [
      'apollospas.jpg',
      'arcticspas.png',
      'beachcomber.png',
      'bluewaterspas.png',
      'bullfrogspas.png',
      'calspas.png',
      'coastspas.png',
      'canspa.png',
      'catalinaspas.png',
      'coleman.png',
      'dreammakerspas.png',
      'dynastyspas.png',
      'gulfcoastspas.jpg',
      'hotspringportalspas.png',
      'hydropool.png',
      'jacuzzi_new.png',
      'pacificspas.png',
      'royalspa.png',
      'sundancespas.png',
      'sunrisespas.png',
      'vikingspas.png'
    ]
  })
}
</script>

<style lang="scss" scoped></style>
