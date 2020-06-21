<template>
  <div>
    <section
      v-if="address"
      class="checkout-shipping-address border-grey-200 border"
    >
      <div class="lg:flex w-full">
        <div class="w-full lg:w-1/2 py-8 pl-10 flex flex-col">
          <div class="mb-5 text-grey-600 font-normal leading-normal">
            <div class="font-semibold">{{ address.name }}</div>
            <div>{{ address.street }}</div>
            <div>{{ address.city }}</div>
            <div>{{ address.zip_postal }}</div>
            <div>Tel: {{ address.phone }}</div>
          </div>
          <div class="flex">
            <button @click="editAddress" class="font-semibold text-blue-600">
              Edit Address
            </button>
            <span class="text-xl text-grey-300 mx-2">•</span>
            <button @click="addAddress" class="font-semibold text-blue-600">
              Add New
            </button>
          </div>
        </div>
        <div class="w-full h-56 lg:h-auto lg:w-1/2 bg-grey-100">
          <CheckoutShippingMap v-if="hasGeo" :pos="address.geo" />
        </div>
      </div>
    </section>
    <p v-else class="mt-5 text-sm text-grey-500">
      No address available.
      <a @click.prevent="showModal = true" href="" class="text-blue-500">
        Add a new one
      </a>
    </p>
    <BaseAddressesAddEditModal
      v-if="showModal"
      :active="showModal"
      :initial-address="editableAddress"
      @cancel="showModal = false"
      @update="updateCheckoutAddress"
      is-shipping
    />
  </div>
</template>
<script>
import BaseAddressesAddEditModal from '@/components/base/BaseAddressesAddEditModal'
import CheckoutShippingMap from '@/components/checkout/CheckoutShippingMap'

export default {
  components: {
    CheckoutShippingMap,
    BaseAddressesAddEditModal
  },
  data: () => ({
    showModal: false,
    editableAddress: null
  }),
  computed: {
    address() {
      return this.$store.getters['customer/getShippingAddress']
    },
    hasGeo() {
      return (
        this.address &&
        this.address.geo &&
        this.address.geo.lat !== '0' &&
        this.address.geo.lng !== '0'
      )
    }
  },
  methods: {
    editAddress() {
      this.editableAddress = this.address
      this.showModal = true
    },
    addAddress() {
      this.editableAddress = null
      this.showModal = true
    },
    updateCheckoutAddress() {
      this.$store.dispatch('checkout/addCheckoutInfo', {
        billing_address: this.address,
        shipping_address: this.address
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout-shipping-address {
  box-shadow: 0 2px 5px 0 rgba(0, 83, 128, 0.1);
}
</style>
