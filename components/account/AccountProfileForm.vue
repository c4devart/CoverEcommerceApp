<template>
  <section class="account-profile-form">
    <h2 class="text-lg font-bold mb-3">Personal Info</h2>
    <BaseAlert v-if="alert.type" :type="alert.type" class="mb-3">
      {{ alert.message }}
    </BaseAlert>
    <ValidationObserver ref="observer">
      <FormItem
        v-model="form.first_name"
        class="mt-3"
        label="First Name"
        required
      />
      <FormItem
        v-model="form.last_name"
        label="Last Name"
        required
        class="mt-3"
      />
      <FormItem
        v-model="form.email"
        label="Email address"
        type="email"
        required
        class="mt-3"
      />
      <FormItem
        v-model="form.phone"
        label="Phone Number"
        required
        class="mt-3"
      />
      <h2 class="text-lg font-bold mt-12 mb-3">Change Password</h2>
      <BaseAlert v-if="authAlert.type" :type="authAlert.type" class="mb-3">
        {{ authAlert.message }}
      </BaseAlert>
      <FormItem
        v-model="auth.old_password"
        class="mt-3"
        type="password"
        label="Current Password"
      />
      <FormItem
        v-model="auth.password"
        type="password"
        label="New Password"
        class="mt-3"
      />
      <FormItem
        v-model="auth.password_confirmation"
        type="password"
        label="Confirm New Password"
        class="mt-3"
      />
      <BaseBtn
        @click.native="updateProfile"
        label="Update Profile"
        class="mt-8"
      />
    </ValidationObserver>
  </section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { isStrong } from '@/utils/helpers'
import { handleApiCaughtErrors } from '@/utils/errors'

import BaseAlert from '@/components/base/BaseAlert'
import BaseBtn from '@/components/base/BaseBtn'
import FormItem from '@/components/form/FormItem'
export default {
  components: {
    BaseAlert,
    BaseBtn,
    FormItem,
    ValidationObserver
  },
  props: {
    initialData: Object
  },
  data: () => ({
    form: {
      first_name: null,
      last_name: null,
      email: null,
      phone: null
    },
    auth: {
      old_password: null,
      password: null,
      password_confirmation: null
    },
    alert: {
      type: null,
      message: null
    },
    authAlert: {
      type: null,
      message: null
    }
  }),
  computed: {
    customerId() {
      return this.$store.getters['customer/getCustomerId']
    }
  },
  created() {
    this.setInitialData()
  },
  methods: {
    updateProfile() {
      this.updatePersonalInfo()
      this.checkUpdatePassword()
    },
    async updatePersonalInfo() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      await this.$store.dispatch('customer/updateCustomer', this.form)
      this.alert = await {
        type: 'success',
        message: 'Personal Info updated!'
      }
      // this.alert = {
      //   type: 'error',
      //   message: handleCaughtErrors(err)
      // }
    },
    async checkUpdatePassword() {
      if (
        this.auth.old_password &&
        this.auth.password &&
        this.auth.password_confirmation
      ) {
        if (this.auth.password !== this.auth.password_confirmation) {
          this.authAlert = {
            type: 'error',
            message: "The confirm new password doesn't match the new password"
          }
          return
        }
        if (!isStrong(this.auth.password)) {
          this.authAlert = {
            type: 'error',
            message:
              'Your password needs to have at least 8 characters with 1 number and 1 upper case letter'
          }
          return
        }
        // Update Password
        await this.updatePassword()
      }
    },
    async updatePassword() {
      try {
        await this.$axios.put('api/c/password/update', this.auth)
        this.authAlert = await {
          type: 'success',
          message: 'Password updated!'
        }
        this.auth = {
          old_password: null,
          password: null,
          password_confirmation: null
        }
      } catch (err) {
        this.authAlert = await {
          type: 'error',
          message: handleApiCaughtErrors(err)
        }
      }
    },
    setInitialData() {
      if (this.initialData) {
        this.form.first_name = this.initialData.first_name
        this.form.last_name = this.initialData.last_name
        this.form.email = this.initialData.email
        this.form.phone = this.initialData.phone
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
