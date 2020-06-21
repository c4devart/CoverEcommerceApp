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
      :active="activeColor(field.id)"
      :image="makeImage(field.label)"
      @selected="selectColor"
      is-colour
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
    activeColor(id) {
      return this.$store.getters['builder/isActive']({
        slug: 'colours',
        id,
        isField: true
      })
    },
    makeImage(label) {
      const img = label
        .split(' ')
        .join('-')
        .toLowerCase()
      return `colors/${img}.jpg`
    },
    selectColor(option) {
      option
        ? this.$store.commit('builder/setOption', {
            type: 'colours',
            optionId: this.option.id,
            option,
            title: 'Colour'
          })
        : this.$store.commit('builder/unsetOption', 'colours')
    }
  }
}
</script>
