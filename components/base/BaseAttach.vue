<template>
  <section
    class="base-attach flex items-center border-grey-300 border base-attach__border--width rounded-md pt-5 pb-4 px-5"
  >
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#00B3EF"
        d="M19.373 5.209c1.037 0 1.877.84 1.877 1.877v7.955a3.75 3.75 0 0 1-3.75 3.75H7c-2.07 0-3.75-1.68-3.75-3.75V7.086c0-1.036.84-1.877 1.877-1.877zm.377 4.083l-7.04 5.07a.744.744 0 0 1-.015.011l-.007.005-.01.008a.745.745 0 0 1-.073.044l.083-.052a.754.754 0 0 1-.768.065l-.013-.007a.701.701 0 0 1-.087-.051l-.008-.007a.334.334 0 0 1-.023-.017L4.75 9.292v5.749c0 1.19.926 2.166 2.096 2.245L7 17.29h10.5a2.25 2.25 0 0 0 2.25-2.25V9.292zm-.377-2.583H5.127a.378.378 0 0 0-.377.377v.368l.09.055 7.41 5.335 7.411-5.335.089-.055v-.368a.377.377 0 0 0-.301-.37l-.076-.007z"
      />
    </svg>
    <div class="ml-1 text-base text-grey-600 leading-normal font-bold">
      {{ label }}
    </div>
  </section>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.base-attach {
  &__border--width {
    border-width: 1.5px;
  }
}
</style>
