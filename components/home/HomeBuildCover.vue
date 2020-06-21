<template>
  <section class="home-build-cover relative bg-blue-300 pt-8 lg:pt-40">
    <div class="container relative">
      <section
        class="absolute left-0 right-0 px-8 home-build-cover__inner hidden lg:flex"
      >
        <section class="home-build-cover__item home-build-cover__item--lifters">
          <div class="relative">
            <h3>Hot Tub Cover Lifters</h3>
            <p>
              Lift your hot tub cover with ease using our adjustable hot tub
              cover lifters.
            </p>
            <nuxt-link to="/categories/hot-tub-cover-lifters">
              Shop Cover Lifters
            </nuxt-link>
          </div>
        </section>
        <section
          class="home-build-cover__item home-build-cover__item--accessories md:mx-6"
        >
          <div class="relative">
            <h3>Hot Tub Cover Accessories</h3>
            <p>
              Accessories to protect and enjoy your hot tub for years to come.
            </p>
            <nuxt-link to="/categories/accessories">
              Shop Accessories
            </nuxt-link>
          </div>
        </section>
        <section
          class="home-build-cover__item home-build-cover__item--generators"
        >
          <div class="relative">
            <h3>Saltwater Chlorine Generators</h3>
            <p>
              Convert any hot tub into a saltwater spa. No chemicals required.
            </p>
            <nuxt-link to="/categories/saltwater-chlorine-generators">
              Shop Generators
            </nuxt-link>
          </div>
        </section>
      </section>
      <section class="text-center py-8 md:pb-10 md:px-20">
        <h2 class="text-white font-bold text-5xl leading-none">
          Build Your Cover
        </h2>
        <p class="text-white text-2xl font-bold">In three easy steps:</p>
        <div class="home-build-cover__steps flex justify-between my-8 relative">
          <HomeBuildCoverStep :nb="1" step="Select your model" />
          <HomeBuildCoverStep :nb="2" step="Customize your options" />
          <HomeBuildCoverStep :nb="3" step="Free delivery to your door" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import HomeBuildCoverStep from '@/components/home/HomeBuildCoverStep'

export default {
  components: {
    HomeBuildCoverStep
  }
}
</script>

<style lang="scss" scoped>
.home-build-cover {
  background: no-repeat url('/img/waterbg.jpg') center center / cover;
  &:before {
    content: '';
    @apply absolute inset-0 opacity-75;
    background: linear-gradient(to bottom, #008abd, #005380);
  }
  &__inner {
    top: -16rem;
  }
  &__steps {
    &:before {
      height: 1px;
      content: '';
      left: 80px;
      right: 80px;
      @screen sm {
        left: 120px;
        right: 120px;
      }
      top: 20px;
      z-index: 0;
      @apply bg-blue-700 absolute;
    }
  }
  .cover-step {
    position: relative;
    z-index: 1;
    &__nb {
      width: 40px;
      height: 40px;
      @apply rounded-full text-2xl text-white bg-blue-900;
    }
    &__details {
    }
  }
  &__item {
    @apply bg-blue-900 p-6 rounded text-white flex-1;
    h3 {
      @apply text-2xl font-bold leading-none;
    }
    h3,
    p {
      max-width: 216px;
    }
    p {
      @apply leading-tight my-2;
    }
    a {
      @apply bg-white text-blue-700 rounded border border-blue-500 text-sm font-semibold py-2 px-4 inline-flex mt-1;
      &:hover {
        @apply bg-blue-500 text-white;
      }
    }
    &--lifters,
    &--accessories,
    &--generators {
      @apply relative;
      &:before {
        content: '';
        @apply absolute w-32 h-32 right-0 bottom-0 z-0;
      }
    }
    &--lifters:before {
      background: no-repeat url('/img/lifters.png') center center / cover;
    }
    &--accessories:before {
      background: no-repeat url('/img/covercap.png') center center / cover;
    }
    &--generators:before {
      background: no-repeat url('/img/smaterspa.png') center center / cover;
    }
  }
}
</style>
