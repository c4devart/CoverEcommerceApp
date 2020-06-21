<template>
  <section class="build-shape build">
    <!-- eslint-disable-next-line -->
    <component
      v-for="option in options"
      :key="option.id"
      :option="option"
      v-bind:is="componentType(option.slug)"
    />
  </section>
</template>

<script>
import BuildCoverMakeModel from '@/components/build/BuildCoverMakeModel'
import BuildCoverColour from '@/components/build/BuildCoverColour'
import BuildCoverShape from '@/components/build/BuildCoverShape'

export default {
  name: 'BuildShape',
  components: {
    /* eslint-disable */
    BuildCoverMakeModel,
    BuildCoverColour,
    BuildCoverShape
    /* eslint-enable */
  },
  computed: {
    options() {
      return this.$store.getters['builder/stepOptions']('shape')
    }
  },
  methods: {
    componentType(type) {
      if (type === 'shape') {
        return 'BuildCoverShape'
      }
      if (type === 'colours') {
        return 'BuildCoverColour'
      }
      return 'BuildCoverMakeModel'
    }
  }
}
</script>
