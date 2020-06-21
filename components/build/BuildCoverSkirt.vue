<template>
  <BuildAccordion title="Skirt Options *" is-open class="build-cover-dim mt-">
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          step="customize"
          label="label"
          is-multiple
          type="skirt-length"
          class="flex-1 mt-2"
        />
        <div v-if="skirtInfo" class="flex items-end">
          <BuildFormOption
            :request="infoRequest"
            step="customize"
            label="label"
            has-info
            is-multiple
            type="skirt-info"
            class="flex-1 mt-4"
            default="Upgraded Covered Hinge (Included)"
          />
          <BasePromoLabel class="mb-1" label="FREE SPECIAL UPGRADES" />
        </div>
      </div>
    </template>
    <p v-else>No skirt options available. Start by choosing a shape.</p>
  </BuildAccordion>
</template>

<script>
import BasePromoLabel from '@/components/base/BasePromoLabel'
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildFormOption from '@/components/build/BuildFormOption'

export default {
  components: {
    BasePromoLabel,
    BuildAccordion,
    BuildFormOption
  },
  computed: {
    skirtInfo() {
      return this.$store.getters['builder/retrieveProductOption']('skirt-info')
    },
    currentShape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    hasSelectedShape() {
      return this.currentShape && !!this.currentShape.id
    },
    infoRequest() {
      return {
        title: 'Skirt Length',
        image: 'cov-meas-skrt.gif',
        content:
          "Hot Tub Covers Canada can custom make your hot tub cover with no skirt, or with a skirt up to any length starting from 1.5 inches and up.<br /><br />If unsure about the length, use your old hot tub cover's skirt length as a guide."
      }
    }
  }
}
</script>
