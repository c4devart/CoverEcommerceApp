<template>
  <section class="products-single container">
    <BasePageColumns :title="product.title" type="general" reverse>
      <template v-slot:main>
        <ProductSection v-if="product.overview" title="Quick Overview">
          {{ product.overview }}
        </ProductSection>
        <ProductSection v-if="product.description" title="Details">
          {{ product.description }}
        </ProductSection>
        <ProductSection v-if="product.features" title="Features">
          {{ product.features }}
        </ProductSection>
        <ProductSection v-if="product.video_link" title="Videos">
          <VideoItem :video="product.video_link" class="mt-6" />
        </ProductSection>
        <!-- <ProductSection v-if="product.download_link" title="Downloads">
          DL
        </ProductSection> -->

        <!-- <ProductsDescription class="mt-8">
          <template v-slot:field>
            Downloads
          </template>
          <template v-slot:content>
            <BaseAttach label="Download Ultralift Visionlift Instructions" />
          </template>
        </ProductsDescription> -->
        <!-- <ProductsDescription class="mt-12">
          <template v-slot:field>
            Ultralift Lifter Comparison Chart
          </template>
          <template v-slot:content>
            <BaseChart class="mt-3" />
          </template>
        </ProductsDescription> -->
      </template>
      <template v-slot:aside>
        <ProductDetail :product="product" />
      </template>
    </BasePageColumns>
  </section>
</template>

<script>
import BasePageColumns from '@/components/base/BasePageColumns'
// import ProductsDescription from '@/components/products/ProductsDescription'
// import BaseAttach from '@/components/base/BaseAttach'
// import BaseChart from '@/components/base/BaseChart'
import ProductDetail from '@/components/products/ProductDetail'
import ProductSection from '@/components/product/ProductSection'
import VideoItem from '@/components/video/VideoItem'

export default {
  components: {
    BasePageColumns,
    // ProductsDescription,
    ProductDetail,
    // BaseAttach,
    // BaseChart,
    ProductSection,
    VideoItem
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    features_list: [
      {
        id: 1,
        desc: '5 Year Limited Warranty'
      },
      {
        id: 2,
        desc: 'Aluminum Brackets'
      },
      {
        id: 3,
        desc: 'Galvanized Arms'
      },
      {
        id: 4,
        desc: "Position's Hottub cover fully below the tub"
      },
      {
        id: 5,
        desc: 'Operation Assistance: Dual Gas Shocks'
      },
      {
        id: 6,
        desc: 'Clearance Required 10-14" Rear/5"Side'
      },
      {
        id: 7,
        desc: 'Sliding bracket fits most every make/model of hot tub'
      },
      {
        id: 8,
        desc: 'Open or close on either side using a padded handle'
      }
    ]
  })
}
</script>
<style scoped lang="scss">
.products-single-container {
  &__list-style {
    list-style: inside;
  }
  &__video {
    width: 386px;
  }
}
</style>
