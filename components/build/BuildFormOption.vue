<template>
  <div>
    <template v-if="formOption">
      <FormMultiselect
        v-if="isMultiple"
        v-model="formValue"
        :options="formOption.fields"
        :required="formOption.is_required"
        :label-text="formOption.title"
        @request-info="requestInfo"
        :has-info="hasInfo"
        label="label"
      />
      <FormItem
        v-else
        :label="formOption.title"
        :type="inputType"
        v-model="formOption.value"
        @request-info="requestInfo"
        :has-info="hasInfo"
        :required="formOption.is_required"
      />
      <p class="text-grey-600 mt-1 text-sm">{{ formOption.description }}</p>
    </template>
    <FormLoadingPlaceholder v-else />
  </div>
</template>

<script>
import FormLoadingPlaceholder from '@/components/form/FormLoadingPlaceholder'
import FormItem from '@/components/form/FormItem'
import FormMultiselect from '@/components/form/FormMultiselect'

export default {
  components: {
    FormItem,
    FormMultiselect,
    FormLoadingPlaceholder
  },
  props: {
    label: String,
    hasInfo: Boolean,
    step: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    isMultiple: Boolean,
    isTextarea: Boolean,
    request: Object,
    default: String
  },
  data() {
    return {
      formOption: null,
      formValue: null
    }
  },
  computed: {
    inputType() {
      if (this.isTextarea) {
        return 'textarea'
      }
      return this.option.type === 'number' ? 'number' : 'text'
    },
    // formValue: {
    //   get() {
    //     return this.defaultValue
    //   },
    //   set(option) {
    //     option
    //       ? this.$store.commit('builder/setOption', {
    //           type: this.type,
    //           option,
    //           title: this.option.title,
    //           optionId: this.option.id,
    //           step: this.step
    //         })
    //       : this.$store.commit('builder/unsetOption', this.type)
    //     this.$emit('update')
    //   }
    // },
    option() {
      return this.$store.getters['builder/retrieveProductOption'](this.type)
    }
  },
  mounted() {
    this.formOption = { ...this.option }
    this.$watch(
      'formOption',
      (newVal) => {
        newVal && newVal.value
          ? this.$store.commit('builder/setOption', {
              type: this.type,
              option: this.formOption,
              title: this.option.title,
              optionId: this.option.id,
              step: this.step
            })
          : this.$store.commit('builder/unsetOption', this.type)
        this.$emit('update')
      },
      { deep: true }
    )
    this.$watch(
      'formValue',
      (newVal) => {
        newVal
          ? this.$store.commit('builder/setOption', {
              type: this.type,
              option: this.formValue,
              title: this.option.title,
              optionId: this.option.id,
              step: this.step
            })
          : this.$store.commit('builder/unsetOption', this.type)
        this.$emit('update')
      },
      { deep: true }
    )
    this.setDefault()
  },
  methods: {
    requestInfo() {
      this.$store.dispatch('help/triggerHelper', this.request)
    },
    setDefault() {
      let defaultOption = this.default || null
      const option = this.$store.getters['builder/retrieveOption'](this.type)
      if (option) {
        defaultOption =
          option.type && ['number', 'single'].includes(option.type)
            ? option.value
            : option.label
      }
      const defaultValue = this.option.fields.find(
        (field) => field.label === defaultOption
      )
      if (defaultValue) {
        this.formValue = defaultValue
        return
      }
      this.$set(this.formOption, 'value', defaultOption)
    }
  }
}
</script>

<style lang="scss" scoped></style>
