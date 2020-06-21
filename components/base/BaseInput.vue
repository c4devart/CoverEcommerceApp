<template>
  <div class="w-full flex base-input__container">
    <input
      v-model="currentValue"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :class="classModify"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="text-base leading-normal text-grey-600 base-input__input"
    />
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    placeholder: {
      type: String,
      default: ''
    },
    pxType: {
      type: String,
      default: '1'
    },
    id: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    value: [String, Number]
  },
  data() {
    return {
      currentValue: this.value,
      focus: false
    }
  },
  computed: {
    classModify() {
      const classMake = []
      if (this.textAlign === 'center') classMake.push('text-center')
      else classMake.push('text-left')
      if (this.pxType === '1') classMake.push('px-2')
      else classMake.push('px-5')
      return classMake
    }
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.$emit('input', value)
      this.$emit('change', value)
    },
    handleFocus(event) {
      this.focus = true
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.focus = false
      this.$emit('blur', event)
    }
  }
}
</script>
<style lang="scss" scoped>
.base-input {
  &__container {
    border-radius: 5px;
    border: 1px solid;
    @apply border-grey-300;
  }
  &__input {
    /* width: 56px; */
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 5px;
  }
}
.base-input__container:focus-within {
  @apply border-blue-400;
}
</style>
