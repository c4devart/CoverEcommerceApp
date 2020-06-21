<template>
  <section class="checkout-payment-method border-grey-200 border p-8">
    <div class="w-full flex flex-col">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            :id="id"
            :checked="isChecked"
            :value="value"
            @input="$emit('input', type)"
            type="radio"
            name="radio"
            class="hidden"
          />
          <label
            :for="id"
            class="flex items-center cursor-pointer text-lg text-blue-900 font-semibold"
          >
            <span
              class="w-6 h-6 inline-block mr-2 rounded-full border border-grey-500 radio-center text-blue-900"
            ></span>
            <span>{{ type === 'card' ? 'Credit Card' : 'PayPal' }}</span>
          </label>
        </div>
        <div v-if="type === 'card'" class="flex">
          <img
            src="/img/amex.svg"
            alt="Amex"
            class="checkout-payment-method__img"
          />
          <img
            src="/img/mastercard.svg"
            class="mx-3 checkout-payment-method__img"
            alt="Mastercard"
          />
          <img
            src="/img/visa.svg"
            alt="Visa"
            class="checkout-payment-method__img"
          />
        </div>
        <img
          v-if="type === 'paypal'"
          src="/img/paypal_logo.png"
          alt="paypal"
          class="checkout-payment-method__img-paypal"
        />
      </div>
      <div
        v-if="type === 'card'"
        class="text-grey-600 leading-normal font-normal ml-8"
      >
        Safe money transfer using your bank account. Visa, Maestro, <br />
        American Express.
      </div>
      <div
        v-if="type === 'paypal'"
        class="text-grey-600 leading-normal font-normal ml-8"
      >
        You will be redirected to Paypal website to complete your <br />
        purchase securely.
      </div>
    </div>
    <div class="mt-3 ml-8">
      <slot />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'card'
    },
    id: {
      type: String,
      default: 'card'
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    isChecked() {
      return this.value === this.type
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout-payment-method {
  box-shadow: 0 2px 5px 0 rgba(0, 83, 128, 0.1);
  &__img {
    width: 34px;
  }
  &__img-paypal {
    width: 87px;
  }
}
input[type='radio'] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type='radio'] + label span.radio-center:hover,
input[type='radio'] + label:hover span.radio-center {
  transform: scale(1.2);
}

input[type='radio']:checked + label span.radio-center {
  background-color: #00b3ef; //bg-blue
  box-shadow: 0px 0px 0px 5px white inset;
}

input[type='radio']:checked {
  color: #00b3ef; //text-blue
}
</style>
