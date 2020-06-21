<template>
  <section class="cover-summary p-8 w-full relative border-8 border-blue-500">
    <div class="relative p-1">
      <button
        @click="closeExplanation"
        class="btn btn--terciary top-0 right-0 absolute"
      >
        Close
      </button>
    </div>

    <h2 class="text-2xl pb-4 pr-10 border-grey-200 border-b mx-6 leading-1">
      {{ help.title }}
    </h2>
    <section class="m-4 mt-8 text-grey-700">
      <img
        v-if="help.image"
        :src="`/img/${help.image}`"
        alt="Explanation illustration"
        class="mb-4"
      />
      <p v-html="help.content" />
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    help() {
      return this.$store.getters['help/getHelp']
    }
  },
  methods: {
    closeExplanation() {
      this.$store.commit('help/unsetHelp')
    }
  }
}
</script>

<style lang="scss" scoped></style>
