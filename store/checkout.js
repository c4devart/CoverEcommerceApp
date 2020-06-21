export const state = () => ({
  checkout: {
    id: null,
    customer_id: null,
    discount_code_id: null,
    discount: 0,
    subtotal: 0,
    shipping: 0,
    taxes: 0,
    total: 0,
    shipping_address: null,
    billing_address: null,
    card_info: null,
    special_instructions: null,
    customer: null,
    customer_info: null,
    items: []
  },
  cart: []
})

export const getters = {
  checkoutUuid: (state) =>
    state.checkout.id || localStorage.getItem('checkoutUuid'),
  getCart: (state) => state.checkout.items,
  getTotalItems: (state) =>
    state.checkout.items.reduce((sum, item) => sum + item.qty, 0),
  getCheckoutDetails: (state) => state.checkout,
  hasCheckoutItems: (state) => state.checkout.items.length > 0,
  getCheckoutItem: (state) => (permalink) =>
    state.checkout.items.find((item) => item.product.permalink === permalink),
  hasCheckoutItem: (state) => (permalink) =>
    !!state.checkout.items.find((item) => item.product.permalink === permalink)
}

export const mutations = {
  resetCheckout(state) {
    state.checkout = {
      id: null,
      customer_id: null,
      discount_code_id: null,
      discount: 0,
      subtotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0,
      shipping_address: null,
      billing_address: null,
      card_info: null,
      special_instructions: null,
      customer: null,
      customer_info: null,
      items: []
    }
  },
  resetCart(state) {
    state.cart = []
  },
  setCart(state) {
    if (state.checkout.items.length) {
      for (const product of state.checkout.items) {
        const updatable = state.cart.find(
          (pr) => pr.product_id === product.product_id
        )
        if (updatable) {
          updatable.qty += product.qty
          updatable.subtotal += product.subtotal
          updatable.shipping += product.shipping
          updatable.taxes += product.taxes
          updatable.total += product.total
          continue
        }
        state.cart.push(product)
      }
    }
  },
  setCheckout(state, data) {
    state.checkout = data
  },
  setCardInfo(state, cardInfo) {
    state.checkout.card_info = cardInfo
  },
  setCheckoutUuid(state, uuid) {
    state.checkout.id = uuid
  },
  setCustomerInfo(state, customerInfo) {
    state.checkout.customer_info = customerInfo
  },
  setCustomerId(state, customerId) {
    state.checkout.customer_info = customerId
  },
  setAddressesInfo(state, info) {
    state.checkout.shipping_address = info.shipping_address
    state.checkout.billing_address = info.billing_address
  },
  setCalculatedTaxes(state, taxes) {
    state.checkout.taxes = taxes
  }
  // setAddProductItem(state, productItem) {
  //   if (!state.cart.length) {
  //     state.cart.push(productItem)
  //     return
  //   }
  //   const product = state.cart.find(
  //     (pr) => pr.product_id === productItem.product_id
  //   )
  //   product.qty = product.qty + productItem.qty
  //   product.unit_price = product.unit_price + productItem.unit_price
  //   product.subtotal = product.subtotal + productItem.subtotal
  //   product.taxes = product.taxes + productItem.taxes
  //   product.total = product.total + productItem.total
  // }
}

export const actions = {
  async addCheckoutInfo({ commit, state }, info) {
    try {
      const { data } = await this.$axios.put(
        `api/checkout/${state.checkout.id}`,
        info
      )
      commit('setCalculatedTaxes', data.taxes)
      if (info.customer_info) {
        commit('setCustomerInfo', info.customer_info)
        return
      }
      if (info.customer_id) {
        commit('setCustomerId', info.customer_id)
        return
      }
      commit('setAddressesInfo', info)
    } catch (err) {
      console.error(err)
    }
  },
  clearCartCheckout({ commit }) {
    commit('resetCart')
    commit('resetCheckout')
  },
  async createCheckout({ commit }) {
    try {
      const { data } = await this.$axios.post('api/checkout')
      commit('setCheckoutUuid', data.id)
      localStorage.setItem('checkoutUuid', data.id)
    } catch (err) {
      console.error(err)
    }
  },
  async getCheckout({ commit, getters }) {
    if (getters.checkoutUuid) {
      try {
        const { data } = await this.$axios.get(
          `api/checkout/${getters.checkoutUuid}`
        )
        await commit('setCheckout', data)
        await commit('setCart')
      } catch (err) {
        console.error(err)
      }
    }
  },
  async addToCart(
    { state, dispatch, getters, commit },
    {
      productId,
      quantity,
      makeId = null,
      modelId = null,
      options = null,
      makeModel = null
    }
  ) {
    if (!getters.checkoutUuid) {
      await dispatch('createCheckout', { productId, quantity })
    }
    const item = await state.checkout.items.find(
      (pr) => pr.product_id.toString() === productId.toString()
    )
    const shape = options
      ? options.find((option) => option.slug === 'shape')
      : null

    if (shape) {
      let dimensions = null
      if (shape.configuration && shape.configuration.dimensions) {
        dimensions = shape.configuration.dimensions
      }
      await commit(
        'builder/setLocalItem',
        {
          productId,
          quantity,
          dimensions,
          makeModel,
          options
        },
        { root: true }
      )
    }

    item
      ? await dispatch('updateCartItem', {
          itemId: item.id,
          productId,
          makeId,
          modelId,
          options,
          qty: item.is_special_order
            ? quantity
            : Number(quantity) + Number(item.qty)
        })
      : await dispatch('addCartItem', {
          productId,
          quantity,
          makeId,
          modelId,
          options
        })
  },
  async addCartItem(
    { dispatch, getters, commit },
    { productId, quantity, makeId, modelId, options }
  ) {
    try {
      await this.$axios.post(`api/checkout/${getters.checkoutUuid}/items`, {
        product_id: productId,
        qty: quantity,
        make_id: makeId,
        model_id: modelId,
        options
      })

      await commit('builder/clearBuilder', '', { root: true })
      await dispatch('getCheckout')
    } catch (err) {
      console.error(err)
    }
  },
  async updateCartItem(
    { commit, dispatch, getters },
    { itemId, productId, qty, makeId, modelId, options }
  ) {
    try {
      await this.$axios.put(
        `api/checkout/${getters.checkoutUuid}/items/${itemId}`,
        {
          product_id: productId,
          qty: Number(qty),
          make_id: makeId,
          model_id: modelId,
          options
        }
      )
      await commit('builder/clearBuilder', '', { root: true })
      await dispatch('getCheckout')
    } catch (err) {
      console.error(err)
    }
  },
  async deleteCartItem({ getters, dispatch, commit }, item) {
    try {
      await this.$axios.delete(
        `api/checkout/${getters.checkoutUuid}/items/${item.id}`
      )
      await commit('builder/removeLocalItem', item.product_id, { root: true })
      await dispatch('getCheckout')
    } catch (err) {
      console.error(err)
    }
  }
}
