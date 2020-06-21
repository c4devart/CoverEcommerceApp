<template>
  <section class="account-addresses max-w-lg m-auto p-4">
    <AccountAddressesHeader />
    <template v-if="addresses && addresses.length">
      <AccountAddressesItem
        v-for="(address, i) in addresses"
        :key="i"
        :key-id="i"
        :address="address"
        @delete="deleteConfirm"
      />
    </template>
    <p v-else class="mt-8 text-grey-500 text-center font-semi text-sm">
      No address available.
    </p>
    <AccountAddressesDeleteModal
      v-if="showDeleteModal"
      :active="showDeleteModal"
      :delete="deleteAddress"
      @cancel="showDeleteModal = false"
    />
  </section>
</template>

<script>
import AccountAddressesDeleteModal from '@/components/account/AccountAddressesDeleteModal'
import AccountAddressesHeader from '@/components/account/AccountAddressesHeader'
import AccountAddressesItem from '@/components/account/AccountAddressesItem'

export default {
  layout: 'customer',
  components: {
    AccountAddressesDeleteModal,
    AccountAddressesHeader,
    AccountAddressesItem
  },
  head: () => ({
    title: 'Addresses / HotTub Covers Canada'
  }),
  data: () => ({
    deleteAddress: null,
    showDeleteModal: false
  }),
  computed: {
    addresses() {
      return this.$store.getters['customer/getAddresses']
    }
  },
  methods: {
    deleteConfirm(el) {
      this.deleteAddress = el
      this.showDeleteModal = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
