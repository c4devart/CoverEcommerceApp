<template>
  <div class="app-header-main-menu-item">
    <input :id="id" type="checkbox" class="hidden" />
    <label
      :for="id"
      class="uppercase px-5 md:px-3 font-bold flex justify-between md:inline-flex md:justify-start items-center text-base flex-initial mb-5 md:mb-0 leading-none"
    >
      <span>{{ label }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        class="ml-1"
      >
        <path
          fill="#00B3EF"
          fill-rule="evenodd"
          d="M13.126 15.01l4.248-4.249a1.252 1.252 0 0 0-1.77-1.77l-3.363 3.364L8.878 8.99a1.252 1.252 0 0 0-1.77 1.77l4.248 4.248c.49.49 1.282.49 1.77 0"
        />
      </svg>
    </label>
    <div
      class="content flex flex-col md:absolute text-sm leading-normal md:pb-0 pb-2"
    >
      <nuxt-link to="/" class="py-4 md:pl-5 pl-6">I Am a Page</nuxt-link>
      <nuxt-link to="/" class="py-4 md:pl-5 pl-6"
        >I Am a Page On Hover</nuxt-link
      >
      <nuxt-link to="/" class="py-4 md:pl-5 pl-6">I Am Another Page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header-main-menu-item {
  position: relative;
  label {
    cursor: pointer;
    svg {
      transition: all 0.35s;
    }
  }
  .content {
    z-index: 50;
    min-width: 259px;
    border-radius: 4px;
    background-color: white;
    overflow: hidden;
    height: 0px;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    @screen md {
      height: auto;
      top: 40px;
      box-shadow: 0 2px 5px 0 rgba(0, 83, 128, 0.1);
      transform: scaleY(0);
      transform-origin: top left;
      transition-duration: 0.2s;
      -webkit-transform: scaleY(0);
      -webkit-transform-origin: top left;
      -webkit-transition-duration: 0.2s;
    }
    a {
      cursor: pointer;
    }
    a:hover {
      @apply bg-blue-100;
      text-decoration: underline;
    }
  }
  input:checked {
    + label {
      svg {
        transform: rotate(-90deg);
      }
    }
    ~ .content {
      height: 100%;
      @screen md {
        height: auto;
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
      }
    }
  }
}
</style>
