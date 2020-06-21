export const state = () => ({
  cart: [
    {
      // product detail
      id: 1,
      price: 199,
      quantity: 2
    }
  ],
  subtotal: 0,
  taxRate: 0.13,
  taxAmount: 0,
  total: 0,
  discount: null
})

export const getters = {
  getCartSubTotal: (state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity),
  getCartTotal: (state) => state.total,
  existInCart: (state) => (productId) =>
    !!state.cart.find((item) => item.id === productId)
}

export const mutations = {
  updateTotal({ state }) {
    // TODO: Incorporate discount
    state.subtotal = state.cart
      .reduce((total, item) => total + item.price * item.quantity)
      .toFixed(2)
    state.taxAmount = (
      parseFloat(state.subtotal) * parseFloat(state.taxRate)
    ).toFixed(2)
    state.total = (
      parseFloat(state.subtotal) + parseFloat(state.taxAmount)
    ).toFixed(2)
  },
  updateQuantity({ state }, { product, direction = 'increment' }) {
    const cartProduct = state.cart.find((item) => item.id === product.id)
    direction === 'increment' ? cartProduct.quantity++ : cartProduct.quantity--
  },
  addProduct({ state }, product) {
    state.cart = state.cart.push(product)
  },
  removeProduct({ state }, productId) {
    state.cart = state.cart.filter((item) => item.id !== productId)
  }
}

export const actions = {
  async addProductToCart({ commit, getters }, product) {
    try {
      // Push to DB
      const updateOrAdd = getters.existInCart(product.id)
        ? 'updateQuantity'
        : 'addProduct'
      await commit(updateOrAdd, product)
      await commit('updateTotal')
    } catch (err) {
      console.error(err)
    }
  },
  async decrementProductQuantity({ commit, dispatch }, product) {
    try {
      // Push to DB
      product.quantity > 1
        ? await commit('updateQuantity', { product, direction: 'decrement' })
        : await dispatch('removeProduct', product)
      await commit('updateTotal')
    } catch (err) {
      console.error(err)
    }
  },
  async removeProductFromCart({ commit }, product) {
    try {
      // Push to DB
      await commit('removeProduct', product.id)
      await commit('updateTotal')
    } catch (err) {
      console.error(err)
    }
  }
}
