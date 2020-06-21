<template>
  <section class="build-accordion mb-6 bg-grey-200 rounded-md p-2">
    <a
      @click.prevent="toggleAccordion = !toggleAccordion"
      :class="{ 'build-accordion__title--open': toggleAccordion }"
      href
      class="build-accordion__title py-2 px-3 bg-grey-600 rounded text-white cursor-pointer flex relative"
    >
      {{ title }}
    </a>
    <transition name="slide">
      <div v-if="toggleAccordion">
        <p v-if="description" class="text-grey-700 mt-4 mx-3">
          {{ description }}
        </p>
        <div class="flex flex-wrap my-4 mx-2">
          <slot />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: String,
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggleAccordion: this.isOpen
    }
  },
  watch: {
    isOpen() {
      this.toggleAccordion = !this.toggleAccordion
    }
  }
}
</script>

<style lang="scss" scoped>
.build-accordion {
  background: #f3f7fa;
  &__title {
    &:before {
      transition: all 0.3s;
      content: ' ';
      top: 50%;
      @apply absolute border-none;
      right: 12px;
      width: 12px;
      height: 8px;
      transform: translateY(-50%) rotate(-90deg);
      background: url('data:image/svg+xml,%3Csvg%20width%3D%2211px%22%20height%3D%227px%22%20viewBox%3D%220%200%2011%207%22%20version%3D%221.1%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%20xmlns:xlink%3D%22http://www.w3.org/1999/xlink%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M6.376,6.376%20L10.618,2.134%20C11.106,1.646%2011.106,0.855%2010.618,0.366%20C10.13,-0.122%209.339,-0.122%208.851,0.366%20L5.492,3.725%20L2.134,0.366%20C1.646,-0.122%200.855,-0.122%200.366,0.366%20C0.122,0.61%201.89182003e-13,0.93%201.89182003e-13,1.25%20C1.89182003e-13,1.57%200.122,1.89%200.366,2.134%20L4.608,6.376%20C5.097,6.864%205.888,6.864%206.376,6.376%22%3E%3C/path%3E%3C/svg%3E')
        center right no-repeat;
    }
    &--open {
      &:before {
        margin-top: 0;
        transform: translateY(-50%) rotate(0);
      }
    }
  }
}
</style>
