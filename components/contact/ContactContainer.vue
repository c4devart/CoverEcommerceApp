<template>
  <section class="contact-container">
    <BasePageColumns title="" type="general">
      <template v-slot:main>
        <slot />
      </template>
      <template v-slot:aside>
        <ContactForm />
      </template>
    </BasePageColumns>
  </section>
</template>
<script>
import BasePageColumns from '@/components/base/BasePageColumns'
import ContactForm from '@/components/contact/ContactForm'
export default {
  components: {
    BasePageColumns,
    ContactForm
  }
}
</script>
