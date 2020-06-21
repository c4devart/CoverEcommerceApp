import Vue from 'vue'
import { getCustomer, updateCustomer } from '@/graphql/customer'

const cleanupPayload = (payload) => {
  delete payload.name
  delete payload.orders
  delete payload.__typename
  if (payload.addresses) {
    for (const addr of payload.addresses) {
      delete addr.__typename
      if (addr.geo) {
        delete addr.geo.__typename
      }
    }
  }
  if (payload.shipping_address) {
    delete payload.shipping_address.__typename
    if (payload.shipping_address.geo) {
      delete payload.shipping_address.geo.__typename
    }
  }
  if (payload.billing_address) {
    delete payload.billing_address.__typename
    if (payload.billing_address.geo) {
      delete payload.billing_address.geo.__typename
    }
  }
  if (payload.geo) {
    delete payload.geo.__typename
  }
  return payload
}

export const state = () => ({
  customer: null
})

export const getters = {
  getShippingAddress: (state) =>
    state.customer ? state.customer.shipping_address : null,
  getDefaultAddress: (state) => {
    if (state.customer && state.customer.addresses.length > 0) {
      const activeAddress = state.customer.addresses.find(
        (addr) => addr.is_default === true
      )
      return activeAddress || state.customer.addresses[0]
    }
    return null
  },
  getAddresses: (state) => {
    if (state.customer) {
      return state.customer.addresses
    }
    return null
  },
  getAddressesCount: (state) =>
    state.customer ? state.customer.addresses.length : 0,
  getCustomerId: (state) => (state.customer ? state.customer.id : null),
  getCustomer: (state) => state.customer,
  getOrders: (state) => (state.customer ? state.customer.orders : null),
  getOrder: (state) => (id) =>
    state.customer
      ? state.customer.orders.find((order) => order.id === id)
      : null,
  isDefaultAddress: (state) => (index) =>
    state.customer.addresses[index].is_default
}

export const mutations = {
  setDeleteAddress(state, index) {
    state.customer.addresses.splice(index, 1)
  },
  setUpdatableAddress(state, data) {
    const addrIndex = state.customer.addresses.findIndex(
      (addr) => addr.id === data.id
    )
    delete data.id
    delete data.__typename
    Vue.set(state.customer.addresses, addrIndex, data)
  },
  setNewAddress(state, data) {
    state.customer.addresses.push(data)
  },
  setShippingBillingAddress(state, index) {
    state.customer.shipping_address = state.customer.addresses.length
      ? state.customer.addresses[index]
      : null
    state.customer.billing_address = state.customer.addresses.length
      ? state.customer.addresses[index]
      : null
  },
  setCustomer(state, data) {
    state.customer = data
    if (!state.customer.addresses) {
      state.customer.addresses = []
    }
  },
  setDefaultAddress(state, index) {
    const addresses = state.customer.addresses
    for (let i = 0; i < addresses.length; i++) {
      delete addresses[i].__typename
      addresses[i].is_default = i === index
    }
  }
}

export const actions = {
  async getCustomer({ commit }) {
    const authUser = this.$auth.user
    if (authUser) {
      const client = this.app.apolloProvider.defaultClient
      try {
        const { data } = await client.query({
          query: getCustomer,
          variables: { id: authUser.id },
          fetchPolicy: 'no-cache'
        })
        await commit('setCustomer', data.customer)
      } catch (err) {
        return err
      }
    }
  },

  async getLatLongInfo({ state }, payload) {
    try {
      const addr = `${payload.street}+${payload.city}+${payload.zip_postal}+${payload.country}`
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${process.env.GOOGLE_API_KEY}`
      )
      const data = await resp.json()
      if (data.results.length) {
        return {
          lng: data.results[0].geometry.location.lng,
          lat: data.results[0].geometry.location.lat
        }
      }
      return {
        lng: 0,
        lat: 0
      }
    } catch (err) {
      console.error(err)
      return {
        lng: 0,
        lat: 0
      }
    }
  },

  async updateCustomer({ commit, state }, payload) {
    const authUser = this.$auth.user
    const client = this.app.apolloProvider.defaultClient
    const input = cleanupPayload(payload)
    try {
      await client.mutate({
        mutation: updateCustomer,
        variables: { id: authUser.id, input },
        fetchPolicy: 'no-cache'
      })
    } catch (err) {
      return err
    }
  },

  async addCustomerAddress({ commit, dispatch, state }, payload) {
    const index = state.customer.addresses.length
    payload.geo = await dispatch('getLatLongInfo', payload)
    await commit('setNewAddress', payload)

    if (payload.is_default) {
      await commit('setDefaultAddress', index)
      await commit('setShippingBillingAddress', index)
    }
    await dispatch('updateCustomer', state.customer)
  },

  async updateCustomerAddress({ commit, dispatch, state }, payload) {
    payload.geo = await dispatch('getLatLongInfo', payload)
    await commit('setUpdatableAddress', payload)
    if (payload.is_default) {
      const index = state.customer.addresses.findIndex(
        (addr) => addr.id === payload.id
      )
      await commit('setShippingBillingAddress', index)
    }
    await dispatch('updateCustomer', state.customer)
  },

  async deleteCustomerAddress({ commit, dispatch, state }, index) {
    await commit('setDeleteAddress', index)
    await dispatch('updateCustomer', state.customer)
  },

  async updateCustomerDefaultAddress({ commit, dispatch, state }, index) {
    await commit('setDefaultAddress', index)
    await commit('setShippingBillingAddress', index)
    await dispatch('updateCustomer', state.customer)
  }
}
