<template>
  <div
    :class="`promo-label--${type}`"
    class="promo-label rounded text-center flex items-center justify-center md:ml-4 text-white font-semibold py-2 px-4 relative w-full md:w-auto"
  >
    <span v-if="sublabel" class="text-sm mr-2 font-thin">{{ sublabel }}</span>
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    sublabel: String,
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    }
  }
}
</script>

<style lang="scss" scoped>
.promo-label {
  min-height: 54px;
  max-width: 230px;
  &.promo-label--success {
    @apply bg-green-500;
  }
  &.promo-label--rush {
    background: linear-gradient(to left, #f0a443, #e62f46);
    &.promo-label:after {
      border-right-color: #e62f46;
    }
  }
  &.promo-label--info {
    @apply bg-blue-500;
    &.promo-label:after {
      border-right-color: #00b3ef;
    }
  }
  &:after {
    @screen md {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-right-color: #48bb78;
      border-width: 6px;
      margin-top: -6px;
    }
  }
}
</style>
