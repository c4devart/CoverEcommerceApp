<template>
  <a
    :class="{
      'build-item--active': active,
      'build-item--basic': !isColour,
      'build-item--colour': isColour
    }"
    @click.prevent="$emit('selected', option)"
    href=""
    class="build-item w-1/2 sm:w-1/3 lg:w-1/4 text-center flex flex-col items-center my-2 cursor-pointer select-none"
  >
    <div
      :class="{ 'build-item__img--colour': isColour }"
      class="build-item__img"
    >
      <img :src="`/img/${buildImage}`" alt="shape demo" />
    </div>
    <div class="text-grey-600 leading-tight">
      {{ option.label }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    active: Boolean,
    isColour: Boolean,
    image: String
  },
  computed: {
    buildImage() {
      return this.image || this.option.image
    }
  }
}
</script>

<style lang="scss" scoped>
.build {
  &-item {
    &--basic {
      filter: gray;
      filter: grayscale(1);
    }
    &--colour {
      @apply my-4;
    }
    transition: all 0.3s;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
    &__img {
      img {
        width: 140px;
        height: 140px;
      }
      &--colour {
        @apply relative rounded overflow-hidden mb-2;
        &:after {
          transition: all 0.3s;
          content: '';
          @apply absolute inset-0;
        }
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
    &--active {
      filter: none;
      filter: grayscale(0);
      opacity: 1;
      .build-item__img--colour:after {
        @apply border-8 border-blue-500;
        box-shadow: 0 2px 5px 0 rgba(0, 83, 128, 0.1);
      }
    }
  }
}
</style>
