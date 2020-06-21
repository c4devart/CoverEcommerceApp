<template>
  <section class="home-reviews py-20 relative hidden md:block">
    <div class="container relative z-10">
      <h2 class="text-5xl text-white text-center font-semibold px-8">
        60,000 Satisfied Customer and Counting!
      </h2>
      <div
        class="home-reviews__reviews m-8 flex flex-col lg:flex-row space-between items-start px-8"
      >
        <BaseTestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getAllTestimonials } from '@/graphql/testimonial'
import BaseTestimonialCard from '@/components/base/BaseTestimonialCard'

export default {
  components: {
    BaseTestimonialCard
  },
  data: () => ({
    testimonials: []
  }),
  mounted() {
    this.getTestimonials()
  },
  methods: {
    async getTestimonials() {
      const { data } = await this.$apollo.query({
        query: getAllTestimonials,
        variables: {
          first: 3,
          page: 1,
          orderByClause: {
            field: 'id',
            order: 'DESC'
          },
          filterBy: {
            is_approved: true
          }
        },
        fetchPolicy: 'no-cache'
      })
      this.testimonials = data.testimonials.data
    }
  }
}
</script>

<style lang="scss" scoped>
.home-reviews {
  background: no-repeat url('/img/waterbg.jpg') center center / cover;
  &:before {
    content: '';
    @apply absolute inset-0 opacity-75;
    background: linear-gradient(to bottom, #008abd, #005380);
  }
}
</style>
