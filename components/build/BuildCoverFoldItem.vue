<template>
  <a
    @click.prevent="$emit('selected', fold)"
    href=""
    class="build-fold-item w-1/2 sm:w-1/3 lg:w-1/4 text-center flex flex-col items-center my-2 cursor-pointer select-none relative"
  >
    <img
      :class="{
        'build-fold-item__fold--active': active
      }"
      :src="`/img/${fold.image}`"
      alt="fold type"
      class="build-fold-item__fold absolute z-10"
    />
    <div
      :class="{
        'build-fold-item__bckg--active': active
      }"
      :style="shapeBckg"
      class="build-fold-item__bckg"
    />
    <div
      :class="{
        'build-fold-item__label--active': active
      }"
      class="text-grey-600 leading-tight build-fold-item__label"
    >
      {{ fold.label }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    active: Boolean,
    shape: Object,
    fold: {
      type: Object,
      required: true
    }
  },
  computed: {
    shapeBckg() {
      if (this.shape && this.shape.label) {
        const img = this.shape.label
          .split(' ')
          .join('-')
          .toLowerCase()
        return `background: no-repeat url('/img/shapes/${img}.svg') center center / cover`
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.build-fold-item {
  &__fold {
    width: 100px;
    height: 100px;
    top: 20px;
  }
  &__bckg {
    width: 140px;
    height: 140px;
    filter: gray;
    filter: grayscale(1);
    transition: all 0.3s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    &--active {
      filter: grayscale(0.5);
      opacity: 1;
    }
  }
  &__label {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.3s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    &--active {
      opacity: 1;
      filter: none;
      filter: grayscale(0);
    }
  }
}
</style>
