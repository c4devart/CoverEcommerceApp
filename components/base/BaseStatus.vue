<template>
  <div
    :class="{
      'py-2 px-3 bg-grey-100 text-blue-900 border border-grey-300 rounded-full': !noStyle
    }"
    class="flex items-center text-sm leading-none"
  >
    <span :class="statusColor" class="base-status rounded-full block mr-2" />
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    noStyle: Boolean
  },
  computed: {
    statusColor() {
      // if ()
      return 'base-status--orange'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-status {
  width: 10px;
  height: 10px;
  &--orange {
    background: #f6ad55;
  }
}
</style>
