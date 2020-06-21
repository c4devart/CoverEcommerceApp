<template>
  <section class="app-footer-contact bg-grey-100 py-12 text-center text-2xl">
    <h2 class="text-blue-900 font-bold mb-1">Contact Us</h2>
    <div class="text-grey-600 flex flex-col font-normal">
      <BaseObfuscatedEmail email="info@hottubcoverscanada.ca" />
      <BaseObfuscatedPhone />
    </div>
  </section>
</template>

<script>
import BaseObfuscatedEmail from '@/components/base/BaseObfuscatedEmail'
import BaseObfuscatedPhone from '@/components/base/BaseObfuscatedPhone'

export default {
  components: {
    BaseObfuscatedEmail,
    BaseObfuscatedPhone
  }
}
</script>

<style lang="scss" scoped></style>
