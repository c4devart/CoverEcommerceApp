<template>
  <section class="contact-index contact pb-20">
    <img src="/img/contactus.png" alt="contactus" class="w-full" />
    <div class="text-2xl leading-normal mt-8">
      At Hot Tub Covers Canada, we're happy to help answer any of <br />
      your questions or concerns before, during, or after the sale.
    </div>
    <div class="text-2xl font-bold leading-none mt-8">
      Contact Us
    </div>
    <div class="text-base leading-normal mt-3">
      Reach us by email, phone or fill out our contact form and we will be in
      touch within 24 hours.
    </div>
    <div class="flex items-center mt-8">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#00B3EF"
          d="M19.373 5.209c1.037 0 1.877.84 1.877 1.877v7.955a3.75 3.75 0 0 1-3.75 3.75H7c-2.07 0-3.75-1.68-3.75-3.75V7.086c0-1.036.84-1.877 1.877-1.877zm.377 4.083l-7.04 5.07a.744.744 0 0 1-.015.011l-.007.005-.01.008a.745.745 0 0 1-.073.044l.083-.052a.754.754 0 0 1-.768.065l-.013-.007a.701.701 0 0 1-.087-.051l-.008-.007a.334.334 0 0 1-.023-.017L4.75 9.292v5.749c0 1.19.926 2.166 2.096 2.245L7 17.29h10.5a2.25 2.25 0 0 0 2.25-2.25V9.292zm-.377-2.583H5.127a.378.378 0 0 0-.377.377v.368l.09.055 7.41 5.335 7.411-5.335.089-.055v-.368a.377.377 0 0 0-.301-.37l-.076-.007z"
        />
      </svg>
      <BaseObfuscatedEmail class="text-2xl leading-tight text-grey-600  ml-4" />
    </div>
    <div class="flex items-center mt-2 pl-1">
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#24C8FF"
          d="M12.6860023,13.9996226 C5.68400225,13.9996226 -2.24084604e-06,8.32562262 -2.24084604e-06,1.31262262 C-0.00079504678,1.00687055 0.210048422,0.741240985 0.508002254,0.672622624 L3.35100225,0.0166226242 C3.66043092,-0.0540013007 3.97631095,0.105618928 4.10300225,0.396622624 L5.41600225,3.45862262 C5.53087142,3.72773277 5.45331961,4.04038903 5.22600225,4.22462262 L3.57000225,5.57962262 C4.57348535,7.70816978 6.2864551,9.42113953 8.41500225,10.4246226 L9.77100225,8.76962262 C9.95594724,8.54331593 10.2682981,8.4666554 10.5370023,8.58162262 L13.6000023,9.89262262 C13.8919602,10.0200705 14.0522658,10.336905 13.9820023,10.6476226 L13.3260023,13.4916226 C13.2580023,13.7866226 12.9960023,13.9996226 12.6860023,13.9996226 Z"
        />
      </svg>
      <BaseObfuscatedPhone class="text-2xl leading-tight text-grey-600 ml-4" />
    </div>
    <ContactMailingAddress class="mt-10" />
  </section>
</template>

<script>
import BaseObfuscatedEmail from '@/components/base/BaseObfuscatedEmail'
import BaseObfuscatedPhone from '@/components/base/BaseObfuscatedPhone'
import ContactMailingAddress from '@/components/contact/ContactMailingAddress'

export default {
  components: {
    BaseObfuscatedEmail,
    BaseObfuscatedPhone,
    ContactMailingAddress
  }
}
</script>

<style lang="scss" scoped></style>
