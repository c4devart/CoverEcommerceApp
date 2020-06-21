<template>
  <section class="base-page-columns container">
    <h1 class="text-2xl md:text-4xl text-blue-900 font-bold text-center mb-6">
      {{ title }}
    </h1>
    <section
      id="main"
      ref="mainSection"
      :class="sectionClasses"
      class="md:flex"
    >
      <main :class="mainClasses" class="w-full">
        <slot name="main" />
      </main>
      <aside
        v-if="hasAsideSlot"
        :class="asideClasses"
        class="w-full md:flex-1 md:flex justify-center md:justify-end items-start md:pt-0 relative"
      >
        <section
          id="aside"
          ref="aside"
          :style="fixedTopStyle"
          :class="{ 'md:absolute': isFixed }"
          class="base-page-columns__aside w-full border border-grey-200 bg-white"
        >
          <slot name="aside" />
        </section>
      </aside>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: String,
    hidden: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    fixedAside: Boolean
  },
  data: () => ({
    isFixed: false,
    fixedTop: 0
  }),
  computed: {
    fixedTopStyle() {
      return `top: ${this.fixedTop}px`
    },
    sectionClasses() {
      const classes = this.reverse
        ? ['md:flex-row', 'flex', 'flex-col-reverse']
        : []
      return classes.join(' ')
    },
    mainClasses() {
      const classes =
        this.type === 'general' || !this.hasAsideSlot ? [] : ['md:pr-12']
      this.hasAsideSlot ? classes.push('md:w-3/5') : classes.push('w-full')
      this.reverse ? classes.push('pt-6') : classes.push('')
      return classes.join(' ')
    },
    // eslint-disable-next-line vue/return-in-computed-property
    asideClasses() {
      const classes = this.type === 'general' ? ['md:pl-4'] : []
      this.hidden ? classes.push('hidden') : classes.push('flex')
      this.reverse ? classes.push('') : classes.push('pt-6')
      return classes.join(' ')
    },
    hasAsideSlot() {
      return !!this.$slots.aside
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      if (this.fixedAside) {
        // const aside = this.$refs.aside
        const aside = document.getElementById('aside')
        const asideHeight = aside.getBoundingClientRect().height
        // const mainEl = this.$refs.mainSection
        const mainEl = document.getElementById('main')
        const mainElPos = mainEl.getBoundingClientRect().top
        const mainElHeight = mainEl.getBoundingClientRect().height

        // this.isFixed = mainElHeight + mainElPos > asideHeight && mainElPos <= 0
        this.isFixed = mainElPos <= 0
        if (mainElHeight + mainElPos > asideHeight) {
          this.fixedTop = mainElPos > 0 ? 0 : mainElPos * -1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-page-columns__aside {
  box-shadow: 0 2px 5px 0 rgba(0, 83, 128, 0.1);
  max-width: 390px;
  transition: all 0.3s;
}
</style>
