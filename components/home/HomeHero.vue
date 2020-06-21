<template>
  <section class="home-hero overflow-hidden">
    <section
      class="container py-12 md:pt-26 md:mt-4 md:pb-64 md:mb-16 relative z-10 md:text-left text-center"
    >
      <PageTitle type="h1">Hot Tub Covers<br />Made For Canada </PageTitle>
      <p class="mt-2 mb-4">The perfect fit for virtually any make or model.</p>
      <nuxt-link
        to="/categories/hot-tub-covers"
        class="home-hero__build btn btn--hero"
      >
        <span>Build Your Hot Tub Cover</span>
      </nuxt-link>
    </section>
    <section class="container relative">
      <img
        class="home-hero__hottub md:absolute bottom-0 w-full"
        src="/img/hero-hottub.png"
        alt="HotTub"
      />
    </section>
  </section>
</template>

<script>
import PageTitle from '@/components/page/PageTitle'

export default {
  components: {
    PageTitle
  }
}
</script>

<style lang="scss" scoped>
.home-hero {
  background: no-repeat url('/img/hero-bg.jpg') center center / cover;
  &__hottub {
    max-width: 720px;
    right: -6rem;
  }
  // &__build {
  //   position: relative;
  //   padding-right: 70px;
  //   height: 56px;
  //   &:before {
  //     content: '';
  //     width: 56px;
  //     height: 56px;
  //     @apply bg-red-500 absolute right-0 rounded-r-large;
  //   }
  // }
}
</style>
