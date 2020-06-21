<template>
  <a :href="`tel:${telSegment}.2683`"> {{ telSegment }}.COVER (2683) </a>
</template>

<script>
export default {
  data: () => ({
    telSegment: '2.988.655'
  }),
  mounted() {
    this.decodeTel()
  },
  methods: {
    decodeTel() {
      let decoded = ''
      const splitPhone = this.telSegment.split('')
      for (const el of splitPhone) {
        decoded += !isNaN(el) ? el - 1 : el
      }
      this.telSegment = decoded
    }
  }
}
</script>
