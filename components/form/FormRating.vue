<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="required"
    name="rating"
    tag="div"
  >
    <div class="form-rating">
      <div class="flex items-center justify-between mb-1">
        <label
          class="text-sm  flex-1 text-blue-800 font-semibold block flex justify-between items-center"
        >
          <span class="font-semibold">
            Rating
            <span class="required">*</span>
          </span>
        </label>
      </div>
      <input :value="value" type="hidden" />
      <div class="form-rating__select inline-flex cursor-pointer">
        <span v-for="star in starsNb" :key="star" @click="rateStar(star)">
          <svg
            data-v-539d371b=""
            width="24px"
            height="24px"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1"
          >
            <polygon
              :fill="starColor(star)"
              data-v-539d371b=""
              points="10 0 6.90982784 6.26140703 0 7.26538735 5 12.1391819 3.81965569 19.021099 10 15.7718756 16.1804252 19.021099 15 12.1391819 20 7.26538735 13.0901722 6.26140703"
            ></polygon>
          </svg>
        </span>
      </div>

      <span v-if="errors.length" class="error__message">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'

export default {
  components: {
    ValidationProvider
  },
  props: {
    value: [String, Number],
    starsNb: {
      type: Number,
      default: 5
    }
  },
  computed: {
    starred() {
      return this.value
    },
    unstarred() {
      return 5 - this.value
    }
  },
  methods: {
    rateStar(rating) {
      this.$emit('input', rating)
    },
    starColor(star) {
      return this.value >= star ? '#ECC94B' : '#cbd5e0'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-rating {
  &__select {
    transition: opacity 0.3s;
    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
