<template>
  <section class="checkout checkout-customer pb-12 lg:pb-20">
    <div class="text-2xl leading-none text-blue-900 hidden lg:flex">
      Customer Information
    </div>
    <CheckoutCustomerForm v-if="isLoggedIn" />
    <template v-else>
      <p class=" my-6 text-sm text-grey-500">
        If you have an account, please
        <nuxt-link to="/login?continue=checkout-customer" class="text-blue-500">
          login here
        </nuxt-link>
        .
      </p>
      <transition name="fade">
        <BaseAlert v-if="emailExists" type="error">
          The given email address already exists. Please
          <nuxt-link
            to="/login?continue=checkout-customer"
            class="text-blue-500"
          >
            login to continue.
          </nuxt-link>
        </BaseAlert>
      </transition>
      <ValidationObserver ref="observer">
        <div class="flex flex-col lg:flex-row">
          <FormItem
            v-model="form.first_name"
            form-type="checkout"
            class="lg:w-1/2 lg:mr-2 mt-5"
            label="First Name"
            required
          />
          <FormItem
            v-model="form.last_name"
            form-type="checkout"
            label="Last Name"
            class="lg:w-1/2 lg:ml-2 mt-5"
            required
          />
        </div>
        <div class="flex flex-col lg:flex-row">
          <FormItem
            v-model="form.email"
            type="email"
            form-type="checkout"
            label="Email Address"
            required
            class="lg:w-1/2 lg:mr-2 mt-5"
          />
          <FormItem
            v-model="form.phone"
            form-type="checkout"
            label="Phone Number"
            required
            class="lg:w-1/2 lg:ml-2 mt-5"
          />
        </div>
      </ValidationObserver>
    </template>

    <CheckoutFooter @continue="postCustomer" class="mt-6" />
  </section>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
// import { getCustomers } from '@/graphql/customer'
import BaseAlert from '@/components/base/BaseAlert'
import FormItem from '@/components/form/FormItem'
import CheckoutFooter from '@/components/checkout/CheckoutFooter'
import CheckoutCustomerForm from '@/components/checkout/CheckoutCustomerForm'

export default {
  components: {
    BaseAlert,
    CheckoutFooter,
    CheckoutCustomerForm,
    ValidationObserver,
    FormItem
  },
  head() {
    return {
      title: 'Checkout / HotTub Covers Canada'
    }
  },
  data: () => ({
    emailExists: false,
    form: {
      first_name: '',
      last_name: null,
      phone: null,
      email: null
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
  mounted() {
    if (this.isLoggedIn) {
      this.$store.dispatch('customer/getCustomer')
    } else {
      this.prepopulateGuest()
    }
  },
  methods: {
    prepopulateGuest() {
      if (this.checkout.customer_info) {
        this.form = {
          first_name: this.checkout.customer_info
            ? this.checkout.customer_info.first_name
            : null,
          last_name: this.checkout.customer_info.last_name,
          phone: this.checkout.customer_info.phone,
          email: this.checkout.customer_info.email
        }
      }
    },
    async postCustomer() {
      if (!this.isLoggedIn) {
        const isValid = await this.$refs.observer.validate()
        const emailExists = await this.checkEmailAddress()
        if (!isValid || emailExists) {
          return
        }
      }
      const payload = this.isLoggedIn
        ? { customer_id: this.$auth.user.id }
        : {
            customer_info: this.form
          }
      await this.$store.dispatch('checkout/addCheckoutInfo', payload)
      await this.$router.push('/checkout/shipping')
    },
    async checkEmailAddress() {
      try {
        const { data } = await this.$axios.get(
          `/api/customers/check?email=${this.form.email}`
        )
        this.emailExists = true
        return data.exists
      } catch (err) {}
      this.emailExists = false
    }
  }
}
</script>
