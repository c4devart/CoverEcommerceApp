<template>
  <div @click="$emit('close')" class="video-modal fixed inset-0">
    <a
      @click.prevent="$emit('close')"
      href=""
      class="video-modal__close absolute"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-6 -6 24 24"
        width="24"
        height="24"
        preserveAspectRatio="xMinYMin"
      >
        <path
          fill="#fff"
          d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
        />
      </svg>
    </a>
    <div
      class="video-modal__video rounded-large overflow-hidden absolute shadow"
    >
      <youtube ref="youtube" :video-id="videoId" :player-vars="playerVars" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    playerVars: {
      autoplay: 1
    }
  })
}
</script>

<style lang="scss">
.video-modal {
  background-color: rgba(26, 32, 44, 0.9);
  animation: fadeIn 0.2s forwards;
  z-index: 15;
  &__close {
    margin: 1rem;
    top: 0;
    right: 0;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  &__video {
    left: 50%;
    transform: translate(-50%, -50%);
    animation: slideDown 0.8s forwards;
    iframe {
      max-width: 100%;
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideDown {
  0% {
    top: 40%;
  }
  100% {
    top: 50%;
  }
}
</style>
