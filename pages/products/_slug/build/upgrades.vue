<template>
  <section class="build-upgrades build">
    <BuildEnergySavingCombos
      v-if="
        hasOption('vapour-barrier') &&
          hasOption('chemical-shield') &&
          hasOption('hinge-seal') &&
          hasOption('energy-savings')
      "
    />
    <template v-for="type in options">
      <BuildCoverOther
        v-if="isOther(type.slug)"
        :key="type.id"
        :type="type"
        step="upgrades"
      />
    </template>
    <BuildCoverDualChannel v-if="hasOption('dual-c-channel')" />
    <BuildCoverRushProduction v-if="hasOption('product-time')" />
    <BuildCoverValueAdded
      v-if="
        hasOptionAmong(['gazebo-handles', 'speaker-hoods', 'caldera-lifters'])
      "
    />
    <BuildCoverJunkRemoval v-if="hasOption('junk-removal')" />
    <BuildCoverInstructions v-if="hasOption('instructions')" />
  </section>
</template>

<script>
import BuildEnergySavingCombos from '@/components/build/BuildEnergySavingCombos'
import BuildCoverRushProduction from '@/components/build/BuildCoverRushProduction'
import BuildCoverJunkRemoval from '@/components/build/BuildCoverJunkRemoval'
import BuildCoverDualChannel from '@/components/build/BuildCoverDualChannel'
import BuildCoverOther from '@/components/build/BuildCoverOther'
import BuildCoverInstructions from '@/components/build/BuildCoverInstructions'
import BuildCoverValueAdded from '@/components/build/BuildCoverValueAdded'

export default {
  components: {
    BuildEnergySavingCombos,
    BuildCoverRushProduction,
    BuildCoverJunkRemoval,
    BuildCoverDualChannel,
    BuildCoverOther,
    BuildCoverInstructions,
    BuildCoverValueAdded
  },
  computed: {
    options() {
      return this.$store.getters['builder/stepOptions']('upgrades')
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
        'energy-savings',
        'gazebo-handles',
        'speaker-hoods',
        'caldera-lifters',
        'product-time',
        'junk-removal',
        'dual-c-channel'
      ].includes(type)
    }
  }
}
</script>
