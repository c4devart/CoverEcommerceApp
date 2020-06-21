<template>
  <ValidationProvider
    v-slot="{ errors }"
    :rules="validationRules"
    :name="label"
    tag="div"
  >
    <div class="form-item form-credit-card">
      <label
        v-if="label"
        :id="itemId"
        class="text-sm block text-blue-900 mb-1 font-semibold"
      >
        {{ label }}
        <span v-if="required" class="required">*</span>
      </label>
      <div class="relative">
        <BaseCreditCardLogo
          v-if="isNumber && cardBrand"
          :brand="cardBrand"
          class="form-credit-card__logo"
        />
        <div
          v-if="isNumber && !cardBrand"
          class="form-credit-card__logo no-logo"
        />
        <input
          :id="itemId"
          v-mask="cardMask"
          :class="{ 'form-credit-card__input--card': isNumber }"
          :value="value"
          v-bind="attrs"
          @input="input"
          v-on="listeners"
          class="form-credit-card__input"
          type="text"
          autocomplete="off"
        />
      </div>

      <span v-if="errors.length" class="error__message">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
// import { ValidationProvider, extend } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
import { mask } from 'vue-the-mask'
import BaseCreditCardLogo from '@/components/base/BaseCreditCardLogo'

export default {
  directives: { mask },
  components: {
    ValidationProvider,
    BaseCreditCardLogo
  },
  props: {
    value: [String, Number],
    label: String,
    type: {
      type: String,
      default: 'number'
    }
  },
  computed: {
    attrs() {
      const { ...attrs } = this.$attrs
      return attrs
    },
    cardBrand() {
      const number = this.value
      const firstDigit = number && number.length > 0 ? number.toString()[0] : 0
      const cardsList = {
        3: 'American Express',
        4: 'Visa',
        5: 'Mastercard'
      }
      return cardsList[firstDigit] || null
    },
    cardMask() {
      if (!this.isNumber) {
        return '##/##'
      }
      if (this.brand === 'American Express') {
        return '#### ###### #####'
      }
      return '#### #### #### ####'
    },
    isNumber() {
      return this.type === 'number'
    },
    itemId() {
      return this.attrs.id
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
    required() {
      return this.attrs.hasOwnProperty('required')
    },
    validationRules() {
      if (this.rules) {
        return this.rules
      }
      const rules = []
      if (this.required) {
        rules.push('required')
      }
      if (this.type === 'email') {
        rules.push('email')
      }
      return rules.length ? rules.join('|') : null
    }
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-credit-card {
  &__logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    &.no-logo {
      width: 40px;
      height: 28px;
      background: #e2e8f0;
      border-radius: 4px;
    }
  }
  &__input--card {
    padding-left: 4.5rem;
  }
}
</style>
