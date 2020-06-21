<template>
  <div
    class="w-full py-8 pl-10 flex flex-col bg-grey-100 border-grey-200 border shadow pulse"
  >
    <div class="w-56 bg-grey-400 h-6 mb-4 rounded" />
    <div class="w-48 bg-grey-400 h-6 mb-4 rounded" />
    <div v-if="isShipping" class="w-32 bg-grey-400 h-6 mb-4 rounded" />
    <div v-if="isShipping" class="w-32 bg-grey-400 h-6 mb-4 rounded" />
  </div>
</template>

<script>
export default {
  props: {
    isShipping: Boolean
  }
}
</script>
