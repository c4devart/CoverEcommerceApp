<template>
  <nuxt-link
    :to="to"
    class="flex items-center text-blue-500 text-sm leading-none base-go-back"
  >
    <svg
      width="7px"
      height="11px"
      viewBox="0 0 7 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Path"
        fill="#00B3EF"
        d="M0.36640472,6.36204414 L4.61540472,10.6100441 C5.10768419,11.0774303 5.8827517,11.0673796 6.36274593,10.5873853 C6.84274016,10.1073911 6.85279092,9.3323236 6.38540472,8.84004414 L3.02140472,5.47704414 L6.38540472,2.11404414 C6.85279092,1.62176467 6.84274016,0.846697161 6.36274593,0.366702927 C5.8827517,-0.113291307 5.10768419,-0.123342059 4.61540472,0.344044136 L0.36640472,4.59204414 C-0.122134907,5.08091237 -0.122134907,5.8731759 0.36640472,6.36204414"
      ></path>
    </svg>
    <span>
      <slot />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: true
    }
  }
}
</script>

<style scoped>
.base-go-back svg {
  margin-right: 0.5rem;
  transition: all 0.3s;
}
.base-go-back:hover svg {
  margin-right: 0.7rem;
}
.base-go-back span {
  padding-top: 1px;
}
</style>
