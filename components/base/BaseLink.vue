<template>
  <span class="base-link">
    <nuxt-link
      v-if="to"
      :to="to"
      :class="mainClasses"
      class="w-full md:w-auto"
      >{{ label }}</nuxt-link
    >
    <div v-else v-click-outside="handleClickOutside" class="relative">
      <a
        @click.prevent="toggleDropdown = !toggleDropdown"
        :class="[
          {
            'base-link--active': toggleDropdown
          },
          mainClasses
        ]"
        href=""
        class="flex items-center "
      >
        {{ label }}
        <svg
          width="11px"
          height="7px"
          viewBox="0 0 11 7"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2 base-link__icon"
        >
          <path
            :fill="svgFill"
            d="M6.37631712,6.37781191 L10.6243171,2.12881191 C11.0917033,1.63653244 11.0816526,0.861464936 10.6016583,0.381470702 C10.1216641,-0.0985235317 9.34659659,-0.108574283 8.85431712,0.358811912 L5.49031712,3.72281191 L2.12831712,0.357811912 C1.63809003,-0.122617542 0.852442517,-0.118763487 0.366952473,0.366452424 C-0.118537571,0.851668334 -0.122835368,1.63731355 0.357317122,2.12781191 L4.60531712,6.37581191 C5.09531712,6.86581191 5.88731712,6.86581191 6.37531712,6.37581191"
          />
        </svg>
      </a>
      <transition name="fade-down" mode="out-in">
        <section
          v-if="toggleDropdown"
          @click="toggleDropdown = false"
          :class="{ 'base-link__dropdown--small': isSmall }"
          class="base-link__dropdown flex flex-col md:absolute text-sm leading-normal md:pb-0 pb-2 bg-white md:rounded md:shadow z-50"
        >
          <slot />
        </section>
      </transition>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    isSmall: Boolean,
    to: [String, Boolean],
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    toggleDropdown: false
  }),
  computed: {
    mainClasses() {
      return !this.isSmall
        ? 'uppercase px-5 md:px-3 font-bold flex justify-between md:inline-flex md:justify-start items-center text-base flex-initial mb-5 md:mb-0 leading-none'
        : ''
    },
    svgFill() {
      return this.isSmall ? '#0A2857' : '#00B3EF'
    }
  },
  methods: {
    handleClickOutside() {
      this.toggleDropdown = false
    }
  }
}
</script>

<style lang="scss">
.base-link {
  &--active {
    .base-link__icon {
      transform: rotate(-90deg);
    }
  }
  &__icon {
    transition: all 0.3s;
  }
  &__dropdown {
    top: 3rem;
    min-width: 200px;
    a {
      @apply py-4 px-8;
      &:hover {
        @apply bg-blue-100 underline;
      }
    }
    &--small {
      a {
        @apply py-3 px-6;
      }
    }
  }
}
</style>
