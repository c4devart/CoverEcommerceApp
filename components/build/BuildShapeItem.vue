<template>
  <div
    :class="{ 'build-item--active': active }"
    class="build-item w-1/4 text-center flex flex-col items-center my-6 cursor-pointer select-none"
  >
    <img :src="`/img/${option.image}`" alt="shape demo" />
    <div class="text-grey-600 leading-tight mt-3">
      {{ option.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
.build {
  &-item {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.3s;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
    img {
      width: 100px;
      height: 100px;
    }
    &--active {
      filter: none;
      filter: grayscale(0);
      opacity: 1;
    }
  }
}
</style>
