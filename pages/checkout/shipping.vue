<template>
  <section class="checkout checkout-shipping pb-12 lg:pb-20">
    <div class="text-2xl leading-none text-blue-900 hidden lg:flex">
      Shipping Information
    </div>
    <CheckoutShippingForm v-if="isLoggedIn" />
    <template v-else>
      <ValidationObserver ref="observer">
        <FormItem
          v-model="form.street"
          form-type="checkout"
          label="Address"
          class="w-full mt-4"
          required
        />
        <div class="lg:flex">
          <FormItem
            v-model="form.city"
            form-type="checkout"
            label="City"
            required
            class="lg:w-1/2 lg:mr-2 mt-3"
          />
          <FormItem
            v-model="form.zip_postal"
            form-type="checkout"
            label="Postal Code"
            class="lg:w-1/2 lg:ml-2 mt-3"
            required
          />
        </div>
        <div class="lg:flex">
          <FormMultiselect
            v-model="form.state_province"
            :options="$options.$_provinces"
            label="label"
            label-text="Province"
            track-by="value"
            required
            class="lg:w-1/2 lg:mr-2 mt-3"
          />
          <FormItem
            v-model="form.country"
            form-type="checkout"
            label="Country"
            class="lg:w-1/2 lg:ml-2 mt-3"
            disabled
          />
        </div>
      </ValidationObserver>
    </template>
    <CheckoutFooter @continue="postShipping" type="shipping" class="mt-6" />
  </section>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import FormItem from '@/components/form/FormItem'
import FormMultiselect from '@/components/form/FormMultiselect'
import CheckoutShippingForm from '@/components/checkout/CheckoutShippingForm'
import CheckoutFooter from '@/components/checkout/CheckoutFooter'

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
  // validate({ store }) {
  //   return (
  //     (store.state.auth.loggedIn &&
  //       store.state.checkout.checkout.customer_id) ||
  //     store.state.checkout.checkout.customer_info
  //   )
  // },
  components: {
    CheckoutShippingForm,
    ValidationObserver,
    CheckoutFooter,
    FormItem,
    FormMultiselect
  },

  head() {
    return {
      title: 'Checkout / HotTub Covers Canada'
    }
  },
  data: () => ({
    form: {
      name: 'Shipping Address',
      street: null,
      country: 'Canada',
      city: null,
      zip_postal: null,
      is_default: true,
      state_province: null
    }
  }),
  computed: {
    checkout() {
      return this.$store.getters['checkout/getCheckoutDetails']
    },
    isLoggedIn() {
      return this.$auth.loggedIn
    }
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch('customer/getCustomer')
    } else {
      this.prepopulateGuest()
    }
  },
  mounted() {
    this.validateCustomer()
  },
  methods: {
    prepopulateGuest() {
      if (this.checkout.shipping_address) {
        this.form = {
          street: this.checkout.shipping_address
            ? this.checkout.shipping_address.street
            : null,
          country: 'Canada',
          city: this.checkout.shipping_address
            ? this.checkout.shipping_address.zip_postal
            : null,
          zip_postal: this.checkout.shipping_address
            ? this.checkout.shipping_address.zip_postal
            : null,
          is_default: this.checkout.shipping_address
            ? this.checkout.shipping_address.is_default
            : null,
          state_province: this.checkout.shipping_address
            ? this.checkout.shipping_address.state_province
            : null
        }
      }
    },
    async postShipping() {
      if (!this.isLoggedIn) {
        const isValid = await this.$refs.observer.validate()
        if (!isValid) {
          return
        }
      }
      let address = this.form
      if (this.isLoggedIn) {
        address = this.$store.getters['customer/getShippingAddress']
      }
      await this.$store.dispatch('checkout/addCheckoutInfo', {
        billing_address: address,
        shipping_address: address
      })
      await this.$router.push('/checkout/payment')
    },
    validateCustomer() {
      if (
        !(this.$store.state.auth.loggedIn && this.checkout.customer_id) &&
        !this.checkout.customer_info
      ) {
        this.$router.push('/404')
      }
    }
  }
}
</script>
