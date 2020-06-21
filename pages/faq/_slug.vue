<template>
  <div class="page">
    <section class="px-4 py-16">
      <div class="max-w-3xl m-auto">
        <BaseGoBack :to="{ name: 'faq' }">Return to FAQ</BaseGoBack>
        <h1 class="text-4xl font-bold my-4">
          {{ content.title }}
        </h1>
        <main>
          <PageContent v-if="content.content" :content="content.content" />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import { getContentBySlug } from '@/graphql/content'
import BaseGoBack from '@/components/base/BaseGoBack'
import PageContent from '@/components/page/PageContent'

const makeQuery = (variables) => {
  return {
    query: getContentBySlug,
    variables,
    fetchPolicy: 'no-cache'
  }
}

export default {
  components: {
    BaseGoBack,
    PageContent
  },

  head() {
    return {
      title: this.pageTitle
    }
  },

  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        slug: params.slug
      })
    )
    if (!data.contentBySlug) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      content: data.contentBySlug,
      pageTitle: `${data.contentBySlug.title || null} / HotTub Covers Canada`
    }
  }
}
</script>
