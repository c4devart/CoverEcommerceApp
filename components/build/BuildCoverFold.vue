<template>
  <BuildAccordion title="Cover Fold *" is-open class="build-cover-dim mt-">
    <template v-if="hasSelectedShape">
      <div class="flex flex-wrap w-full">
        <BuildCoverFoldItem
          v-for="fold in option.fields"
          :key="fold.id"
          :fold="fold"
          :shape="currentShape"
          :active="activeFold(fold.dir)"
          @selected="selectFold"
        />
      </div>
    </template>
    <p v-else>No cover fold available. Start by choosing a shape.</p>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildCoverFoldItem from '@/components/build/BuildCoverFoldItem'

export default {
  components: {
    BuildAccordion,
    BuildCoverFoldItem
  },
  data: () => ({
    option: {
      type: '',
      title: '',
      description: '',
      is_required: 0,
      price: '',
      max_value: '',
      order: '',
      fields: [
        {
          id: 1,
          label: 'Fold A',
          dir: 'a',
          image: 'fold/fold-a.png'
        },
        {
          id: 2,
          label: 'Fold B',
          dir: 'b',
          image: 'fold/fold-b.png'
        }
      ]
    }
  }),
  computed: {
    currentShape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    hasSelectedShape() {
      return this.currentShape && !!this.currentShape.id
    }
  },
  methods: {
    activeFold(dir) {
      return this.$store.getters['builder/isActiveFold'](dir)
    },
    selectFold(option) {
      this.isOpen = false
      this.$store.commit('builder/setFold', option.dir)
    }
  }
}
</script>

<style lang="scss" scoped></style>
