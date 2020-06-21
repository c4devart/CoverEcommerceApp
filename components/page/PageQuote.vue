<template>
  <div class="my-4">
    <p class="text-lg text-grey-600 italic">{{ quote.text }}</p>
    <div class="text-sm text-grey-500">— {{ quote.caption }}</div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  }
}
</script>
