<template>
  <BuildAccordion title="Strap Options *" class="build-cover-dim" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          v-if="hasOption('strap-options')"
          :request="strapOptionsRq"
          default="4 Straps - Included"
          step="customize"
          label="label"
          has-info
          type="strap-options"
          is-multiple
          class="flex-1 my-2"
        />
        <div class="flex flex-col md:flex-row">
          <BuildFormOption
            v-if="hasOption('strap-length')"
            :request="strapLengthRq"
            step="customize"
            label="label"
            has-info
            type="strap-length"
            is-multiple
            class="flex-1 my-2 md:mr-3"
          />
          <BuildFormOption
            v-if="hasOption('strap-location')"
            :request="strapLocationRq"
            step="customize"
            label="label"
            has-info
            type="strap-location"
            class="flex-1 my-2 md:ml-3"
          />
        </div>
      </div>
    </template>
    <p v-else>No strap options available. Start by choosing a shape.</p>
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
    strapLengthRq() {
      return {
        title: 'Strap Length',
        image: 'strap-length.jpg',
        content:
          'The length of the strap is measured from the underside of the hot tub cover, including the skirt, to the bottom tip of the plastic clip. Enter a strap length of 4 inches or more (available in .5 inch increments up to 20 inches). The standard length is 7 inches.'
      }
    },
    strapLocationRq() {
      return {
        title: 'Strap Location',
        image: 'strap-location.jpg',
        content:
          'Enter the number of inches measured from the center of your hot tub to the center of where the straps are to be placed.'
      }
    },
    strapOptionsRq() {
      return {
        title: 'Strap Options',
        image: 'strap-options.jpg',
        content:
          'Every hot tub cover sold includes 4 tie-down straps along with 4 male-female locks with key for added safety and security, including a set of stainless steel mounting hardware.<br /><br />You can add more straps to your order, or if looking for added protection consider upgrading your order to include Hurricane Straps (found in Accessories section). These are reinforced straps with extra layers of vinyl and made to custom length that fastens from one side to the another over your cover.'
      }
    }
  },
  methods: {
    hasOption(type) {
      return this.$store.getters['builder/hasOption'](type)
    }
  }
}
</script>
