<template>
  <BuildAccordion
    :is-open="isOpen"
    :title="`${option.title} *`"
    :description="option.description"
  >
    <BuildImageItem
      v-for="field in option.fields"
      :key="field.id"
      :option="field"
      :image="makeShapeImage(field.label)"
      :active="activeShape(field.id)"
      @selected="selectOption"
    />
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildImageItem from '@/components/build/BuildImageItem'

export default {
  components: {
    BuildAccordion,
    BuildImageItem
  },
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isOpen: true
  }),
  methods: {
    activeShape(id) {
      return this.$store.getters['builder/isActive']({
        slug: 'shape',
        id,
        isField: true
      })
    },
    makeShapeImage(label) {
      const img = label
        .split(' ')
        .join('-')
        .toLowerCase()
      return `shapes/${img}.svg`
    },
    selectOption(option) {
      this.$store.commit('builder/setShapeOption', {
        option,
        optionId: this.option.id
      })
    }
  }
}
</script>
