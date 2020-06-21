<template>
  <header>
    <h3 class="text-center text-blue-900 font-bold text-4xl leading-none">
      {{ category.name }}
    </h3>
    <div
      v-if="category.hasOwnProperty('subname')"
      class="text-center leading-none text-xl font-bold mt-3"
    >
      <label v-if="category.hasOwnProperty('subnameSpec')" class="text-red-500">
        {{ category.subnameSpec }}
      </label>
      {{ category.subname }}
    </div>
  </header>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
