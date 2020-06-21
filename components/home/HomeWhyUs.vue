<template>
  <section class="home-why-us container flex flex-col md:flex-row">
    <HomeWhyUsCard is-warranty />
    <HomeWhyUsCard />
  </section>
</template>

<script>
import HomeWhyUsCard from '@/components/home/HomeWhyUsCard'

export default {
  components: {
    HomeWhyUsCard
  }
}
</script>

<style lang="scss">
.home-why-us {
  margin: 0 auto;
}
@screen md {
  .home-why-us-card {
    &:first-child {
      margin-right: 15px;
    }
    &:last-child {
      margin-left: 15px;
    }
  }
}
</style>
