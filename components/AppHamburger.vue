<template>
  <div
    :class="{ 'app-hamburger--open': !collapsed }"
    @click="$emit('click')"
    class="app-hamburger"
  >
    <label class="navbar-toggler" for="menu-toggle">
      <div class="navbar-toggler-div">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-hamburger {
  position: absolute;
  right: 15px;
  top: 22px;
}
/*
hamburger
*/
.navbar-toggler-div {
  width: 24px;
  height: 17px;
  border: none;
  z-index: 9999;
  cursor: pointer;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  &:focus,
  &:active {
    outline: 0;
  }
  .icon-bar {
    display: block;
    position: absolute;
    border-radius: 1.9px;
    @apply bg-blue-900 w-6;
    height: 3px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    left: 0;
    opacity: 1;
  }
  .icon-bar:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  .icon-bar:nth-child(2) {
    top: 7px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  .icon-bar:nth-child(3) {
    top: 14px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
.app-hamburger--open .navbar-toggler {
  .icon-bar:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -2px;
    left: 4px;
    @apply bg-blue-900;
  }
  .icon-bar:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  .icon-bar:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 15px;
    left: 4px;
    @apply bg-blue-900;
  }
}
</style>
