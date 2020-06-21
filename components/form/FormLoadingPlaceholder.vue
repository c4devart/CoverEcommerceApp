<template>
  <div class="form-loading pulse w-full">
    <div v-if="!noLabel" class="form-loading__label bg-grey-200 rounded mb-1" />
    <div class="form-loading__input rounded bg-grey-200 " />
  </div>
</template>

<script>
export default {
  props: {
    noLabel: Boolean
  }
}
</script>

<style lang="scss" scoped>
.form-loading {
  &__label {
    height: 18px;
    margin-top: 3px;
    max-width: 100px;
  }
  &__input {
    height: 54px;
  }
}
</style>
