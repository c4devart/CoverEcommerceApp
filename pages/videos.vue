<template>
  <BasePageColumns title="Videos">
    <template v-slot:main>
      <section
        class="max-w-4xl m-auto md:flex w-full md:px-5  md:flex-wrap content-start"
      >
        <template v-if="!videos">
          <div class="p-4 lg:px-8 w-full md:w-1/2 flex">
            <VideoItemPlaceholder />
          </div>
          <div class="p-4 lg:px-8 w-full md:w-1/2 flex">
            <VideoItemPlaceholder />
          </div>
        </template>
        <template v-else>
          <template v-if="videos.data.length">
            <div
              v-for="video in videos.data"
              :key="video.id"
              class="p-4 lg:px-8 w-full md:w-1/2 flex"
            >
              <VideoItem :video="video" />
            </div>
          </template>
          <p v-else class="my-8 text-grey-500 text-center">
            There is currently no video available.
          </p>
        </template>
      </section>
    </template>
  </BasePageColumns>
</template>

<script>
import { getAllVideos } from '@/graphql/video'
import BasePageColumns from '@/components/base/BasePageColumns'
import VideoItem from '@/components/video/VideoItem'
import VideoItemPlaceholder from '@/components/video/VideoItemPlaceholder'

export default {
  components: {
    BasePageColumns,
    VideoItem,
    VideoItemPlaceholder
  },
  apollo: {
    videos: {
      query: getAllVideos,
      variables() {
        return {
          first: 1000,
          page: 1
        }
      },
      fetchPolicy: 'no-cache'
    }
  },
  data: () => ({
    videos: null
  })
}
</script>
