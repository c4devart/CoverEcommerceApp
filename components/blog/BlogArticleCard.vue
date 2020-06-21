<template>
  <nuxt-link
    to="/"
    class="rounded-md block overflow-hidden border-2 border-white hover:border-blue-300 my-12"
  >
    <article class="  max-w-3xl min-h-xs flex flex-col lg:flex-row">
      <section class="bg-blue-300 w-full h-32 lg:h-auto lg:w-2/5 " />
      <section class="p-8">
        <div class="flex items-center">
          <div class="label">General Interest</div>
          <time datetime="2020-12-18 20:00" class="text-grey-600 ml-2">
            Dec 18, 2020
          </time>
        </div>
        <h1 class="text-blue-900 text-2xl font-semibold mt-2">
          Holiday Hot Tub Gatherings
        </h1>
        <p class="text-grey-600 pr-8 max-w-lg">
          Can you believe it? We’re in the midst of Hanukkah, Christmas is but a
          few sleeps away… and soon we’ll be counting down to midnight. Where
          did 2019 go?! We were talking around the office today about..
        </p>
      </section>
    </article>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
