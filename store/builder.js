import Vue from 'vue'
import { currencyFormat, intersection } from '@/utils/helpers'

const setDefaultDimensions = (model, dimensions) => {
  if (model && dimensions) {
    const dims = dimensions
    const dimsKeys = Object.keys(dims)
    if (dimsKeys.length >= 1) {
      dims.a = model.dimension_a || null
    }
    if (dimsKeys.length >= 2) {
      dims.b = model.dimension_b || null
    }
    if (dimsKeys.length >= 3) {
      const lastKey = dimsKeys.reverse()[0]
      dims[lastKey] = model.radius_c || null
    }
    return dims
  }
}

const validDimensions = (dimensions) => {
  if (dimensions) {
    let isValid = true
    const dimsKeys = Object.keys(dimensions)
    for (const dimKey of dimsKeys) {
      if (!dimensions[dimKey]) {
        isValid = false
        break
      }
    }
    return isValid
  }
  return false
}

const getSlugs = (options) => {
  return options.reduce((arr, opt) => {
    const resp = arr || []
    resp.push(opt.slug)
    return resp
  }, [])
}

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
    reg_price: 0,
    sale_price: 0,
    cost: 0,
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
  options: [],
  makeModel: {
    make: null,
    model: null
  }
})

export const getters = {
  selectedOptions: (state) => state.options,
  hasOption: (state) => (slug) =>
    !!state.product.options.find((option) => option.slug === slug),

  hasOptionAmong: (state) => (slugs) =>
    !!state.product.options.find((option) => slugs.includes(option.slug)),

  isStep1Valid: (state) => {
    const optionSlugs = getSlugs(state.options)
    const needed = ['shape', 'colours']
    const inters = intersection(needed, optionSlugs)
    return JSON.stringify(inters) === JSON.stringify(needed)
  },

  isStep2Valid: (state, getters) => {
    const optionSlugs = getSlugs(state.options)
    const needed = [
      'strap-options',
      'strap-location',
      'strap-length',
      'skirt-length',
      'skirt-info',
      'handle-options'
    ]
    const inters = intersection(needed, optionSlugs)
    const hasNeededInters = JSON.stringify(inters) === JSON.stringify(needed)
    const dimensions = getters.shapeConfig
      ? getters.shapeConfig.dimensions
      : null
    const hasFold = getters.shapeConfig ? !!getters.shapeConfig.fold : null
    const hasDimensions = validDimensions(dimensions)
    return hasNeededInters && hasDimensions && hasFold
  },

  isStep3Valid: (state) => {
    const optionSlugs = getSlugs(state.options)
    const needed = ['product-time', 'dual-c-channel', 'junk-removal']
    const inters = intersection(needed, optionSlugs)
    return JSON.stringify(inters) === JSON.stringify(needed)
  },

  makeModel: (state) => state.makeModel,
  makeId: (state) => (state.makeModel.make ? state.makeModel.make.id : null),
  modelId: (state) => (state.makeModel.model ? state.makeModel.model.id : null),
  productId: (state) => state.product.id,
  productTitle: (state) => state.product.title,

  retrieveOption: (state) => (slug) =>
    state.options.find((option) => option.slug === slug),

  retrieveProductOption: (state) => (slug) =>
    state.product.options.find((option) => option.slug === slug),

  shapeConfig: (state) => {
    const shape = state.options.find((option) => option.slug === 'shape')
    if (shape && shape.configuration) {
      return shape.configuration
    }
    return null
  },
  shapeDimensions: (state) => {
    const shape = state.options.find((option) => option.slug === 'shape')
    if (shape && shape.configuration && shape.configuration.dimensions) {
      return shape.configuration.dimensions
    }
    return null
  },

  stepOptions: (state) => (step) =>
    state.product.options.filter((option) => option.step === step),

  totalPrice: (state) => {
    const subtotal = state.product.sale_price || state.product.reg_price
    const optionsPrice = state.options.reduce((arr, opt) => arr + opt.price, 0)
    return currencyFormat(Number(subtotal) + Number(optionsPrice))
  },

  isActive: (state) => ({ slug, id, isField = false }) => {
    const type = state.options.find((option) => option.slug === slug)
    if (type) {
      const typeId = isField ? type.option_field_id : type.id
      return typeId === id
    }
    return false
    // return type ? type.id === id : false
  },

  isActiveFold: (state) => (dir) => {
    const shape = state.options.find((option) => option.slug === 'shape')
    if (shape && shape.configuration && shape.configuration.fold) {
      return shape.configuration.fold === dir
    }
    return false
  }
  // isActiveColor: (state) => (colorId) => state.options.color.id === colorId,
  // isActiveFold: (state) => (foldId) => state.options.fold.id === foldId,
  // isActiveShape: (state) => (shapeId) => state.options.shape.id === shapeId
}

