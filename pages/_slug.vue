<template>
  <div class="page page-single">
    <section class="px-4 py-16">
      <h1 class="text-center text-4xl font-bold max-w-3xl m-auto m">
        {{ content.title }}
      </h1>
      <div
        v-if="content.hero_image"
        :style="heroBckgd"
        class="page__hero max-w-5xl m-auto rounded-large my-8"
      />
      <main class="max-w-3xl m-auto">
        <PageContent v-if="content.content" :content="content.content" />
      </main>
    </section>
  </div>
</template>

<script>
import { getContentBySlug } from '@/graphql/content'
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
    PageContent
  },
  head() {
    return {
      title: this.pageTitle
    }
  },
  computed: {
    heroBckgd() {
      return `background: no-repeat url(${this.content.hero_image}) center center / cover`
    }
  },

  async asyncData({ app, params, error }) {
    const { data } = await app.apolloProvider.defaultClient.query(
      makeQuery({
        slug: params.slug
      })
    )
    if (!data.contentBySlug || data.contentBySlug.status !== 'published') {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      content: data.contentBySlug,
      pageTitle: `${data.contentBySlug.title || null} / HotTub Covers Canada`
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__hero {
    height: 344px;
  }
}
</style>

<style>
.page-single p {
  @apply text-grey-600 mt-2;
}
</style>
