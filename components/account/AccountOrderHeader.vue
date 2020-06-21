<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center">
      <div class="text-lg font-bold mr-3">Order #{{ order.order_number }}</div>
      <BaseStatus :label="order.display_status" />
    </div>
    <div class="text-sm">Order Date: {{ orderDate }}</div>
  </header>
</template>

<script>
import { getDate } from '@/utils/datetime'

import BaseStatus from '@/components/base/BaseStatus'

export default {
  components: {
    BaseStatus
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    orderDate() {
      return getDate(this.order.created_at, 'short')
    }
  }
}
</script>

<style lang="scss" scoped></style>
