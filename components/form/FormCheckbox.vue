<template>
  <label
    :class="{
      checked: isChecked,
      disabled: disabled,
      'form-checkbox-small text-sm': isSmall
    }"
    class="form-checkbox flex items-center text-blue-900 font-normal"
  >
    <input
      :disabled="disabled"
      v-bind="attrs"
      :checked="isChecked"
      :value="val"
      v-on="listeners"
      @change="updateChecked"
      class="mr-6 opacity-0"
      type="checkbox"
    />
    {{ checkboxLabel }}
  </label>
</template>

<script>
export default {
  props: {
    value: [Boolean, Array],
    val: [String, Number],
    error: {
      type: Boolean,
      default: false
    },
    isSmall: Boolean
  },
  data() {
    return {
      checkedProxy: false
    }
  },
  computed: {
    attrs() {
      const { ...attrs } = this.$attrs
      return attrs
    },
    checkboxLabel() {
      return this.attrs.label
    },
    disabled() {
      return this.attrs.hasOwnProperty('disabled')
    },
    isArray() {
      return Array.isArray(this.value)
    },
    isChecked() {
      if (this.isArray) {
        return this.value.includes(this.val)
      }
      return this.value
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    }
  },
  methods: {
    updateChecked() {
      let valueToEmit = !this.value
      if (this.isArray) {
        valueToEmit = [].concat(this.value)
        if (valueToEmit.includes(this.val)) {
          valueToEmit.splice(valueToEmit.indexOf(this.val), 1)
        } else {
          valueToEmit.push(this.val)
        }
      }
      this.$emit('input', valueToEmit)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-checkbox {
  position: relative;
  cursor: pointer;
  &:before {
    @apply rounded border bg-white border-grey-300;
    content: ' ';
    height: 26px;
    position: absolute;
    transform: translateY(-50%);
    transition: border 0.3s;
    top: 50%;
    width: 26px;
  }
  &:after {
    content: ' ';
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path fill="%233C6FED" d="M18.4478,7.36619 C17.9598,6.87819 17.1688,6.87819 16.6798,7.36619 L10.4928,13.55319 L7.1338,10.19519 C6.6458,9.70719 5.8548,9.70719 5.3658,10.19519 C4.8778,10.68319 4.8778,11.47419 5.3658,11.96319 L9.6088,16.20519 C9.8528,16.44919 10.1728,16.57119 10.4928,16.57119 C10.8128,16.57119 11.1328,16.44919 11.3768,16.20519 L18.4478,9.13419 C18.9358,8.64519 18.9358,7.85419 18.4478,7.36619"/></svg>');
    left: 2px;
    height: 24px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s;
    width: 24px;
  }
  &.checked {
    &:before {
      @apply bg-blue-200 border border-blue-400  shadow-lg;
    }
    &:after {
      opacity: 1;
    }
  }
  &.disabled {
    &:before {
      border: inherit;
    }
    &:after {
      opacity: 0;
    }
  }
  &-small {
    margin-top: 1rem !important;
  }
}
</style>
