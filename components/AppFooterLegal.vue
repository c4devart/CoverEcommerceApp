<template>
  <section class="app-footer-legal">
    <section class="border-t border-grey-200">
      <div
        class="page py-6 px-4 flex justify-between items-center flex-col md:flex-row"
      >
        <nav class="flex items-center flex-col sm:flex-row pb-4 md:py-0">
          <span class="font-bold text-blue-900">Legal</span>
          <nuxt-link
            to="/terms-and-conditions"
            class="link py-2 md:py-0 md:mx-6"
          >
            Terms and Conditions
          </nuxt-link>
          <nuxt-link to="/privacy-security" class="link"
            >Privacy & Security</nuxt-link
          >
        </nav>
        <div class="flex">
          <img src="/img/amex.svg" alt="Amex" />
          <img src="/img/mastercard.svg" class="mx-3" alt="Mastercard" />
          <img src="/img/visa.svg" alt="Visa" />
        </div>
      </div>
    </section>
    <section class="border-t border-grey-200">
      <p class="page py-8 px-4 text-center md:text-left">
        <small class="text-base text-grey-600 ">
          Hot Tub Covers Canada &copy;{{ year }} All Rights Reserved
        </small>
      </p>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped></style>
