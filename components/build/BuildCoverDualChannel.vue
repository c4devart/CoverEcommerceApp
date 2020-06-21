<template>
  <BuildAccordion
    title="Dual C Channel Option *"
    class="build-cover-dim"
    is-open
  >
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          :request="request"
          step="upgrades"
          label="label"
          has-info
          type="dual-c-channel"
          is-multiple
          class="flex-1 my-2"
          default="No"
        />
      </div>
    </template>
    <p v-else>Option not available. Start by choosing a shape.</p>
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
    },
    request() {
      return {
        title: 'Dual Aluminum C-Channel',
        image: 'double-channel.png',
        content:
          'Strengthen your cover by doubling the center support structure with a second c-channel running down the middle of your hot tub cover.<br /><br />Made with aluminum so it remains rust-free.<br /><br />Only $39.95'
      }
    }
  }
}
</script>
