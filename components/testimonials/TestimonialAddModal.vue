<template>
  <BaseModal
    :active="active"
    @cancel="$emit('cancel')"
    title="Add a Review"
    no-icon
  >
    <BaseAlert v-if="hasAlert" :type="alertType" class="mb-3">
      {{ alertMessage }}
    </BaseAlert>
    <div v-if="reviewSubmitted" class="flex justify-center">
      <button
        @click="$emit('cancel')"
        class="mt-3 text-grey-600 hover:text-blue-500"
      >
        Close
      </button>
    </div>
    <template v-if="!reviewSubmitted">
      <ValidationObserver ref="observer">
        <FormItem v-model="form.customer_name" label="Name" required />
        <FormRating v-model="form.rating" class="mt-3" />
        <FormItem
          id="form-product_name"
          v-model="form.product_name"
          label="Product Name"
          required
          class="mt-2"
        />
        <FormItem
          id="form-testimonial"
          v-model="form.testimonial"
          label="Testimonial"
          type="textarea"
          required
          class="mt-3"
        />
        <FormItem v-model="form.customer_email" label="Email" class="mt-2" />
        <div class="flex justify-between">
          <FormItem v-model="form.city" label="City" class="mr-6 mt-3" />
          <FormMultiselect
            v-model="form.province"
            :options="$options.$_provinces"
            label="label"
            label-text="Province"
            track-by="label"
            class="flex-1 mt-3"
          />
        </div>
      </ValidationObserver>
      <BaseBtn
        @click.native="postForm"
        label="Submit Review"
        class="btn-add mt-6"
      />
    </template>
  </BaseModal>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

import BaseAlert from '@/components/base/BaseAlert'
import BaseBtn from '@/components/base/BaseBtn'
import BaseModal from '@/components/base/BaseModal'
import FormRating from '@/components/form/FormRating'
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
    FormRating,
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
    reviewSubmitted: false,
    form: {
      customer_name: null,
      product_name: null,
      testimonial: null,
      rating: null,
      customer_email: null,
      city: null,
      province: null
    }
  }),
  computed: {
    alertType() {
      return this.reviewSubmitted ? 'success' : 'error'
    },
    alertMessage() {
      return this.reviewSubmitted
        ? 'Your review has been submitted. Thank you!'
        : this.error
    },
    hasAlert() {
      return !!this.error || this.reviewSubmitted
    }
  },
  methods: {
    async postForm() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      try {
        const { data } = await this.$axios.post('api/testimonials', this.form)
        console.log(data)
        this.reviewSubmitted = true
      } catch (err) {
        this.error = 'Something went wrong. Please try again.'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
