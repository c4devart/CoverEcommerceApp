<template>
  <section class="made-canada container pt-0 pb-16 md:pb-20">
    <div class="flex justify-between items-center flex-col-reverse md:flex-row">
      <div class="md:w-1/2 max-w-lg mt-8 md:mt-0">
        <PageTitle type="h2">Hot Tub Covers<br />Made For Canada </PageTitle>
        <p class="pr-4 py-5">
          Our singular goal is to provide you with a top quality, durable
          Canadian-made replacement hot tub cover. Our covers are among the
          lightest in the industry and only approx. 1lb heavier per cover style
          upgrade. <br /><br />
          We offer several unique models that can be custom fitted to your
          outdoor spa or jacuzzi. They come in all shapes and sizes with a
          7-year warranty.<br /><br />
          All of our hot tub covers are built to withstand the rigors of the
          harsh Canadian climate. Not every cover you find on the Internet will
          last in our weather.
        </p>
        <div class="flex justify-center md:justify-start">
          <nuxt-link to="/videos" href class="btn btn--secondary">
            See how they’re made
          </nuxt-link>
        </div>
      </div>
      <div class="made-canada__video w-full md:w-1/2">
        <VideoItem
          video="https://www.youtube.com/watch?reload=9&v=vTjxi-dlTq0"
          is-home
          preview="/img/madeforcanada.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import VideoItem from '@/components/video/VideoItem'
import PageTitle from '@/components/page/PageTitle'

export default {
  components: {
    VideoItem,
    PageTitle
  }
}
</script>

<style lang="scss" scoped>
.made-canada {
  &__text {
    max-width: 480px;
  }
}
</style>
