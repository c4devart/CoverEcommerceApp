import Vue from 'vue'
import { currencyFormat } from '@/utils/helpers'

export const state = () => ({
  product: {
    id: null,
    permalink: null,
    title: null,
    subtitle: null,
    status: null,
    overview: null,
    description: null,
    features: null,
    reg_price: null,
    sale_price: null,
    cost: null,
    tax_code_id: null,
    download_link: null,
    is_special_order: null,
    video_link: null,
    vendor: null,
    images: null,
    file: null,
    taxCode: null,
    options: null
  },
  options: {
    shape: {
      id: null,
      image: null,
      label: null,
      dimensions: null
    },
    color: {
      id: null,
      image: null,
      label: null
    },
    fold: {
      id: null,
      image: null,
      label: null
    },
    skirt: {
      length: null,
      style: null
    },
    combo: {
      id: null,
      label: null,
      sale_price: 0
    }
  },
  // TODO: See how to arrange the current config when it comes to add the product to cart
  subtitle: null,
  makeModel: {
    make: null,
    model: null
  },
  shape: {
    id: null,
    image: null,
    label: null,
    dimensions: null
  },
  color: {
    id: null,
    image: null,
    label: null
  },
  fold: {
    id: null,
    image: null,
    label: null
  },
  skirt: {
    length: null,
    style: null
  },
  strap: null,
  handle: null,
  reinforcement: null
})

export const getters = {
  getProductTitle: (state) => (state.product ? state.product.title : null),
  getTotalPrice: (state) => {
    let total = 0
    if (state.product) {
      total = state.product.sale_price || state.product.reg_price
    }
    if (state.options.combo.id) {
      total += state.options.combo.sale_price
    }
    return currencyFormat(total)
  },

  getStepShapeOptions: (state) =>
    state.product.options.filter((option) => option.step === 'shape'),
  getStepCustomizeOptions: (state) =>
    state.product.options.filter((option) => option.step === 'customize'),
  getStepUpgradesOptions: (state) =>
    state.product.options.filter((option) => option.step === 'upgrades'),

  getOption: (state) => (option) => state.options[option],
  getAvailableOption: (state) => (slug) =>
    state.product.options.find((option) => option.slug === slug),
  getOptions: (state) => state.product.options,
  getMakeModel: (state) => state.makeModel,

  hasOption: (state) => (slug) =>
    !!state.product.options.find((option) => option.slug === slug),

  hasOptionAmong: (state) => (slugs) =>
    !!state.product.options.find((option) => slugs.includes(option.slug)),

  currentShapeDimensions: (state) =>
    state.options.shape.configuration
      ? state.options.shape.configuration.dimensions
      : null,
  isActiveColor: (state) => (colorId) => state.options.color.id === colorId,
  isActiveFold: (state) => (foldId) => state.options.fold.id === foldId,
  isActiveShape: (state) => (shapeId) => state.options.shape.id === shapeId
}

export const mutations = {
  setColor(state, color) {
    state.color = color
  },
  setDimension(state, dimensions) {
    if (
      state.options.shape.configuration &&
      state.options.shape.configuration.dimensions
    ) {
      const types = Object.keys(dimensions)
      for (const type of types) {
        state.options.shape.configuration.dimensions[type] = dimensions[type]
      }
    }
  },
  setMakeModel(state, { make, model }) {
    state.makeModel = {
      make,
      model
    }
  },
  setShapeOption(state, option) {
    state.options.shape = option
    if (option.configuration) {
      const config = JSON.parse(option.configuration)
      state.options.shape.configuration = config
    }
  },
  setOption(state, { type, option }) {
    Vue.set(state.options, type, option)
  },
  setModel(state, model) {
    state.model = model
  },
  setProduct(state, product) {
    state.product = product
  },
  setEnergySavingCombo(state, combo) {
    state.options.combo = combo
  }
}

export const actions = {
  presetConfig({ commit }, { make, model }) {
    commit('setMakeModel', { make: make.name, model: model.name })
  },
  presetProduct({ commit }, product) {
    commit('setProduct', product)
    // TODO: set the config here
  }
}
