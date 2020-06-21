<template>
  <div>
    <div
      v-for="option in options"
      :key="option.id"
      class="flex justify-between mb-1"
    >
      <div class="font-bold">
        {{ option.title }}
      </div>
      <div>
        {{ optionValue(option) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
