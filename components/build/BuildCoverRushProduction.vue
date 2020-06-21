<template>
  <BuildAccordion title="Production Time *" class="build-cover-dim mt-" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col md:flex-row md:items-end flex-1">
        <BuildFormOption
          :request="requestInfo"
          step="upgrades"
          label="label"
          has-info
          type="product-time"
          is-multiple
          class="flex-1 my-2"
          default="Standard - 2-4 weeks"
        />
        <div class="md:my-3">
          <BasePromoLabel sublabel="5 days" label="MEGA RUSH" type="rush" />
        </div>
      </div>
    </template>
    <p v-else>
      No production time options available. Start by choosing a shape.
    </p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildFormOption from '@/components/build/BuildFormOption'
import BasePromoLabel from '@/components/base/BasePromoLabel'

export default {
  components: {
    BasePromoLabel,
    BuildFormOption,
    BuildAccordion
  },
  computed: {
    requestInfo() {
      return {
        title: 'Rush Production Options',
        content:
          'When you need a replacement hot tub cover \'yesterday\', add the MEGA Rush Production option to your order for $89.95. Your cover will ship within 5 business days of placing your order, <a class="text-blue-600">plus delivery time to your province from Ontario (approx 1-3 days)</a>.<br /><br />Or add Rush Production to your order for only $34.95. Guaranteed shipment of your new cover within 10-15 business days of placing your order.<br /><br />Please note that Rush & MEGA Rush Production are limited offerings and will sometimes be unavailable due to seasonal demand. Covers with speakers, cut-outs and oversized dimensions are not eligible for this service. For more information, please contact us at <a class="text-blue-600" href="mailto:info@hottubcoverscanada.ca">info@hottubcoverscanada.ca</a>.'
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
