<template>
  <section class="cover-summary p-6 w-full">
    <h2 class="text-2xl pb-4 border-grey-200 border-b mx-4">
      Your Cover Summary
    </h2>
    <div class="flex flex-col items-center mt-4 mb-6">
      <div class="h-48  w-48 mb-6 relative">
        <div :style="measureBckgd" class="h-48 w-48 absolute inset-0 z-10" />
        <div
          :style="foldBckgd"
          class="cover-summary__fold  h-32 w-32 absolute"
        />
        <div
          :style="colorBckgd"
          class="h-48 w-48 absolute inset-0 z-0 bg-grey-200 rounded-xl"
        />
      </div>
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <div class="text-grey-600">{{ makeModelTitle }}</div>
    </div>
    <div
      v-if="dimensions"
      class="flex leading-none border-t border-grey-200 py-3"
    >
      <div
        v-for="(dim, letter) in dimensions"
        :key="letter"
        class="text-center text-xsm  w-1/6"
      >
        <div class="font-bold mb-1 uppercase">{{ letter }}</div>
        <div>{{ dim | defaultValue }}</div>
      </div>
    </div>
    <div
      v-if="color || fold || (otherOptions && otherOptions.length)"
      class="text-xsm border-t border-grey-200 pt-5"
    >
      <div v-if="color" class="flex justify-between mb-1">
        <div class="font-bold">Colour</div>
        <div>{{ color.label }}</div>
      </div>
      <div v-if="fold" class="flex justify-between mb-1">
        <div class="font-bold">Fold</div>
        <div>{{ fold.toUpperCase() }}</div>
      </div>
      <template v-if="otherOptions">
        <div
          v-for="option in otherCustomizeOptions"
          :key="option.id"
          class="flex justify-between mb-1"
        >
          <div class="font-bold">
            {{ option.title }}
          </div>
          <div>
            {{ optionValue(option) }}
          </div>
        </div>
        <div class="mt-4">
          <div
            v-for="option in otherUpgradesOptions"
            :key="option.id"
            class="flex justify-between mb-1"
          >
            <div class="text-green-500 font-bold">
              {{ option.title }}
            </div>
            <div>
              {{ optionValue(option) }}
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="border-t-2 border-grey-200 mt-6 pt-4">
      <div class="flex justify-between mb-1 font-bold">
        <div class="">Total</div>
        <div class="flex items-center">
          <span class="mr-2 text-xs font-light">CAD</span
          >{{ totalPrice || defaultValue }}
        </div>
      </div>
      <div class="mt-4 relative summary-cta">
        <a
          v-if="isUpdatable"
          @click.prevent="updateCartItem"
          :class="{ disabled: !isValid }"
          href=""
          class="btn btn--primary w-full"
        >
          Update Cart Item
        </a>
        <a
          v-else-if="isAddable"
          @click.prevent="addToCart"
          :class="{ disabled: !isValid }"
          href=""
          class="btn btn--primary w-full"
        >
          Add to Cart
        </a>
        <nuxt-link
          v-else
          :to="stepLinks"
          :class="{ disabled: !isValid }"
          class="btn btn--primary w-full"
        >
          Next Step
        </nuxt-link>
        <span v-if="!isValid" class="summary-requirements">
          {{ requirementsMsg }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { currencyFormat } from '@/utils/helpers'

export default {
  filters: {
    defaultValue(value) {
      return value || '—'
    }
  },
  computed: {
    requirementsMsg() {
      let type = 'Shape and Colour'
      if (this.$route.name === 'products-slug-build-customize') {
        type = 'Dimensions, Fold, Skirt, Strap and Handle'
      }
      if (this.$route.name === 'products-slug-build-upgrades') {
        type = 'Dual C Channel, Production Time, Junk Removal'
      }
      return `${type} options must be completed in order to continue`
    },
    isAddable() {
      return this.$route.name === 'products-slug-build-upgrades'
    },
    isUpdatable() {
      return (
        this.isAddable &&
        this.$store.getters['checkout/hasCheckoutItem'](this.$route.params.slug)
      )
    },
    checkoutItem() {
      return this.$store.getters['checkout/getCheckoutItem'](
        this.$route.params.slug
      )
    },
    colorName() {
      return this.color ? this.color.label : '—'
    },
    colorBckgd() {
      if (this.color && this.color.label) {
        const img = this.color.label
          .split(' ')
          .join('-')
          .toLowerCase()
        return `background: no-repeat url("/img/colors/${img}.jpg") center center / cover`
      }

      // if (this.color && this.color.image) {
      //   return `background: no-repeat url("/img/${this.color.image}") center center / cover`
      // }
      return null
    },
    foldBckgd() {
      if (this.fold) {
        return `background: no-repeat url("/img/fold/fold-${this.fold}.png") center center / cover`
      }
      return null
    },
    ...mapGetters({
      makeModel: 'builder/makeModel',
      productTitle: 'builder/productTitle',
      totalPrice: 'builder/totalPrice',
      productId: 'builder/productId',
      selectedOptions: 'builder/selectedOptions',
      makeId: 'builder/makeId',
      modelId: 'builder/modelId',
      isStep1Valid: 'builder/isStep1Valid',
      isStep2Valid: 'builder/isStep2Valid',
      isStep3Valid: 'builder/isStep3Valid'
    }),
    fold() {
      if (
        this.shape &&
        this.shape.configuration &&
        this.shape.configuration.fold
      ) {
        return this.shape.configuration.fold
      }
      return null
    },
    dimensions() {
      return this.shape &&
        this.shape.configuration &&
        this.shape.configuration.dimensions
        ? this.shape.configuration.dimensions
        : null
    },
    color() {
      return this.$store.getters['builder/retrieveOption']('colours')
    },
    shape() {
      return this.$store.getters['builder/retrieveOption']('shape')
    },
    currentSkirt() {
      return this.$store.getters['builder/retrieveOption']('skirt')
    },
    currentCombo() {
      return this.$store.getters['builder/retrieveOption']('combo')
    },
    currentComboPrice() {
      if (this.currentCombo.id) {
        return `(+${currencyFormat(this.currentCombo.sale_price)})`
      }
      return ''
    },
    makeModelTitle() {
      if (this.makeModel.make) {
        return `${this.makeModel.make.name} • ${this.makeModel.model.name}`
      }
      return ''
    },
    measureBckgd() {
      if (this.shape && this.shape.label) {
        const shape = `${this.shape.label
          .split(' ')
          .join('-')
          .toLowerCase()}.png`
        return `background: no-repeat url('/img/measures/${shape}') center center / cover`
      }
      return null
    },
    otherOptions() {
      return this.$store.getters['builder/selectedOptions']
    },
    otherCustomizeOptions() {
      const options = this.selectedOptions
      return options.filter(
        (option) =>
          option.step === 'customize' &&
          !['shape', 'colours'].includes(option.slug)
      )
    },
    otherUpgradesOptions() {
      const options = this.selectedOptions
      return options.filter(
        (option) =>
          option.step === 'upgrades' &&
          !['shape', 'colours'].includes(option.slug)
      )
    },
    isValid() {
      const route = this.$route.name
      if (route === 'products-slug-build-shape' && this.isStep1Valid) {
        return true
      }
      if (route === 'products-slug-build-customize' && this.isStep2Valid) {
        return true
      }
      if (route === 'products-slug-build-upgrades' && this.isStep3Valid) {
        return true
      }
      return false
    },
    summaryLinkLabel() {
      const route = this.$route.name
      if (route === 'products-slug-build-upgrades' && this.isStep3Valid) {
        return 'Add to Cart'
      }
      return 'Next Step'
    },
    stepLinks() {
      const name =
        this.isStep1Valid && this.isStep2Valid
          ? 'products-slug-build-upgrades'
          : this.isStep1Valid
          ? 'products-slug-build-customize'
          : null
      return {
        name,
        params: { slug: this.$route.params.slug }
      }
    },
    title() {
      const title =
        this.shape && this.shape.label
          ? `${this.productTitle} • ${this.shape.label}`
          : this.productTitle
      return title
    }
  },
  methods: {
    // summaryLink() {
    //   if (this.isStep1Valid) {
    //     this.$router.push({
    //       name: 'products-slug-build-customize',
    //       params: { slug: this.$route.params.slug }
    //     })
    //     return
    //   }
    //   if (this.isStep2Valid) {
    //     this.$router.push({
    //       name: 'products-slug-build-upgrades',
    //       params: { slug: this.$route.params.slug }
    //     })
    //     return
    //   }
    //   this.addToCart()
    // },
    async addToCart() {
      await this.$store.dispatch('checkout/addToCart', {
        productId: this.productId,
        quantity: 1,
        makeId: this.makeId,
        modelId: this.modelId,
        options: this.selectedOptions,
        makeModel: this.makeModel
      })
      await this.$router.push('/cart')
    },
    async updateCartItem() {
      await this.$store.dispatch('checkout/deleteCartItem', this.checkoutItem)
      await this.addToCart()
    },
    format(price) {
      return currencyFormat(price)
    },
    isOtherOption(slug) {
      return !['shape', 'colours'].includes(slug)
    },
    optionValue(option) {
      if (option.slug === 'instructions') {
        return 'Added'
      }
      if (!option.option_field_id) {
        return option.value
      }
      return option.label
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-summary {
  &__fold {
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.summary-cta:hover .summary-requirements {
  opacity: 1;
  visibility: visible;
}
.text-xsm {
  font-size: 13px;
}
.summary-requirements {
  visibility: hidden;
  transition: all 0.3s;
  opacity: 0;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  z-index: 1;
  opacity: 1;
  background: rgba(0, 0, 0, 0.75);
  padding: 8px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0.75);
    border-width: 8px;
    margin-left: -8px;
  }
}
</style>
