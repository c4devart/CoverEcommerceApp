<template>
  <div>
    <nuxt-link v-if="link" :to="link" :class="type" class="btn">
      {{ label }}
    </nuxt-link>
    <button v-else :class="type" class="btn">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: [String, Object],
    label: {
      type: String,
      default: 'Send'
    },
    type: {
      type: String,
      default: 'primary'
    },
    loading: Boolean
  }
}
</script>

<style lang="scss" scoped>
.btn {
  height: 56px;
  min-width: 100px;
  @apply flex items-center justify-center;
  &.primary {
    @apply bg-blue-500 w-full rounded px-6 text-white;
    &:hover {
      @apply bg-blue-600;
    }
  }
  &.secondary {
    height: 42px;
    @apply border leading-none px-4 border-blue-500 rounded text-sm text-blue-500 bg-white;
    &:hover {
      @apply border-blue-600 text-blue-600;
    }
  }
  &.cancel {
    @apply px-8 text-grey-600;
  }
  &.terciary {
    @apply border border-blue-300 rounded px-3 text-blue-500 bg-blue-100 text-sm;
    height: 36px;
    min-width: 80px;
    &:hover {
      @apply bg-blue-200;
    }
  }
  &.delete {
    @apply rounded bg-red-500 text-sm text-white px-4;
    height: 42px;
  }
  &:focus {
    outline: none;
  }
  &.btn--small {
    @apply text-sm px-3;
    height: 42px;
  }
  &.btn--medium {
    @apply text-sm px-3;
    height: 56px;
  }
  &.btn--square {
    @apply rounded;
  }
}
</style>
