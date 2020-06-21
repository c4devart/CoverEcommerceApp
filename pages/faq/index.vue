<template>
  <BasePageColumns title="FAQ">
    <template v-slot:main>
      <section class="max-w-4xl m-auto md:px-5">
        <template v-if="!contents">
          <FaqLoadingPlaceholder />
          <FaqLoadingPlaceholder />
        </template>
        <template v-else>
          <template v-if="contents.data.length">
            <FaqItem
              v-for="item in contents.data"
              :key="item.id"
              :item="item"
            />
          </template>
          <p v-else class="my-8 text-grey-500 text-center">
            There is currently no FAQ article.
          </p>
        </template>
      </section>
    </template>
  </BasePageColumns>
</template>

<script>
import { getContents } from '@/graphql/content'
import BasePageColumns from '@/components/base/BasePageColumns'
import FaqLoadingPlaceholder from '@/components/faq/FaqLoadingPlaceholder'
import FaqItem from '@/components/faq/FaqItem'

export default {
  components: {
    BasePageColumns,
    FaqLoadingPlaceholder,
    FaqItem
  },

  head() {
    return {
      title: 'FAQ / HotTub Covers Canada'
    }
  },
  apollo: {
    contents: {
      query: getContents,
      variables() {
        return {
          first: 1000,
          page: 1,
          filterBy: {
            status: 'published',
            type: 'faq'
          }
        }
      },
      fetchPolicy: 'no-cache'
    }
  },
  data: () => ({
    contents: null
  })
}
</script>
