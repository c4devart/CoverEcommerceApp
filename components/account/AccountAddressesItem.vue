<template>
  <section
    class="address-item border border-grey-200 shadow rounded-large p-6 mb-5 relative"
  >
    <address class="not-italic">
      <h3 class="font-bold">{{ address.name }}</h3>
      <div class="text-sm">
        <div>{{ address.street }}</div>
        <div>
          {{ address.city }}, {{ address.state_province }},
          {{ address.zip_postal }}
        </div>
        <div>{{ address.country }}, {{ address.phone }}</div>
        <FormCheckbox
          v-model="defaultAddress"
          class="mt-4 set-default"
          label="Use as default address"
        />
      </div>
    </address>
    <a
      @click.prevent="deleteConfirm"
      href=""
      class="address-item__delete text-blue-500 text-sm absolute"
    >
      Delete
    </a>
  </section>
</template>

<script>
import FormCheckbox from '@/components/form/FormCheckbox'

export default {
  components: {
    FormCheckbox
  },
  props: {
    keyId: {
      type: Number,
      required: true
    },
    address: {
      type: Object,
      required: true
    }
  },
  computed: {
    defaultAddress: {
      get() {
        return this.$store.getters['customer/isDefaultAddress'](this.keyId)
      },
      set() {
        this.$store.dispatch(
          'customer/updateCustomerDefaultAddress',
          this.keyId
        )
      }
    }
  },
  methods: {
    deleteConfirm() {
      this.$emit('delete', { index: this.keyId, item: this.address })
    }
  }
}
</script>

<style lang="scss" scoped>
.address-item {
  &__delete {
    top: 1.5rem;
    right: 1.5rem;
  }
}
</style>
