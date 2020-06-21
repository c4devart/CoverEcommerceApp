<template>
  <BuildAccordion title="Dimensions *" is-open class="build-cover-dim">
    <template v-if="dimensions">
      <div>
        <div class="flex flex-wrap build-cover-dim__inner">
          <div
            v-for="(dim, i) in dimensionsKeys"
            :key="i"
            :class="gridSize"
            class="flex px-2"
          >
            <FormItem
              v-model="dimensions[dim]"
              :label="dimensionLabel(dim)"
              placeholder="inches"
              class="mb-2"
              required
              max="96"
              type="number"
            />
          </div>
        </div>
        <p class="text-grey-600 text-sm">
          We can build covers to a maximum of 100" in a 2 piece cover, however
          extra charges will apply for covers over 96". Please call us for
          additional details.
        </p>
        <nuxt-link
          target="_blank"
          rel="noreferrer nofollow"
          to="/measurement-guide"
          class="btn btn--terciary btn-small mt-3"
        >
          View Measurement Guide
        </nuxt-link>
      </div>
    </template>
    <p v-else>No dimension available.</p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import FormItem from '@/components/form/FormItem'

export default {
  components: {
    BuildAccordion,
    FormItem
  },
  data() {
    return {
      dimensions: null
    }
  },
  computed: {
    gridSize() {
      const dimNb = this.dimensionsKeys.length
      if (dimNb === 3) {
        return 'w-1/2 sm:w-1/3'
      }
      if (dimNb === 2) {
        return 'w-1/2'
      }
      if (dimNb === 1) {
        return 'w-full'
      }
      return 'w-1/2 sm:w-1/3 lg:w-1/4'
    },
    dimensionsKeys() {
      if (this.shapeDimensions) {
        return Object.keys(this.shapeDimensions)
      }
      return []
    },
    shapeDimensions() {
      return this.$store.getters['builder/shapeDimensions']
    }
  },
  watch: {
    dimensions: {
      handler(value) {
        if (value) {
          this.$store.commit('builder/setDimensions', { ...value })
        }
      },
      deep: true
    }
  },
  created() {
    if (this.shapeDimensions) {
      this.dimensions = { ...this.shapeDimensions }
    }
  },
  methods: {
    dimensionLabel(dim) {
      return `Dimension ${dim.toUpperCase()}:`
    }
  }
}
</script>

<style lang="scss" scoped>
.build-cover-dim__inner {
  margin: 0 -0.5rem;
}
</style>
