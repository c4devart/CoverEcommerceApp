<template>
  <div class="text-center flex flex-col items-center my-4">
    <img :src="image.file.url" />
    <div class="text-sm text-grey-500 mt-1">{{ image.caption }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
