<template>
  <div :class="{ 'modal-active modal-visible': active }" class="modal">
    <div class="modal__card m-2 my-3">
      <header
        :class="{ 'modal__header--no-icon': noIcon }"
        class="modal__header bg-grey-100 flex flex-col items-center align-center justify-center"
      >
        <div v-if="!noIcon" class="modal__icon">
          <svg
            v-if="isDelete"
            fill="#e53e3e"
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M9,0 C13.963,0 18,4.038 18,9 C18,13.963 13.963,18 9,18 C4.037,18 0,13.963 0,9 C0,4.038 4.037,0 9,0 Z M9,2 C5.141,2 2,5.141 2,9 C2,12.86 5.141,16 9,16 C12.859,16 16,12.86 16,9 C16,5.141 12.859,2 9,2 Z M9,11.811 C9.553,11.811 10,12.259 10,12.811 C10,13.364 9.553,13.811 9,13.811 C8.447,13.811 8,13.364 8,12.811 C8,12.259 8.447,11.811 9,11.811 Z M9,4.19 C9.553,4.19 10,4.637 10,5.19 L10,9.881 C10,10.434 9.553,10.881 9,10.881 C8.447,10.881 8,10.434 8,9.881 L8,5.19 C8,4.637 8.447,4.19 9,4.19 Z"
            />
          </svg>
          <svg
            v-else
            width="38px"
            height="38px"
            viewBox="0 0 38 38"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#00B3EF"
              d="M23.55625,15.7770833 C22.2625,15.7770833 21.2125,14.725 21.2125,13.4333333 C21.2125,12.1395833 22.2625,11.0895833 23.55625,11.0895833 C24.8479166,11.0895833 25.9,12.1395833 25.9,13.4333333 C25.9,14.725 24.8479166,15.7770833 23.55625,15.7770833 M23.55625,7.9645833 C20.5354166,7.9645833 18.0875,10.4125 18.0875,13.4333333 C18.0875,16.4541667 20.5354166,18.9020833 23.55625,18.9020833 C26.5770833,18.9020833 29.025,16.4541667 29.025,13.4333333 C29.025,10.4125 26.5770833,7.9645833 23.55625,7.9645833 M12.70625,13.975 C12.70625,7.99375 17.5729166,3.125 23.55625,3.125 C29.5395833,3.125 34.40625,7.99375 34.40625,13.975 C34.40625,17.8625 28.6520833,26.4125 23.5541666,32.6666667 C18.4583333,26.4166667 12.70625,17.86875 12.70625,13.975 M37.53125,13.975 C37.53125,6.2583333 31.275,0 23.55625,0 C17.5,0 12.3604166,3.8583333 10.41875,9.24375 L5.83333333,9.24375 C4.97083333,9.24375 4.27083333,9.94375 4.27083333,10.80625 C4.27083333,11.66875 4.97083333,12.36875 5.83333333,12.36875 L9.67916663,12.36875 C9.61875003,12.8979167 9.58125003,13.43125 9.58125003,13.975 C9.58125003,14.9354167 9.79791663,16.0229167 10.1770833,17.1875 L3.60833333,17.1875 C2.74583333,17.1875 2.04583333,17.8875 2.04583333,18.75 C2.04583333,19.6125 2.74583333,20.3125 3.60833333,20.3125 L11.4833333,20.3125 C12.25,21.8895833 13.1833333,23.51875 14.2104166,25.1291667 L1.5625,25.1291667 C0.7,25.1291667 0,25.8291667 0,26.6916667 C0,27.5541667 0.7,28.2541667 1.5625,28.2541667 L16.30625,28.2541667 C19.8854166,33.3416667 23.55625,37.5 23.55625,37.5 C23.55625,37.5 37.53125,21.69375 37.53125,13.975"
            />
          </svg>
        </div>
        <a
          @click.prevent="$emit('cancel')"
          href=""
          class="absolute modal__close text-xl"
        >
          <svg
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#1A202C"
              d="M11.679825,0.366116514 C12.1679804,0.854271853 12.1679804,1.6457281 11.679825,2.13388347 L7.79073772,6.02297076 L11.679825,9.91205806 C12.1679804,10.4002134 12.1679804,11.1916697 11.679825,11.679825 C11.1916697,12.1679804 10.4002134,12.1679804 9.91205806,11.679825 L6.02297076,7.79073772 L2.13388347,11.679825 C1.64572813,12.1679804 0.854271853,12.1679804 0.366116514,11.679825 C-0.122038824,11.1916697 -0.122038824,10.4002134 0.366116514,9.91205806 L4.25520381,6.02297076 L0.366116514,2.13388347 C-0.122038852,1.6457281 -0.122038824,0.854271853 0.366116514,0.366116514 C0.854271853,-0.122038824 1.6457281,-0.122038852 2.13388347,0.366116514 L6.02297076,4.25520381 L9.91205806,0.366116514 C10.4002134,-0.122038852 11.1916697,-0.122038824 11.679825,0.366116514 Z"
            />
          </svg>
        </a>
        <h3 class="text-2xl font-normal text-blue-900">{{ title }}</h3>
      </header>
      <section class="modal__content px-8 py-4 pb-8">
        <slot />
      </section>
    </div>
    <div @click="$emit('cancel')" class="modal__overlay" />
  </div>
</template>

<script>
export default {
  props: {
    noIcon: Boolean,
    active: Boolean,
    type: {
      type: String,
      default: 'online'
    },
    noScroll: Boolean,
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    isDelete() {
      return this.type === 'delete'
    }
  },
  watch: {
    active: {
      handler(value) {
        const noScroll = document.body.classList.contains('noScroll')
        !noScroll ? this.addNoScroll() : this.removeNoScroll()
      }
    }
  },
  beforeDestroy() {
    this.removeNoScroll()
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    addNoScroll() {
      document.body.classList.add('noScroll')
    },
    removeNoScroll() {
      document.body.classList.remove('noScroll')
    }
  }
}
</script>

<style lang="scss">
.modal {
  &__header {
    @apply rounded-t-xl;
    min-height: 125px;
    &--no-icon {
      min-height: 80px;
    }
  }
  &__close {
    top: 1rem;
    right: 1rem;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
  &__icon {
    @apply my-2;
    svg {
      width: 36px;
      height: 36px;
    }
  }
  &__card {
    @apply fixed bg-white w-full max-w-lg rounded-xl z-20 shadow-md opacity-0 invisible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    min-height: 300px;
    margin-top: -2rem;
  }
  &__overlay {
    background: rgba(74, 85, 104, 0.08);
    z-index: 10;
    @apply fixed inset-0 opacity-0 invisible;
    transition: all 0.3s;
  }
  &-visible {
    .modal {
      &__card {
        @apply opacity-100 visible mt-0;
      }
      &__overlay {
        @apply opacity-100 visible;
      }
    }
  }
}

.noScroll {
  overflow: hidden;
}
</style>
