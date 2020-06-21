<template>
  <div class="page-content">
    <span v-for="(element, i) in content" :key="i">
      <!-- eslint-disable-next-line -->
      <component
        v-if="isOfType(element, ['header', 'paragraph'])"
        v-bind:is="componentType(element)"
        v-html="element.data.text"
      />
      <PageEmbed v-if="isOfType(element, 'embed')" :embed="element.data" />
      <PageQuote v-if="isOfType(element, 'quote')" :quote="element.data" />
      <PageList v-if="isOfType(element, 'list')" :list="element.data" />
      <PageDelimiter v-if="isOfType(element, 'delimiter')" />
      <PageImage v-if="isOfType(element, 'image')" :image="element.data" />
    </span>
  </div>
</template>

<script>
import PageQuote from '@/components/page/PageQuote'
import PageList from '@/components/page/PageList'
import PageDelimiter from '@/components/page/PageDelimiter'
import PageImage from '@/components/page/PageImage'
import PageEmbed from '@/components/page/PageEmbed'

export default {
  components: {
    PageQuote,
    PageList,
    PageDelimiter,
    PageImage,
    PageEmbed
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  methods: {
    componentType(el) {
      if (el.type === 'header') {
        switch (el.data.level) {
          case 1:
            return 'h1'
          case 2:
            return 'h2'
          case 3:
            return 'h3'
          case 4:
            return 'h4'
          case 5:
            return 'h5'
          case 6:
            return 'h6'
        }
      }
      if (el.type === 'paragraph') {
        return 'p'
      }
    },
    isOfType(el, type) {
      if (Array.isArray(type)) {
        return type.includes(el.type)
      }
      return el.type === type
    }
  }
}
</script>

<style lang="scss">
.page-content {
  h1,
  h2,
  h3,
  h4 {
    @apply mt-8;
  }
  h1 {
    @apply text-4xl;
  }
  h2 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
  h4 {
    @apply text-xl;
  }
  p {
    @apply my-4;
  }
  a {
    color: #00b3ef !important;
    &:hover {
      color: #0a2857 !important;
    }
  }
  mark {
    @apply bg-blue-200;
  }
}
</style>
