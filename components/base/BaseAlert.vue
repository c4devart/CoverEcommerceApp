<template>
  <div
    :class="`base-alert alert-${type}`"
    class="base-alert rounded-large py-4 px-6 border text-blue-900 relative flex items-center justify-between"
  >
    <div class="mr-4">
      <svg
        v-if="isSuccess"
        class="base-alert__icon"
        width="18px"
        height="12px"
        viewBox="0 0 18 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#68d391"
          d="M6.75618625,11.6629774 C6.41532198,11.6636678 6.08821845,11.5285699 5.84718625,11.2875462 L0.39318625,5.83226048 C0.058735964,5.50968515 -0.0756395033,5.03175089 0.0417063098,4.58214907 C0.159052123,4.13254725 0.509857838,3.78124499 0.959293232,3.66326337 C1.40872863,3.54528174 1.88685247,3.67898107 2.20990054,4.01297476 L6.75490054,8.55797476 L14.938472,0.376974764 C15.4404988,-0.125407101 16.2547329,-0.125694912 16.7571148,0.376331921 C17.2594967,0.878358753 17.2597845,1.69259288 16.7577577,2.19497476 L7.66518625,11.2875462 C7.42415405,11.5285699 7.09705052,11.6636678 6.75618625,11.6629774 Z"
        />
      </svg>
      <svg
        v-if="isError"
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="base-alert__icon"
      >
        <path
          fill="#f589a6"
          d="M10,12.811 C10,13.364 9.553,13.811 9,13.811 C8.447,13.811 8,13.364 8,12.811 C8,12.259 8.447,11.811 9,11.811 C9.553,11.811 10,12.259 10,12.811 M10,5.19 L10,9.881 C10,10.434 9.553,10.881 9,10.881 C8.447,10.881 8,10.434 8,9.881 L8,5.19 C8,4.637 8.447,4.19 9,4.19 C9.553,4.19 10,4.637 10,5.19 M9,16 C5.141,16 2,12.86 2,9 C2,5.141 5.141,2 9,2 C12.859,2 16,5.141 16,9 C16,12.86 12.859,16 9,16 M9,0 C4.037,0 0,4.038 0,9 C0,13.963 4.037,18 9,18 C13.963,18 18,13.963 18,9 C18,4.038 13.963,0 9,0"
        ></path>
      </svg>
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    isSuccess() {
      return this.type === 'success'
    },
    isError() {
      return this.type === 'error'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-alert {
  &__icon {
    width: 22px;
    height: 22px;
    left: 1.5rem;
    top: 17px;
  }
  &.alert-success {
    @apply border-green-400 bg-green-100;
  }
  &.alert-warning {
    @apply border-orange-400 bg-orange-100;
  }
  &.alert-error {
    @apply border-red-400 bg-red-100;
  }
}
</style>
