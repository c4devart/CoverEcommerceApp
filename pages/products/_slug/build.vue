<template>
  <section class="build container">
    <BasePageColumns title="Build Your Cover" fixed-aside>
      <template v-slot:main>
        <BaseTabs>
          <BaseTabsItem
            :to="{
              name: 'products-slug-build-shape',
              params: { slug: $route.params.slug }
            }"
            label="Shape & Colour"
            step="01"
          />
          <BaseTabsItem
            :disabled="!isStep1Valid"
            :to="{
              name: 'products-slug-build-customize',
              params: { slug: $route.params.slug }
            }"
            label="Customize"
            step="02"
          />
          <BaseTabsItem
            :disabled="!isStep1Valid || !isStep2Valid"
            :to="{
              name: 'products-slug-build-upgrades',
              params: { slug: $route.params.slug }
            }"
            label="Upgrades"
            step="03"
          />
        </BaseTabs>
        <div class="my-12">
          <nuxt-child />
        </div>
      </template>
      <template v-slot:aside>
        <transition name="fade" mode="out-in">
          <BuildCoverExplanation v-if="hasHelp" />
          <BuildCoverSummary v-else />
        </transition>
      </template>
    </BasePageColumns>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getProductByPermalink } from '@/graphql/product'

import BaseTabs from '@/components/base/BaseTabs'
import BaseTabsItem from '@/components/base/BaseTabsItem'
import BasePageColumns from '@/components/base/BasePageColumns'
import BuildCoverSummary from '@/components/build/BuildCoverSummary'
import BuildCoverExplanation from '@/components/build/BuildCoverExplanation'

const makeQuery = (variables) => {
  return {
    query: getProductByPermalink,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  components: {
    BaseTabs,
    BaseTabsItem,
    BasePageColumns,
    BuildCoverSummary,
    BuildCoverExplanation
  },
  computed: {
    ...mapGetters({
      isStep1Valid: 'builder/isStep1Valid',
      isStep2Valid: 'builder/isStep2Valid',
      isStep3Valid: 'builder/isStep3Valid'
    }),
    hasHelp() {
      return this.$store.getters['help/hasHelp']
    }
  },
  async asyncData({ app, params, error, store }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        permalink: params.slug
      })
    )
    if (
      !data.productByPermalink ||
      data.productByPermalink.status !== 'online'
    ) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    await store.dispatch('builder/presetProduct', data.productByPermalink)

    return {
      product: data.productByPermalink
    }
  }
}
</script>
