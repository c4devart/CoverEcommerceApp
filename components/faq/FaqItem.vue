<template>
  <nuxt-link
    :to="{ name: 'faq-slug', params: { slug: item.slug } }"
    class="border border-grey-300 hover:border-blue-300 rounded p-4 flex font-semibold text-grey-600 items-center w-full mb-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      class="mr-1"
    >
      <path
        fill="#00B3EF"
        fill-rule="evenodd"
        d="M19.826 11.628l-4.243-4.242a1.25 1.25 0 0 0-1.768 1.767l2.11 2.11H6.25a1.25 1.25 0 1 0 0 2.5h9.674l-2.109 2.107a1.25 1.25 0 0 0 1.768 1.768l4.243-4.242a1.25 1.25 0 0 0 0-1.768"
      />
    </svg>
    {{ item.title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
