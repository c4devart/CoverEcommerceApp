<template>
  <BuildAccordion title="Handle Options *" class="build-cover-dim" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          :request="requestInfo"
          step="customize"
          label="label"
          has-info
          type="handle-options"
          is-multiple
          class="flex-1 my-2"
          default="4 Handles"
        />
      </div>
    </template>
    <p v-else>
      No options available. Start by choosing a shape.
    </p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildFormOption from '@/components/build/BuildFormOption'
// import FormLoadingPlaceholder from '@/components/form/FormLoadingPlaceholder'

export default {
  components: {
    BuildAccordion,
    BuildFormOption
  },
  computed: {
    requestInfo() {
      return {
        title: 'Handle Options',
        content:
          'For all replacement hot tub covers we include 4 handles & 4 straps.<br /><br />Upgrade your order to include 6 Handles for $19.95.'
      }
    },
    currentShape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    hasSelectedShape() {
      return this.currentShape && !!this.currentShape.id
    }
  }
}
</script>
