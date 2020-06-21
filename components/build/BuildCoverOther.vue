<template>
  <BuildAccordion :title="type.title" class="build-cover-dim" is-open>
    <template v-if="hasSelectedShape">
      <BuildFormOption
        :type="type.slug"
        :is-multiple="isMultiple(type)"
        :step="step"
        label="label"
        class="flex-1 my-2"
      />
    </template>
    <p v-else>Option not available. Start by choosing a shape.</p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildFormOption from '@/components/build/BuildFormOption'

export default {
  components: {
    BuildAccordion,
    BuildFormOption
  },
  props: {
    step: {
      type: String,
      default: 'customize'
    },
    type: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentShape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    hasSelectedShape() {
      return this.currentShape && !!this.currentShape.id
    }
  },
  methods: {
    isMultiple(type) {
      return type.type && type.type === 'multiple'
    }
  }
}
</script>
