<template>
  <header
    :class="collapsed ? 'collapsed' : ''"
    class="app-header relative shadow-md bg-white"
  >
    <AppMobileTop class="md:hidden" />
    <div
      id="header-main-menu"
      class="flex-col-reverse flex md:block absolute md:static w-full z-50"
    >
      <AppHeaderTopNav />
      <AppHeaderMainMenu />
    </div>
    <AppHamburger
      :collapsed="collapsed"
      @click="onClickHamburger"
      class="md:hidden"
    />
  </header>
</template>

<script>
import AppHeaderTopNav from '@/components/AppHeaderTopNav'
import AppHeaderMainMenu from '@/components/AppHeaderMainMenu'
import AppHamburger from '@/components/AppHamburger'
import AppMobileTop from '@/components/AppMobileTop'
export default {
  components: {
    AppHeaderTopNav,
    AppHeaderMainMenu,
    AppHamburger,
    AppMobileTop
  },
  data() {
    return {
      collapsed: true
    }
  },
  watch: {
    $route() {
      this.collapsed = true
    }
  },
  methods: {
    onClickHamburger() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
