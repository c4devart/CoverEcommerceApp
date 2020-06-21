<template>
  <BuildAccordion
    title="Extra Reinforced Centre Flap"
    class="build-cover-dim"
    is-open
  >
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          :request="request"
          step="customize"
          label="label"
          has-info
          type="reinforcement-options"
          is-multiple
          class="flex-1 my-2"
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
        title: 'Center Hinge Flap',
        image: 'center-flap.png',
        content:
          'Center hinge flap is reinforced for extra strength down the center of the hot tub cover.'
      }
    }
  },
  methods: {
    infoRequest() {}
  }
}
</script>
