<template>
  <section
    class="orders-item flex flex-col md:flex-row border border-grey-200 shadow rounded-large p-4 pl-8 pr-6 mb-5 relative text-sm md:items-center"
  >
    <div class="orders-item__col">{{ orderDate }}</div>
    <div class="orders-item__col py-2 md:py-0">
      {{ order.order_number }}
    </div>
    <div class="orders-item__col">
      <BaseStatus :label="order.display_status" no-style />
    </div>
    <div class="orders-item__col-large py-2 md:py-0">
      {{ trackingNumber }}
    </div>
    <div class="orders-item__col-large flex justify-end">
      <BaseBtn
        :link="{ name: 'account-orders-id', params: { id: order.id } }"
        label="View Order"
        type="secondary"
      />
    </div>
  </section>
</template>

<script>
import { getDate } from '@/utils/datetime'

import BaseBtn from '@/components/base/BaseBtn'
import BaseStatus from '@/components/base/BaseStatus'

export default {
  components: {
    BaseBtn,
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
    },
    trackingNumber() {
      return this.order.tracking_number || 'Not Available Yet'
    }
  }
}
</script>

<style lang="scss" scoped>
.orders-item {
  &__col {
    max-width: 120px;
    flex: 1;
    &-large {
      flex: 1;
      max-width: inherit;
    }
  }
}
</style>
