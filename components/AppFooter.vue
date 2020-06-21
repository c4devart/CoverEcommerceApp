<template>
  <footer class="app-footer">
    <AppFooterContact />
    <section
      class="page flex flex-col xl:flex-row justify-between py-8 md:py-16"
    >
      <nav class="hidden sm:flex sm:justify-between">
        <section class="app-footer__section">
          <h3>Shop</h3>
          <nuxt-link to="/categories/hot-tub-covers" class="link">
            Hot Tub Covers
          </nuxt-link>
          <nuxt-link to="/categories/hot-tub-cover-lifters" class="link">
            Cover Lifters
          </nuxt-link>
          <nuxt-link to="/categories/accessories" class="link">
            Accessories
          </nuxt-link>
          <nuxt-link
            to="/categories/saltwater-chlorine-generators"
            class="link"
          >
            Saltwater Chlorine Generators
          </nuxt-link>
          <nuxt-link to="/categories/samples" class="link">
            Samples & Template Kits
          </nuxt-link>
        </section>
        <section class="app-footer__section">
          <h3>About Our Covers</h3>
          <nuxt-link to="/upgrade-options" class="link"
            >Upgrade Options</nuxt-link
          >
          <nuxt-link to="/cover-insulations" class="link"
            >Cover Insulations</nuxt-link
          >
          <nuxt-link to="/inside-our-covers" class="link"
            >Inside Our Covers</nuxt-link
          >
          <nuxt-link to="/r-values-for-covers" class="link"
            >R-Values for Covers</nuxt-link
          >
          <nuxt-link to="/cover-features" class="link"
            >Cover Features</nuxt-link
          >
        </section>
        <section class="app-footer__section">
          <h3>Customer Care</h3>
          <nuxt-link to="/measurement-guide" class="link"
            >Measurement Guide</nuxt-link
          >
          <nuxt-link :to="{ name: 'faq' }" class="link">FAQs</nuxt-link>
          <nuxt-link to="/custom-cover-template" class="link"
            >Custom Cover Template</nuxt-link
          >
          <nuxt-link to="/shipping-returns" class="link"
            >Shipping & Returns</nuxt-link
          >
          <nuxt-link to="/7-year-warranty" class="link"
            >7-Year Warranty</nuxt-link
          >
        </section>
        <section class="app-footer__section">
          <h3>Resources</h3>
          <nuxt-link to="/caring-for-your-hot-tub-cover" class="link"
            >Caring for Your Hot Tub Cover</nuxt-link
          >
          <nuxt-link to="/shopping-for-your-hot-tub-cover" class="link"
            >Shopping for Your Hot Tub Cover</nuxt-link
          >
          <nuxt-link to="/history-of-the-hot-tub" class="link"
            >History of the Hot Tub</nuxt-link
          >
          <nuxt-link to="/benefits-of-saltwater-hot-tubs" class="link"
            >Benefits of Saltwater Hot Tubs</nuxt-link
          >
          <nuxt-link to="/helpful-links" class="link">Helpful Links</nuxt-link>
          <nuxt-link :to="{ name: 'videos' }" class="link">Videos</nuxt-link>
          <nuxt-link :to="{ name: 'blog' }" class="link">Blog</nuxt-link>
        </section>
      </nav>
      <nav class="flex-1 flex flex-row">
        <section class="app-footer__section">
          <h3>Follow Us</h3>
          <div class="flex items-center">
            <a
              href="https://www.facebook.com/hottubcovers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#0A2857"
                  fill-rule="nonzero"
                  d="M12.393 21.5v-8.297H9.534v-3.187h2.86V7.672c0-1.313.367-2.336 1.101-3.07.734-.735 1.727-1.102 2.977-1.102.968 0 1.78.047 2.437.14v2.813h-1.687c-.594 0-1.016.14-1.266.422-.188.25-.281.625-.281 1.125v2.016h3.234l-.422 3.187h-2.812V21.5h3.984a2.17 2.17 0 0 0 1.594-.656 2.17 2.17 0 0 0 .656-1.594V2.75a2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 19.659.5h-16.5a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 .91 2.75v16.5c0 .625.219 1.156.656 1.594a2.17 2.17 0 0 0 1.594.656h9.234z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/hot_tub_covers?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
              >
                <path
                  fill="#0A2857"
                  fill-rule="nonzero"
                  d="M7.456 19.75c2.875 0 5.422-.734 7.64-2.203 2.032-1.313 3.61-3.078 4.735-5.297 1.094-2.094 1.64-4.266 1.64-6.516 0-.28-.015-.484-.046-.609a10.82 10.82 0 0 0 2.484-2.578c-.937.406-1.875.672-2.812.797 1.062-.656 1.78-1.563 2.156-2.719-.969.563-2.016.953-3.14 1.172A5.567 5.567 0 0 0 18.494.672 4.696 4.696 0 0 0 16.503.25c-.875 0-1.688.219-2.438.656a4.817 4.817 0 0 0-1.78 1.805 4.88 4.88 0 0 0-.657 2.46c0 .376.031.75.094 1.126-2-.094-3.883-.594-5.649-1.5A13.572 13.572 0 0 1 1.597 1.14c-.47.78-.704 1.601-.704 2.46 0 .86.204 1.649.61 2.368A5.46 5.46 0 0 0 3.097 7.75a4.634 4.634 0 0 1-2.204-.656v.094c0 1.156.375 2.187 1.125 3.093.75.907 1.688 1.485 2.813 1.735-.438.093-.875.14-1.313.14-.28 0-.578-.015-.89-.047a4.895 4.895 0 0 0 1.71 2.414c.829.641 1.79.961 2.884.961-1.813 1.407-3.86 2.11-6.141 2.11-.438 0-.828-.016-1.172-.047 2.281 1.469 4.797 2.203 7.547 2.203z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCEwVSt8RRoLln4HAkChIgBw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="18"
                viewBox="0 0 26 18"
              >
                <path
                  fill="#0A2857"
                  fill-rule="nonzero"
                  d="M12.91 18l4.265-.047c3-.094 4.906-.25 5.718-.469a3.25 3.25 0 0 0 1.454-.843c.406-.407.687-.875.843-1.407.219-.843.375-2.14.469-3.89L25.706 9l-.047-2.344c-.094-1.718-.25-3-.469-3.843a3.25 3.25 0 0 0-.843-1.454 3.25 3.25 0 0 0-1.454-.843c-.812-.22-2.718-.375-5.718-.47L12.909 0 8.643.047c-3 .094-4.906.25-5.718.469a3.25 3.25 0 0 0-1.453.843 3.25 3.25 0 0 0-.844 1.454C.409 3.656.253 4.938.159 6.656A66.387 66.387 0 0 0 .112 9l.047 2.344c.094 1.75.25 3.047.469 3.89.156.532.437 1 .844 1.407.406.406.89.687 1.453.843.812.22 2.718.375 5.718.47L12.91 18zm-2.626-5.156v-7.64L16.987 9l-6.703 3.844z"
                />
              </svg>
            </a>
          </div>
        </section>
        <div class="flex-1 flex flex-col items-end">
          <img
            class="app-footer__bbb"
            src="/img/bbb-accredited.png"
            alt="BBB Accredited Business"
          />
        </div>
      </nav>
    </section>
    <AppFooterLegal />
  </footer>
</template>

<script>
import AppFooterContact from '@/components/AppFooterContact'
import AppFooterLegal from '@/components/AppFooterLegal'

export default {
  components: {
    AppFooterContact,
    AppFooterLegal
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  &__section {
    @apply flex flex-col w-1/5;
    width: 200px;
    h3 {
      @apply font-bold text-blue-900 mb-1;
    }
    a {
      @apply mt-1;
    }
  }
  &__bbb {
    max-width: 86px;
  }
}
</style>
