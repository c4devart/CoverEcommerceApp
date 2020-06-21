<template>
  <div class="cover-step flex items-center flex-col">
    <div
      class="cover-step__nb mb-2 font-bold rounded-full text-xl text-blue-900 bg-white flex items-center justify-center"
    >
      {{ nb }}
    </div>
    <p class="md:text-xl text-white">{{ step }}</p>
  </div>
</template>

<script>
export default {
  props: {
    nb: {
      type: Number,
      required: true
    },
    step: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-step {
  width: 240px;
  &__nb {
    width: 40px;
    height: 40px;
  }
}
</style>
