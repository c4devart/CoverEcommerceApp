<template>
  <BaseModal
    :active="active"
    @cancel="$emit('cancel')"
    type="delete"
    title="Delete Address"
  >
    <p class="text-grey-700 text-center my-4">
      Are you sure you want to delete <br />
      {{ deleteAddress }}?
    </p>
    <BaseBtn
      @click.native="deleteConfirm"
      label="Delete Address"
      class="mt-6 btn-del"
    />
  </BaseModal>
</template>

<script>
import BaseBtn from '@/components/base/BaseBtn'
import BaseModal from '@/components/base/BaseModal'

export default {
  components: {
    BaseBtn,
    BaseModal
  },
  props: {
    active: Boolean,
    delete: {
      type: Object,
      required: true
    }
  },
  computed: {
    deleteAddress() {
      if (this.delete.item) {
        return `${this.delete.item.street} ${this.delete.item.city}, ${this.delete.item.state_province}`
      }
      return 'this address'
    }
  },
  methods: {
    deleteConfirm() {
      this.$store.dispatch('customer/deleteCustomerAddress', this.delete.index)
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped></style>
