<template>
  <header class="account-address mb-6 flex justify-between items-center">
    <h2 class="text-lg font-bold">My Addresses</h2>
    <BaseBtn
      @click.native="showModal = !showModal"
      label="Add New Address"
      type="secondary"
      class="add-address"
    />
    <BaseAddressesAddEditModal
      v-if="showModal"
      :active="showModal"
      @cancel="showModal = false"
    />
  </header>
</template>

<script>
import BaseAddressesAddEditModal from '@/components/base/BaseAddressesAddEditModal'
import BaseBtn from '@/components/base/BaseBtn'

export default {
  components: {
    BaseAddressesAddEditModal,
    BaseBtn
  },
  data: () => ({
    showModal: false
  })
}
</script>

<style lang="scss" scoped></style>
