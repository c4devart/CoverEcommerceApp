<template>
  <section class="build-customize build">
    <BuildCoverDimensions v-if="hasOption('shape')" />
    <BuildCoverFold v-if="hasOption('shape')" />
    <BuildCoverSkirt v-if="hasOptionAmong(['skirt-info', 'skirt-length'])" />
    <BuildCoverStrap
      v-if="hasOptionAmong(['strap-options', 'strap-location', 'strap-length'])"
    />
    <BuildCoverHandle v-if="hasOption('handle-options')" />
    <BuildCoverCentreFlap v-if="hasOption('reinforcement-options')" />
    <template v-for="type in options">
      <BuildCoverOther v-if="isOther(type.slug)" :key="type.id" :type="type" />
    </template>
  </section>
</template>

<script>
import BuildCoverDimensions from '@/components/build/BuildCoverDimensions'
import BuildCoverFold from '@/components/build/BuildCoverFold'
import BuildCoverSkirt from '@/components/build/BuildCoverSkirt'
import BuildCoverStrap from '@/components/build/BuildCoverStrap'
import BuildCoverOther from '@/components/build/BuildCoverOther'
import BuildCoverHandle from '@/components/build/BuildCoverHandle'
import BuildCoverCentreFlap from '@/components/build/BuildCoverCentreFlap'

export default {
  components: {
    BuildCoverDimensions,
    BuildCoverFold,
    BuildCoverSkirt,
    BuildCoverStrap,
    BuildCoverOther,
    BuildCoverHandle,
    BuildCoverCentreFlap
  },
  computed: {
    options() {
      return this.$store.getters['builder/stepOptions']('customize')
    }
  },
  methods: {
    hasOption(type) {
      return this.$store.getters['builder/hasOption'](type)
    },
    hasOptionAmong(type) {
      return this.$store.getters['builder/hasOptionAmong'](type)
    },
    isOther(type) {
      return ![
        'skirt-info',
        'skirt-length',
        'strap-options',
        'strap-location',
        'strap-length',
        'handle-options',
        'reinforcement-options'
      ].includes(type)
    }
  }
}
</script>
