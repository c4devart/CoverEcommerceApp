<template>
  <nuxt-link
    :class="{ 'base-tabs-item__disabled': disabled }"
    :to="to"
    class="base-tabs-item pb-3  uppercase text-center flex flex-col md:flex-row items-center justify-center"
  >
    <span v-if="step" class="text-blue-600 mr-1">{{ step }}</span>
    <span class="text-sm md:text-base">{{ label }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: true
    },
    disabled: Boolean,
    step: String,
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tabs-item {
  flex: 1;
  border-bottom: 3px solid;
  @apply border-grey-200;
  &.nuxt-link-active,
  &:hover {
    @apply text-blue-900;
    border-bottom: 3px solid;
    @apply border-blue-500;
  }
  &__disabled {
    opacity: 0.5;
    display: inline-block; /* For IE11/ MS Edge bug */
    pointer-events: none;
  }
}
</style>
