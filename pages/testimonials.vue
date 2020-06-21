<template>
  <section
    v-infinite-scroll="loadMore"
    :infinite-scroll-distance="120"
    :infinite-scroll-throttle-delay="1000"
    infinite-scroll-immediate-check="false"
    class="reviews-container max-w-4xl m-auto"
  >
    <BasePageColumns title="Testimonials" type="general">
      <template v-slot:main>
        <p class="text-center">
          60,000 Satisfied Customer and Counting!
          <a
            @click.prevent="showReviewModal = true"
            href=""
            class="text-blue-500"
            >Add a review</a
          >
          or
          <a
            href="https://www.ebay.ca/fdbk/feedback_profile/hot_tub_supplies?filter=feedback_page:All"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500"
            >View our reviews on eBay.</a
          >
        </p>
        <div
          class="reviews-container__reviews my-8 flex flex-wrap flex-col lg:flex-row space-between items-start px-8"
        >
          <div v-if="loading" class="w-full">
            <TestimonialsLoadingPlaceholder v-for="nb in 4" :key="nb" />
          </div>
          <template v-else>
            <template v-if="testimonials.length">
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="w-full "
              >
                <BaseTestimonialCard :testimonial="testimonial" />
              </div>
            </template>
            <div v-else class="flex text-center justify-center my-20 w-full">
              <p class="text-grey-500">
                No testimonial available yet.
              </p>
            </div>
          </template>
        </div>

        <TestimonialAddModal
          v-if="showReviewModal"
          :active="showReviewModal"
          @cancel="showReviewModal = false"
        />
      </template>
    </BasePageColumns>
  </section>
</template>
<script>
import { getAllTestimonials } from '@/graphql/testimonial'
import BasePageColumns from '@/components/base/BasePageColumns'
import BaseTestimonialCard from '@/components/base/BaseTestimonialCard'
import TestimonialAddModal from '@/components/testimonials/TestimonialAddModal'
import TestimonialsLoadingPlaceholder from '@/components/testimonials/TestimonialsLoadingPlaceholder'

export default {
  components: {
    BasePageColumns,
    BaseTestimonialCard,
    TestimonialAddModal,
    TestimonialsLoadingPlaceholder
  },
  head() {
    return {
      title: 'Testimonials / HotTub Covers Canada'
    }
  },
  data: () => ({
    showReviewModal: false,
    loading: false,
    testimonials: [],
    page: 1,
    first: 20,
    isLastPage: false
  }),
  mounted() {
    this.getTestimonials()
  },
  methods: {
    async getTestimonials(isMore = false) {
      try {
        if (!isMore) {
          this.loading = true
        }
        const { data } = await this.$apollo.query({
          query: getAllTestimonials,
          variables: {
            first: this.first,
            page: this.page,
            filterBy: {
              is_approved: true
            }
          },
          fetchPolicy: 'no-cache'
        })
        if (data.testimonials.data.length) {
          this.testimonials = isMore
            ? this.testimonials.concat(data.testimonials.data)
            : data.testimonials.data
        } else {
          this.isLastPage = true
        }
        if (!isMore) {
          this.loading = false
        }
      } catch (err) {
        console.error(err)
      }
    },
    loadMore() {
      if (!this.isLastPage) {
        this.page = this.page + 1
        this.getTestimonials(true)
      }
    }
  }
}
</script>
