<template>
  <section class="contact-container">
    <BasePageColumns title="" type="general">
      <template v-slot:main>
        <ContactInfo />
      </template>
      <template v-slot:aside>
        <ContactForm />
      </template>
    </BasePageColumns>
  </section>
</template>
<script>
import BasePageColumns from '@/components/base/BasePageColumns'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
export default {
  components: {
    BasePageColumns,
    ContactInfo,
    ContactForm
  },
  head() {
    return {
      title: 'Contact / HotTub Covers Canada'
    }
  }
}
</script>
