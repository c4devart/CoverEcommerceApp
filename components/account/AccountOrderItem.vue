<template>
  <div class="account-order-item py-4 border-b border-grey-300 ">
    <div class="flex md:items-center flex-col md:flex-row">
      <div class="table__col-sm">
        <div
          :style="backgroundUrl"
          class="account-order-item__img border rounded-md border-grey-300"
        />
      </div>
      <div class="table__col font-bold">
        {{ item.product.title }} (x{{ item.qty }})
      </div>
      <div v-if="type === 'account'" class="table__col">
        {{ item.tracking_number }}
      </div>
      <div class="table__col-sm text-right">{{ itemTotal }}</div>
    </div>
    <div v-if="item.make" class="flex items-center text-sm text-blue-900">
      <div class="table__col-sm"></div>
      <div class="table__col">Make: {{ item.make.name }}</div>
    </div>
    <div v-if="item.model" class="flex items-center text-sm text-blue-900">
      <div class="table__col-sm"></div>
      <div class="table__col">Model: {{ item.model.name }}</div>
    </div>
    <template v-if="item.specifications.length">
      <AccountOrderItemOption
        v-for="spec in item.specifications"
        :key="spec.id"
        :spec="spec"
        :type="type"
      />
    </template>
  </div>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'
import AccountOrderItemOption from '@/components/account/AccountOrderItemOption'

export default {
  components: {
    AccountOrderItemOption
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'account'
    }
  },
  computed: {
    backgroundUrl() {
      if (this.item.product.images) {
        return `background-image: url(${this.item.product.images[0].public_url}); background-repeat: no-repeat; background-size: cover;`
      }
      return 'background-color: #f7fafc'
    },
    itemTotal() {
      return currencyFormat(this.item.unit_price * this.item.qty)
    }
  }
}
</script>

<style lang="scss" scoped>
.account-order-item {
  &__img {
    width: 60px;
    height: 60px;
  }
}
</style>
