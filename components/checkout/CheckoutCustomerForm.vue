<template>
  <section class="checkout-customer-form mt-5">
    <div v-if="customer" class="lg:flex w-full">
      <div
        class="w-full py-8 pl-10 flex flex-col border-grey-200 border shadow"
      >
        <div class="mb-5 text-grey-600 font-normal leading-normal">
          <div>{{ customer.name }}</div>
          <div class="text-grey-500">{{ customer.email }}</div>
        </div>
        <div class="flex">
          <nuxt-link
            :to="{ name: 'account-profile' }"
            class="font-semibold text-blue-600"
          >
            Edit Details
          </nuxt-link>
        </div>
      </div>
    </div>
    <CheckoutLoadingPlaceholder v-else />
  </section>
</template>
<script>
import CheckoutLoadingPlaceholder from '@/components/checkout/CheckoutLoadingPlaceholder'

export default {
  components: {
    CheckoutLoadingPlaceholder
  },
  data: () => ({
    form: {
      first_name: '',
      last_name: null,
      address: null,
      country: null,
      city: 'Toronto',
      postal_code: null,
      phone_number: null,
      email_address: null
    }
  }),
  computed: {
    customer() {
      return this.$store.getters['customer/getCustomer']
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout-customer-form {
  &__find-button {
    min-width: 77px;
    border: none;
    border-radius: 5px;
    border-left: 1px solid;
    @apply border-grey-300;
  }
}
</style>
