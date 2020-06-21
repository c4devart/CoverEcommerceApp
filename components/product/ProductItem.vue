<template>
  <section class="p-4 md:p-4 w-full lg:w-1/2 flex flex-col items-center">
    <div
      class="products-item text-center border rounded-md shadow border border-white p-6 h-full flex flex-col md:flex-row"
    >
      <div class="flex flex-col ">
        <div
          class="text-blue-900 font-bold text-3xl leading-none pt-4 text-center md:text-left"
        >
          {{ product.title }}
        </div>
        <div class="flex justify-center mt-4  relative">
          <div
            v-if="isBestSeller"
            class="products-item__best-seller absolute top-0 left-0 uppercase bg-green-500 rounded-r font-semibold text-white py-2 px-4"
          >
            Best Seller!
          </div>
          <div :style="backgroundImg" class="w-56 h-40 " />
          <div
            v-if="product.is_made_in_canada"
            class="absolute bottom-0 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="59"
              viewBox="0 0 53 59"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(.496 .632)"
              >
                <rect
                  width="52"
                  height="58"
                  fill="#E62F46"
                  stroke="#E62F46"
                  rx="18"
                />
                <path
                  fill="#FFF"
                  d="M24.651 9.189L22.381 8.254 23.316 14.708 20.022 11.459 19.711 13.194 16.085 12.664 16.061 12.66 16.191 13.146 16.656 14.885 17.085 16.485 16.328 16.843 15.571 17.2 21.268 21.829 20.69 23.698 26.236 23.063 25.938 27.847 26.187 27.847 26.52 27.847 26.893 27.847 27.103 27.847 26.832 23.517 26.826 23.066 32.351 23.698 31.772 21.829 37.469 17.2 35.956 16.485 36.85 13.146 36.98 12.66 36.956 12.664 33.33 13.194 33.018 11.459 29.725 14.708 30.66 8.254 28.39 9.189 26.52 5.183z"
                />
                <path
                  fill="#FFF"
                  fill-rule="nonzero"
                  d="M10.07 38.37v-5.55l2.26 5.55h.34l2.27-5.55v5.55h.83V31.7h-1.19l-2.08 5.08-2.07-5.08H9.24v6.67h.83zm8.65.12c.65 0 1.2-.23 1.6-.67v.55h.75v-3.32c0-1.17-.85-1.63-1.87-1.63-.79 0-1.41.26-1.93.8l.35.52c.43-.46.9-.67 1.48-.67.7 0 1.22.37 1.22 1.02v.87c-.39-.45-.94-.66-1.6-.66-.82 0-1.69.51-1.69 1.59 0 1.05.87 1.6 1.69 1.6zm.27-.54c-.7 0-1.19-.44-1.19-1.05 0-.62.49-1.06 1.19-1.06.53 0 1.04.2 1.33.6v.91c-.29.4-.8.6-1.33.6zm5.45.54c.68 0 1.27-.35 1.63-.84v.72h.75V31.7h-.75v2.57c-.39-.53-.98-.85-1.63-.85-1.27 0-2.15 1-2.15 2.54 0 1.57.89 2.53 2.15 2.53zm.18-.67c-.97 0-1.55-.79-1.55-1.86s.58-1.87 1.55-1.87c.6 0 1.18.36 1.45.78v2.19c-.27.42-.85.76-1.45.76zm5.88.67c.79 0 1.44-.26 1.92-.74l-.36-.49c-.38.39-.94.61-1.49.61-1.04 0-1.68-.76-1.74-1.67h3.91v-.19c0-1.45-.86-2.59-2.32-2.59-1.38 0-2.38 1.13-2.38 2.53 0 1.51 1.03 2.54 2.46 2.54zm1.5-2.84h-3.17c.04-.74.55-1.61 1.58-1.61 1.1 0 1.58.89 1.59 1.61zm4.9-2.92c.28 0 .51-.23.51-.51s-.23-.5-.51-.5c-.27 0-.5.22-.5.5s.23.51.5.51zm.38 5.64v-4.83h-.75v4.83h.75zm2.25 0v-3.53c.28-.39.84-.75 1.43-.75.65 0 1.08.27 1.08 1.12v3.16h.75v-3.39c0-1.05-.53-1.56-1.54-1.56-.72 0-1.38.42-1.72.82v-.7h-.75v4.83h.75zM12.995 48.49c1.21 0 2.01-.56 2.57-1.32l-.71-.39c-.38.57-1.07.97-1.86.97-1.43 0-2.54-1.13-2.54-2.71 0-1.59 1.11-2.71 2.54-2.71.79 0 1.48.41 1.86.97l.7-.39c-.53-.75-1.35-1.32-2.56-1.32-1.89 0-3.4 1.4-3.4 3.45 0 2.05 1.51 3.45 3.4 3.45zm5.02 0c.65 0 1.2-.23 1.6-.67v.55h.75v-3.32c0-1.17-.85-1.63-1.87-1.63-.79 0-1.41.26-1.93.8l.35.52c.43-.46.9-.67 1.48-.67.7 0 1.22.37 1.22 1.02v.87c-.39-.45-.94-.66-1.6-.66-.82 0-1.69.51-1.69 1.59 0 1.05.87 1.6 1.69 1.6zm.27-.54c-.7 0-1.19-.44-1.19-1.05 0-.62.49-1.06 1.19-1.06.53 0 1.04.2 1.33.6v.91c-.29.4-.8.6-1.33.6zm4.33.42v-3.53c.28-.39.84-.75 1.43-.75.65 0 1.08.27 1.08 1.12v3.16h.75v-3.39c0-1.05-.53-1.56-1.54-1.56-.72 0-1.38.42-1.72.82v-.7h-.75v4.83h.75zm6.18.12c.65 0 1.2-.23 1.6-.67v.55h.75v-3.32c0-1.17-.85-1.63-1.87-1.63-.79 0-1.41.26-1.93.8l.35.52c.43-.46.9-.67 1.48-.67.7 0 1.22.37 1.22 1.02v.87c-.39-.45-.94-.66-1.6-.66-.82 0-1.69.51-1.69 1.59 0 1.05.87 1.6 1.69 1.6zm.27-.54c-.7 0-1.19-.44-1.19-1.05 0-.62.49-1.06 1.19-1.06.53 0 1.04.2 1.33.6v.91c-.29.4-.8.6-1.33.6zm5.45.54c.68 0 1.27-.35 1.63-.84v.72h.75V41.7h-.75v2.57c-.39-.53-.98-.85-1.63-.85-1.27 0-2.15 1-2.15 2.54 0 1.57.89 2.53 2.15 2.53zm.18-.67c-.97 0-1.55-.79-1.55-1.86s.58-1.87 1.55-1.87c.6 0 1.18.36 1.45.78v2.19c-.27.42-.85.76-1.45.76zm5.12.67c.65 0 1.2-.23 1.6-.67v.55h.75v-3.32c0-1.17-.85-1.63-1.87-1.63-.79 0-1.41.26-1.93.8l.35.52c.43-.46.9-.67 1.48-.67.7 0 1.22.37 1.22 1.02v.87c-.39-.45-.94-.66-1.6-.66-.82 0-1.69.51-1.69 1.59 0 1.05.87 1.6 1.69 1.6zm.27-.54c-.7 0-1.19-.44-1.19-1.05 0-.62.49-1.06 1.19-1.06.53 0 1.04.2 1.33.6v.91c-.29.4-.8.6-1.33.6z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          v-if="
            product.custom_attributes && product.custom_attributes.taper_shape
          "
          class="text-centered flex flex-col items-center"
        >
          <div class="py-3">
            <img
              :src="`/img/taper/${product.custom_attributes.taper_shape}.svg`"
            />
          </div>
          <div class="text-blue-900 font-medium text-md leading-none">
            {{ product.custom_attributes.taper_info }}
          </div>
          <div
            v-if="product.subtitle"
            class="text-blue-900 font-medium text-sm"
          >
            {{ product.subtitle }}
          </div>
        </div>
      </div>
      <div class=" flex flex-col pl-6">
        <div class="pt-4 md:pt-0 md:text-right">
          <nuxt-link :to="buildBuyLink" class="btn btn--medium">
            {{ btnLabel }}
          </nuxt-link>
        </div>
        <div class="flex flex-row pt-4 pb-1 items-center text-xl font-medium">
          <div :class="{ 'line-through': product.sale_price }">
            {{ regPrice }}
          </div>
          <div v-if="product.sale_price" class="text-green-500 ml-2">
            {{ salePrice }}
          </div>
        </div>
        <div class="pb-2 text-left">
          <p class="text-sm">{{ product.overview }}</p>
          <nuxt-link
            v-if="product.is_special_order"
            :to="{
              name: 'products-slug',
              params: { slug: product.permalink }
            }"
            class="text-sm mt-2 text-blue-500 inline-flex items-center"
          >
            More Product Info
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <path
                fill="#00B3EF"
                fill-rule="evenodd"
                d="M13.506 9.746L9.258 5.498c-.49-.488-1.281-.488-1.771 0-.489.489-.489 1.281 0 1.77l3.364 3.364-3.364 3.363c-.489.488-.489 1.28 0 1.77.244.245.565.367.885.367.32 0 .641-.122.886-.367l4.248-4.248c.488-.49.488-1.282 0-1.77"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    btnLabel() {
      return this.product.is_special_order ? 'Start Building' : 'Buy Now'
    },
    buildBuyLink() {
      const name = this.product.is_special_order
        ? 'products-slug-build-shape'
        : 'products-slug'
      return {
        name,
        params: { slug: this.product.permalink }
      }
    },
    backgroundImg() {
      const bkgdImg = this.product.images.length
        ? this.product.images[0].public_url
        : '/img/product-placeholder.png'
      return `background: no-repeat url(${bkgdImg}) center center / cover`
    },
    isBestSeller() {
      return (
        this.product.categories.length &&
        this.product.categories.find(
          (category) => category.name === 'Best Seller'
        )
      )
    },
    regPrice() {
      return currencyFormat(this.product.reg_price)
    },
    salePrice() {
      return currencyFormat(this.product.sale_price)
    }
  }
}
</script>

<style lang="scss" scoped>
.products-item {
  transition: all 0.3s;
  background-image: linear-gradient(to bottom, #f0fbff, #fff);
  // max-width: 330px;
  min-width: 310px;
  .btn {
    min-width: 140px;
  }
  &:hover {
    @apply border border-blue-300;
  }
  &__best-seller {
    margin-left: -2.5rem;
    &:after {
      left: 4px;
      bottom: -10px;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-left-color: #38a169;
      border-width: 10px;
      transform: rotate(-45deg);
    }
  }
}
</style>
