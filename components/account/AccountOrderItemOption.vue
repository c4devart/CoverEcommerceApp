<template>
  <div class="account-order-option">
    <div :class="textColor" class="flex items-center text-sm">
      <div class="table__col-sm" />
      <div class="table__col">{{ optionNameValue }}</div>
      <div v-if="type === 'account'" class="table__col" />
      <div class="table__col-sm text-right text-grey-700">{{ cost }}</div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'

export default {
  props: {
    spec: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'account'
    }
  },
  computed: {
    textColor() {
      return this.type !== 'account' ? 'text-blue-900' : 'text-grey-700'
    },
    optionNameValue() {
      const title = this.spec.option.title
      const value = this.spec.optionField
        ? this.spec.optionField.label
        : this.spec.value
      return `${title}: ${value}`
    },
    cost() {
      if (!this.spec.hasOwnProperty('cost') || this.spec.cost === 0) return ''
      return currencyFormat(this.spec.cost)
    }
  }
}
</script>

<style lang="scss" scoped></style>
