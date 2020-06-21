<template>
  <div class="my-4">
    <youtube
      v-if="isYouTube"
      :video-id="videoId"
      :player-vars="playerVars"
      @playing="playing"
    />
    <template v-else>
      {{ embed }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    embed: {
      type: Object,
      required: true
    }
  },
  computed: {
    videoId() {
      return this.embed.embed.split('/').reverse()[0]
    },
    playerVars() {
      return {
        autoplay: 1
      }
    },
    isYouTube() {
      return this.embed.service === 'youtube'
    }
  }
}
</script>
