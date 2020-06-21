<template>
  <section class="checkout-payment-form">
    <CheckoutPaymentMethod
      id="card"
      v-model="checkedMethod"
      class="mt-6"
      type="card"
    >
      <ValidationObserver ref="observer">
        <div class="w-full">
          <FormCreditCardItem
            v-model="form.card_number"
            label="Card Number"
            required
          />
        </div>
        <div class="w-full lg:flex">
          <div class="lg:w-1/2 lg:mr-3">
            <FormItem
              v-model="form.name"
              label="Name on Card"
              class="mt-3"
              required
            />
          </div>
          <div class="lg:w-1/4 lg:mx-3">
            <FormCreditCardItem
              v-model="expiryDate"
              label="Expiry Date"
              placeholder="MM/YY"
              class="mt-3"
              required
              type="expiry"
            />
          </div>
          <div class="lg:w-1/4 lg:ml-3">
            <FormItem
              v-model="form.cvv"
              label="CVV Code"
              placeholder=""
              class="mt-3"
              required
            />
          </div>
        </div>
      </ValidationObserver>
    </CheckoutPaymentMethod>
    <CheckoutPaymentMethod
      id="paypal"
      v-model="checkedMethod"
      class="mt-5"
      type="paypal"
    />
    <CheckoutFooter @continue="postPayment" class="mt-6" type="payment" />
  </section>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CheckoutFooter from '@/components/checkout/CheckoutFooter'
import CheckoutPaymentMethod from '@/components/checkout/CheckoutPaymentMethod'
import FormCreditCardItem from '@/components/form/FormCreditCardItem'
import FormItem from '@/components/form/FormItem'

export default {
  components: {
    ValidationObserver,
    CheckoutFooter,
    FormCreditCardItem,
    FormItem,
    CheckoutPaymentMethod
  },
  data: () => ({
    checkedMethod: 'card',
    expiryDate: null,
    form: {
      card_number: null,
      name: null,
      cvv: null,
      type: null,
      card_last_four: null,
      expiry_month: null,
      expiry_year: null
    }
  }),
  computed: {
    checkout() {
      return this.$store.getters['checkout/getCheckoutDetails']
    }
  },
  watch: {
    expiryDate(val) {
      const splitExp = val.split('/')
      this.form.expiry_month = splitExp[0]
      if (splitExp[1]) {
        this.form.expiry_year = `20${splitExp[1]}`
      }
    },
    'form.card_number'(val) {
      const firstNb = val ? val.charAt(0) : 0
      this.form.type = 'Other'
      if (firstNb === '3') {
        this.form.type = 'amex'
      }
      if (firstNb === '4') {
        this.form.type = 'visa'
      }
      if (firstNb === '5') {
        this.form.type = 'mastercard'
      }
    }
  },
  methods: {
    postPayment() {
      if (this.checkedMethod === 'card') {
        this.payByCreditCard()
        return
      }
      this.payByPaypal()
    },
    async payByCreditCard() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      await this.$store.commit('checkout/setCardInfo', this.form)
      await this.$router.push('/order/processing')
    },
    payByPaypal() {
      this.$router.push('/order/processing?paypal')
    }
    // storePayment() {
    //   const paymentInfo = {
    //     card: this.form.card_number.substr(-4),
    //     expire: this.form.expiry_date,
    //     type: 'mastercard'
    //   }
    //   localStorage.setItem('payment', JSON.stringify(paymentInfo))
    // }
  }
}
</script>
