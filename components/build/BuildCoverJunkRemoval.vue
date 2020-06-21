<template>
  <BuildAccordion title="Junk Removal *" class="build-junk" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <img src="/img/got-junk.png" style="max-width: 236px" />
        <div class="flex flex-col md:flex-row items-start w-full">
          <BuildFormOption
            :request="requestInfo"
            step="upgrades"
            label="label"
            has-info
            type="junk-removal"
            is-multiple
            class="flex-1 my-2 w-full md:w-auto"
            default="No"
          />
          <div class="build-junk__print">
            <BasePromoLabel label="Please read the fine print." type="info" />
          </div>
        </div>
      </div>
    </template>
    <p v-else>
      No options available. Start by choosing a shape.
    </p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BasePromoLabel from '@/components/base/BasePromoLabel'
import BuildFormOption from '@/components/build/BuildFormOption'

export default {
  components: {
    BasePromoLabel,
    BuildAccordion,
    BuildFormOption
  },
  computed: {
    requestInfo() {
      return {
        title: 'Hot Tub Cover Pickup Service',
        image: 'got-junk.jpeg',
        content:
          'We have partnered with 1-800-GOT-JUNK to offer a pick-up and disposal service for your old cover.<br /><br /><strong>Important: Please check <a class="text-blue-600">our list of postal codes</a> to verify that this service is available in your area. If you purchase this option and 800-Got-Junk is unavailable to service your area we will refund the price for pick-up.</strong><br /><br >Please call 1-800-Got-Junk to schedule the pickup of your old cover once your new replacement hot tub cover arrives.'
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

<style lang="scss" scoped>
.build-junk {
  &__print {
    @screen md {
      margin-top: -0.5rem;
    }
  }
}
</style>
