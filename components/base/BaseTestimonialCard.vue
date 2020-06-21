<template>
  <div class="home-testimonial bg-white rounded shadow p-6 m-4 flex-1">
    <div class="flex">
      <svg
        v-for="(star, i) in testimonial.rating"
        :key="i"
        width="20px"
        height="19px"
        viewBox="0 0 20 19"
        xmlns="http://www.w3.org/2000/svg"
        class="mr-1"
      >
        <polygon
          fill="#ECC94B"
          points="10 0 6.90982784 6.26140703 0 7.26538735 5 12.1391819 3.81965569 19.021099 10 15.7718756 16.1804252 19.021099 15 12.1391819 20 7.26538735 13.0901722 6.26140703"
        />
      </svg>
    </div>
    <p class="home-testimonial__testimonial text-grey-600 my-4">
      “{{ testimonial.testimonial }}”
    </p>
    <div class="text-blue-900 font-bold pr-16">
      {{ testimonial.customer_name
      }}<template v-if="testimonial.city">, {{ testimonial.city }}</template
      ><template v-if="testimonial.province"
        >, {{ testimonial.province }}</template
      >
    </div>
    <div class="text-sm text-grey-500 leading-none">{{ dateAdded }}</div>
  </div>
</template>

<script>
import { getDate } from '@/utils/datetime'
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateAdded() {
      return getDate(this.testimonial.created_at)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-testimonial {
  &__testimonial {
    white-space: pre-line;
  }
}
</style>
