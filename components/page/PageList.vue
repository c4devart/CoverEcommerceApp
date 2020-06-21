<template>
  <!-- eslint-disable-next-line -->
  <component :is="listType" :class="listClass">
    <li v-for="(item, i) in list.items" :key="i">{{ item }}</li>
  </component>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    listType() {
      return this.list.style === 'ordered' ? 'ol' : 'ul'
    },
    listClass() {
      return this.list.style === 'ordered' ? 'list-decimal' : 'list-disc'
    }
  }
}
</script>

<style lang="scss" scoped>
ul,
ol {
  @apply pl-8 text-grey-600;
}
</style>
