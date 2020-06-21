<template>
  <section class="contact-form w-full pt-10 pl-12 pr-12 pb-12">
    <BaseAlert v-if="alert.message" :type="alert.type">
      {{ alert.message }}
    </BaseAlert>
    <form v-else @submit.prevent="postForm">
      <ValidationObserver ref="observer">
        <div class="text-2xl font-bold leading-none pb-2">
          Get in touch
        </div>
        <FormItem
          v-model="form.name"
          label="Full Name"
          placeholder="First & Last"
          required
          class="mb-3"
        />
        <FormItem
          v-model="form.email"
          label="Email Address"
          type="email"
          placeholder="email@domain.ca"
          required
          class="mb-3"
        />
        <FormItem
          v-model="form.phone"
          label="Telephone"
          placeholder="000-000-0000"
          required
          class="mb-3"
        />
        <FormItem
          v-model="form.order_number"
          label="Order Number"
          placeholder="XXXXXXXXXXXX"
          class="mb-3"
        />
        <FormItem
          v-model="form.comments"
          label="Comments"
          placeholder=""
          type="textarea"
          required
          class="mb-3"
        />
        <button class="btn btn--primary contact-form__button mt-6">
          Submit Form
        </button>
      </ValidationObserver>
    </form>
  </section>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import BaseAlert from '@/components/base/BaseAlert'
import FormItem from '@/components/form/FormItem'

export default {
  components: {
    ValidationObserver,
    BaseAlert,
    FormItem
  },
  data: () => ({
    alert: {
      type: null,
      message: null
    },
    form: {
      name: null,
      email: null,
      phone: null,
      order_number: null,
      comments: null
    }
  }),
  methods: {
    async postForm() {
      try {
        await this.$axios.post('api/contact', this.form)
        this.alert = {
          type: 'success',
          message: 'Thanks for getting in touch! We will come back to you soon.'
        }
        this.resetForm()
      } catch (err) {
        this.alert = {
          type: 'error',
          message: 'Something went wrong. Please try again.'
        }
      }
    },
    resetAlert() {
      this.alert = {
        type: null,
        message: null
      }
    },
    resetForm() {
      this.form = {
        name: null,
        email: null,
        phone: null,
        order_number: null,
        comments: null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contact-form {
  &__button {
    width: 154px;
  }
}
</style>
