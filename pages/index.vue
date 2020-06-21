<template>
  <div>
    <HomeHero />
    <HomeBuildCover />
    <HomeSpecials />
    <HomeModels />
    <HomeWhyUs />
    <HomeMadeForBrand />
    <HomeMadeForCanada />
    <HomeTestimonials />
  </div>
</template>

<script>
import HomeHero from '@/components/home/HomeHero'
import HomeBuildCover from '@/components/home/HomeBuildCover'
import HomeSpecials from '@/components/home/HomeSpecials'
import HomeModels from '@/components/home/HomeModels'
import HomeWhyUs from '@/components/home/HomeWhyUs'
import HomeMadeForBrand from '@/components/home/HomeMadeForBrand'
import HomeMadeForCanada from '@/components/home/HomeMadeForCanada'
import HomeTestimonials from '@/components/home/HomeTestimonials'

export default {
  components: {
    HomeHero,
    HomeBuildCover,
    HomeSpecials,
    HomeModels,
    HomeWhyUs,
    HomeMadeForBrand,
    HomeMadeForCanada,
    HomeTestimonials
  },
  created() {
    // this.$router.push('/account')
  }
}
</script>
