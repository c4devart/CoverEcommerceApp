<template>
  <div class="mb-6 relative blog-search">
    <FormItem
      v-model="query"
      placeholder="Search Blogs"
      class="blog-search__input"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      class="blog-search__icon absolute"
    >
      <path
        fill="#00B3EF"
        fill-rule="evenodd"
        d="M6.51 10.595A6.102 6.102 0 0 1 12.605 4.5a6.102 6.102 0 0 1 6.094 6.095 6.102 6.102 0 0 1-6.094 6.095 6.102 6.102 0 0 1-6.095-6.095m15.26 9.125l-3.78-3.778a7.57 7.57 0 0 0 2.209-5.347C20.199 6.408 16.792 3 12.605 3 8.417 3 5.01 6.408 5.01 10.595c0 4.187 3.407 7.595 7.595 7.595a7.553 7.553 0 0 0 4.225-1.288l3.88 3.879a.75.75 0 0 0 1.06-1.061"
      />
    </svg>
  </div>
</template>

<script>
import FormItem from '@/components/form/FormItem'

export default {
  components: {
    FormItem
  },
  data: () => ({
    query: null
  })
}
</script>

<style>
.blog-search__input input {
  padding-right: 3rem !important;
}
.blog-search__icon {
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
}
</style>
