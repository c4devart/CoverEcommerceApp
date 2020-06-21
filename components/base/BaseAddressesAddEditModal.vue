<template>
  <BaseModal :active="active" @cancel="$emit('cancel')" :title="modalTitle">
    <BaseAlert v-if="error" type="error" class="mb-3">
      {{ error }}
    </BaseAlert>
    <ValidationObserver ref="observer">
      <FormItem
        v-model="form.name"
        label="Name"
        required
        placeholder="Eg. Home, Office"
      />
      <FormItem
        v-model="form.street"
        label="Street Address"
        required
        class="mt-3"
      />
      <FormItem v-model="form.city" label="City" required class="mt-3" />
      <div class="flex justify-between">
        <FormMultiselect
          v-model="form.state_province"
          :options="$options.$_provinces"
          label="label"
          label-text="Province"
          track-by="value"
          required
          class="flex-1 mt-3"
        />
        <FormItem
          v-model="form.zip_postal"
          label="Postal Code"
          required
          class="ml-6 mt-3"
        />
      </div>
      <FormItem
        v-model="form.country"
        label="Country"
        required
        class="mt-3"
        disabled
      />
      <FormItem v-model="form.phone" label="Phone" required class="mt-3" />
      <FormCheckbox
        v-if="!isShipping"
        v-model="form.is_default"
        class="mt-4"
        label="Use as default address"
      />
    </ValidationObserver>
    <BaseBtn @click.native="postForm" :label="btnLabel" class="btn-add mt-6" />
  </BaseModal>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

import BaseAlert from '@/components/base/BaseAlert'
import BaseBtn from '@/components/base/BaseBtn'
import BaseModal from '@/components/base/BaseModal'
import FormCheckbox from '@/components/form/FormCheckbox'
import FormItem from '@/components/form/FormItem'
import FormMultiselect from '@/components/form/FormMultiselect'

export default {
  $_provinces: [
    { label: 'Alberta', value: 'AB' },
    { label: 'British Columbia', value: 'BC' },
    { label: 'Manitoba', value: 'MB' },
    { label: 'New Brunswick', value: 'NB' },
    { label: 'Newfoundland and Labrador', value: 'NF' },
    { label: 'Northwest Territories', value: 'NT' },
    { label: 'Nova Scotia', value: 'NS' },
    { label: 'Nunavut', value: 'NU' },
    { label: 'Ontario', value: 'ON' },
    { label: 'Prince Edward Island', value: 'PE' },
    { label: 'Quebec', value: 'QC' },
    { label: 'Saskatchewan', value: 'SK' },
    { label: 'Yukon Territory', value: 'YT' }
  ],

  components: {
    BaseAlert,
    BaseBtn,
    BaseModal,
    FormCheckbox,
    FormItem,
    FormMultiselect,
    ValidationObserver
  },
  props: {
    active: Boolean,
    initialAddress: Object,
    isShipping: Boolean
  },
  data: () => ({
    error: null,
    form: {
      name: null,
      street: null,
      city: null,
      phone: null,
      country: null,
      state_province: null,
      zip_postal: null,
      is_default: false
    }
  }),
  computed: {
    addresses() {
      return this.$store.getters['customer/getAddresses']
    },
    btnLabel() {
      return this.initialAddress ? 'Update Address' : 'Add New Address'
    },
    customer() {
      return this.$store.getters['customer/getCustomer']
    },
    modalTitle() {
      return this.initialAddress
        ? `Edit "${this.form.name}" Address`
        : 'Add New Address'
    }
  },
  created() {
    if (this.initialAddress) {
      this.form = { ...this.initialAddress }
    }
    this.form.is_default = this.isShipping || this.form.is_default
    this.form.country = 'Canada'
  },
  methods: {
    async postForm() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      const actionName = this.initialAddress
        ? 'customer/updateCustomerAddress'
        : 'customer/addCustomerAddress'
      await this.$store.dispatch(actionName, this.form)
      await this.$emit('update')
      await this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped></style>
