<template>
  <a :href="`mailto:${email}`">
    {{ email }}
  </a>
</template>

<script>
export default {
  data: () => ({
    email: 'vasb@ubgghopbirefpnanqn.pn '
  }),
  mounted() {
    this.decodeEmail()
  },
  methods: {
    decodeEmail() {
      // ROT13, https://en.wikipedia.org/wiki/ROT13
      const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
      const index = (x) => input.indexOf(x)
      const translate = (x) => (index(x) > -1 ? output[index(x)] : x)
      this.email = this.email
        .split('')
        .map(translate)
        .join('')
    }
  }
}
</script>
