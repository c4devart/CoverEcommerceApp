<template>
  <section class="blog">
    <BlogHero />
    <section class="container md:flex-row flex-col flex justify-between">
      <main class="md:w-2/3 md:pr-12 lg:pr-0">
        <BlogSearch class="md:hidden block mt-8" />
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
        <div class="flex justify-center mb-12">
          <button class="btn btn--secondary">Load More Blogs</button>
        </div>
      </main>
      <aside class="mt-8 mb-12 hidden md:block">
        <BlogSearch />
        <BlogAlsoInterested />
      </aside>
    </section>
  </section>
</template>

<script>
import BlogArticleCard from '@/components/blog/BlogArticleCard'
import BlogHero from '@/components/blog/BlogHero'
import BlogAlsoInterested from '@/components/blog/BlogAlsoInterested'
import BlogSearch from '@/components/blog/BlogSearch'

export default {
  components: {
    BlogArticleCard,
    BlogHero,
    BlogAlsoInterested,
    BlogSearch
  }
}
</script>
