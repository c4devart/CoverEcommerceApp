<template>
  <BuildAccordion title="Value Added Options" class="build-cover-dim" is-open>
    <template v-if="hasSelectedShape">
      <div class="flex flex-col flex-1">
        <BuildFormOption
          v-if="hasOption('gazebo-handles')"
          :request="gazeboRq"
          step="upgrades"
          label="label"
          has-info
          type="gazebo-handles"
          is-multiple
          class="flex-1 my-2"
        />
        <BuildFormOption
          v-if="hasOption('speaker-hoods')"
          step="upgrades"
          label="label"
          type="speaker-hoods"
          is-multiple
          class="flex-1 my-2"
        />
        <BuildFormOption
          v-if="hasOption('caldera-lifters')"
          :request="calderaRq"
          step="upgrades"
          label="label"
          has-info
          is-multiple
          type="caldera-lifters"
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
    gazeboRq() {
      return {
        title: 'Gazebo Handle Upgrade',
        image: 'gazebo.png',
        content:
          'Place the Handles Inside the Fold of your hot tub cover for added strength and visual appeal for only $29.95 (set of 2).<br /><br />This handle style for hot tub covers is also known as the Gazebo Handle (shown here).<br /><br />These handles are extra-durable and cross-stitched for added strength. Gazebo Handles are placed along the zipper portion of your replacement spa cover.'
      }
    },
    calderaRq() {
      return {
        title: 'Hot Springs/Caldera Lifter Plates',
        content:
          'Heat synced to foam inside cover behind plastic and vinyl. Allows for the lifter to connect to cover by being screwed into the side. Not available on the 3 inch thickness.'
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
