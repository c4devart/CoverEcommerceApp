<template>
  <BuildAccordion title="Special Instructions" class="build-cover-dim" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          step="upgrades"
          label="label"
          type="instructions"
          is-textarea
          class="flex-1 mt-2"
        />
      </div>
    </template>
    <p v-else>Option note available. Start by choosing a shape.</p>
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
    // FormLoadingPlaceholder,
  },
  computed: {
    currentShape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    hasSelectedShape() {
      return this.currentShape && !!this.currentShape.id
    }
  }
}
</script>
