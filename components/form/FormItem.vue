<template>
  <ValidationProvider
    v-slot="{ errors }"
    :rules="validationRules"
    :name="label"
    tag="div"
  >
    <div
      :class="{
        'form-item small': isSmall,
        'no-spacing': noSpacing,
        disabled
      }"
      class="form-item"
    >
      <div class="flex items-center justify-between mb-1">
        <label
          v-if="label"
          :id="itemId"
          :class="textClass"
          class="text-sm  flex-1 text-blue-800 font-semibold block flex justify-between items-center"
        >
          <span class="font-semibold">
            {{ label }}
            <span v-if="required" class="required">*</span>
          </span>
          <button v-if="hasInfo" @click="$emit('request-info')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
            >
              <path
                fill="#008ABD"
                fill-rule="evenodd"
                d="M12.902 3c-5.1 0-9.25 4.149-9.25 9.25s4.15 9.25 9.25 9.25c5.101 0 9.25-4.149 9.25-9.25S18.003 3 12.902 3zm-.32 11.455l.907-.386c-.253-.193-.401-.49-.401-.727 0-.654.579-1.04 1.218-1.486.787-.55 1.663-1.158 1.663-2.406 0-1.277-1.1-2.302-2.911-2.302-1.41 0-2.51.595-3.223 1.515l.743.802c.55-.727 1.247-1.218 2.361-1.218 1.174 0 1.753.64 1.753 1.382 0 .757-.61 1.173-1.263 1.619-.683.49-1.425 1.01-1.425 2.004 0 .446.178.862.579 1.203zm.313 2.897a.824.824 0 0 0 .817-.817.824.824 0 0 0-.817-.817.824.824 0 0 0-.817.817c0 .445.371.817.817.817z"
              />
            </svg>
          </button>
        </label>
      </div>
      <textarea
        v-if="isTextarea"
        :id="itemId"
        v-bind="attrs"
        :value="value"
        :disabled="disabled"
        @input="input"
        v-on="listeners"
        autocomplete="off"
      />
      <input
        v-else
        :id="itemId"
        :value="value"
        v-bind="attrs"
        :type="type"
        :disabled="disabled"
        @input="input"
        v-on="listeners"
        autocomplete="off"
      />
      <!-- <BaseInput
        v-else
        :id="itemId"
        v-model="value"
        v-bind="attrs"
        :disabled="disabled"
        :placeholder="placeholder"
        v-on="listeners"
        @input="input"
        :text-align="textAlign"
        autocomplete="off"
      >
        <slot />
      </BaseInput> -->

      <span v-if="errors.length" class="error__message">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
// import { ValidationProvider, extend } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
// import BaseInput from '@/components/base/BaseInput'

export default {
  components: {
    ValidationProvider
    // BaseInput
  },
  props: {
    value: [String, Number],
    label: String,
    isSmall: Boolean,
    noSpacing: Boolean,
    disabled: Boolean,
    rules: String,
    formType: {
      type: String,
      default: ''
    },
    hasInfo: Boolean,
    textAlign: {
      type: String,
      default: ''
    },
    required: Boolean
  },
  computed: {
    attrs() {
      const { ...attrs } = this.$attrs
      return attrs
    },
    isTextarea() {
      return this.type === 'textarea'
    },
    textClass() {
      return this.formType === 'checkout' ? '' : 'text-blue-900'
    },
    itemId() {
      return this.attrs.id
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
    // required() {
    //   return this.attrs.hasOwnProperty('required')
    // },
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
    },
    type() {
      return this.attrs.type || 'text'
    },
    commentTagClass() {
      return this.requiredComment === ''
        ? 'hidden'
        : this.requiredComment === 'all'
        ? ''
        : this.requiredComment === 'pc'
        ? ['lg:block', 'hidden']
        : ['lg:hidden', 'block']
    }
  },
  methods: {
    input(e) {
      /* const returnedValue = this.isCurrency
        ? this.unformat(e.target.value)
        : e.target.value
      this.$emit('input', returnedValue) */
      this.$emit('input', e.target.value)
    }
  }
}
</script>