export const mutations = {
  clearBuilder(state) {
    state.product = {
      id: null,
      permalink: null,
      title: null,
      subtitle: null,
      status: null,
      overview: null,
      description: null,
      features: null,
      reg_price: 0,
      sale_price: 0,
      cost: 0,
      tax_code_id: null,
      download_link: null,
      is_special_order: null,
      video_link: null,
      vendor: null,
      images: null,
      file: null,
      taxCode: null,
      options: []
    }
    state.options = []
    state.makeModel = {
      make: null,
      model: null
    }
  },

  setLocalItem(state, { productId, dimensions, quantity, options, makeModel }) {
    let builder = { [productId]: { quantity, dimensions, makeModel, options } }
    const stringBuilder = localStorage.getItem('builder')
    if (stringBuilder) {
      builder = JSON.parse(stringBuilder)
      builder[productId] = { quantity, dimensions, makeModel, options }
    }
    localStorage.setItem('builder', JSON.stringify(builder))
  },

  removeLocalItem(state, productId) {
    const stringBuilder = localStorage.getItem('builder')
    let builder = null
    if (stringBuilder) {
      builder = JSON.parse(stringBuilder)
      delete builder[productId]
      console.log('OK', builder, productId, builder[productId])
    }
    console.log(builder)
    localStorage.setItem('builder', JSON.stringify(builder))
  },

  setDimensions(state, dimensions) {
    const optIndex = state.options.findIndex(
      (option) => option.slug === 'shape'
    )
    if (optIndex === -1) return
    const option = state.options[optIndex]
    if (option && option.configuration) {
      state.options[optIndex].configuration.dimensions = dimensions
      // const types = Object.keys(dimensions)
      // for (const type of types) {

      // Vue.set(
      //   state.options[optIndex].configuration.dimensions,
      //   type,
      //   dimensions[type]
      // )
      // }
    }
  },
  setFold(state, fold) {
    const optIndex = state.options.findIndex(
      (option) => option.slug === 'shape'
    )
    if (optIndex === -1) return
    if (state.options[optIndex]) {
      Vue.set(state.options[optIndex].configuration, 'fold', fold)
    }
  },
  setMakeModel(state, { make, model, presetDims = true }) {
    state.makeModel = {
      make,
      model
    }
    if (setDefaultDimensions) {
      const shape = state.options.find((option) => option.slug === 'shape')
      if (shape && shape.configuration && shape.configuration.dimensions) {
        shape.configuration.dimensions = setDefaultDimensions(
          model,
          shape.configuration.dimensions
        )
      }
    }
  },
  setProduct(state, product) {
    state.product = product
  },

  setProductOptions(state, options) {
    state.options = options
  },

  setOption(state, { type, option, title, optionId, step = null }) {
    const toSet = { ...option }
    toSet.slug = type
    toSet.title = title
    if (!toSet.type || !['single', 'number'].includes(toSet.type)) {
      toSet.option_field_id = option.id
    }
    toSet.id = optionId
    toSet.step = step
    delete toSet.__typename
    const optIndex = state.options.findIndex((option) => option.slug === type)
    if (optIndex !== -1) {
      Vue.set(state.options, optIndex, toSet)
      return
    }
    state.options.push(toSet)
  },

  setShapeOption(state, { option, optionId }) {
    const toSet = { ...option }
    toSet.slug = 'shape'
    toSet.option_field_id = option.id
    toSet.id = optionId
    delete toSet.__typename
    if (option.configuration && typeof option.configuration !== 'object') {
      const config = JSON.parse(option.configuration)
      toSet.configuration = config
      // Set base dimensions
      if (state.makeModel.model && config && config.dimensions) {
        toSet.configuration.dimensions = setDefaultDimensions(
          state.makeModel.model,
          config.dimensions
        )
      }
    }
    const prIndex = state.options.findIndex((option) => option.slug === 'shape')
    if (prIndex !== -1) {
      Vue.set(state.options, prIndex, toSet)
      return
    }
    state.options.push(toSet)
  },
  unsetOption(state, slug) {
    state.options = state.options.filter((opt) => opt.slug !== slug)
  }
}

export const actions = {
  presetConfig({ commit }, { make, model }) {
    commit('setMakeModel', { make, model })
  },
  async presetProduct({ commit, dispatch }, product) {
    await commit('clearBuilder')
    await commit('setProduct', product)
    await dispatch('presetOptions')
  },
  async presetOptions({ state, commit, getters }) {
    const stringBuilder = localStorage.getItem('builder')
    if (!stringBuilder) return
    const builder = JSON.parse(stringBuilder)
    const item = builder[state.product.id]
    if (item) {
      await commit('setProductOptions', item.options)
      const make = item.makeModel.make
      const model = item.makeModel.model
      const presetDims = false
      await commit('setMakeModel', { make, model, presetDims })
      await commit('setDimensions', item.dimensions)
    }
  }
}
