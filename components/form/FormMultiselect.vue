<template>
  <div
    :class="{ small: isSmall, aside: isAside, unstyled: isUnstyled }"
    class="form-multiselect"
  >
    <ValidationProvider v-slot="{ errors }" :rules="rules">
      <label
        v-if="labelText"
        :for="itemId"
        class="text-sm block text-blue-800 mb-1 flex justify-between items-center font-semibold "
      >
        <span>
          {{ labelText }}
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
      <Multiselect
        :id="itemId"
        :options="options"
        v-bind="attrs"
        :value="selectedValue"
        :multiple="multiple"
        @input="input"
        @search-change="searchChange"
        type="text"
        class="border border-grey-300 bg-white rounded outline-none"
      />
      <span v-if="errors.length" class="error__message">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  components: {
    Multiselect,
    ValidationProvider
  },
  props: {
    hasInfo: Boolean,
    value: [String, Number, Object, Array],
    labelText: String,
    multiple: Boolean,
    options: Array,
    isSmall: Boolean,
    isObject: Boolean,
    isAside: Boolean,
    isUnstyled: Boolean,
    required: Boolean
  },
  data: () => ({
    selectedValue: null
  }),
  computed: {
    attrs() {
      const { ...attrs } = this.$attrs
      return attrs
    },
    itemId() {
      return this.attrs.id
    },
    isObjectValue() {
      return typeof this.value === 'object' && this.isObject
    },
    // required() {
    //   return this.attrs.hasOwnProperty('required')
    // },
    rules() {
      if (this.required) {
        return 'required'
      }
      return null
    },
    trackBy() {
      return this.attrs['track-by'] || null
    }
  },
  watch: {
    value() {
      this.assignBaseValue()
    }
  },
  created() {
    this.assignBaseValue()
  },
  methods: {
    assignBaseValue() {
      if (!this.multiple && this.trackBy && this.options && this.value) {
        const valueToCompare = this.isObjectValue
          ? this.value[this.trackBy]
          : this.value
        this.selectedValue = this.options.filter(
          (o) => o[this.trackBy].toString() === valueToCompare.toString()
        )
        return
      }
      this.selectedValue = this.value
    },
    assignSelectedValue(value) {
      if (!this.multiple && this.trackBy) {
        this.selectedValue = value
          ? this.options.filter((o) => o[this.trackBy] === value[this.trackBy])
          : null
      }
    },
    input(value) {
      if (!this.multiple && this.trackBy) {
        this.assignSelectedValue(value)
        let returnedValue = null
        if (value) {
          returnedValue = this.isObjectValue ? value : value[this.trackBy]
        }
        this.$emit('input', returnedValue)
        return
      }
      this.selectedValue = value
      this.$emit('input', value)
    },
    searchChange(query) {
      this.$emit('async', query)
    }
  }
}
</script>

<style lang="scss">
.multiselect {
  min-height: 54px;
  width: auto !important;
  .multiselect__placeholder {
    margin-bottom: 0;
    padding-top: 9px;
    @apply truncate;
  }
  .multiselect__input {
    padding-top: 9px;
  }
  .multiselect__single {
    margin-top: 8px;
    @apply truncate;
  }
  .multiselect__select {
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 8px;
    padding: 0;
    margin: 0;
    right: 1rem;
    &:before {
      transition: all 0.3s;
      content: ' ';
      top: 0;
      position: absolute;
      margin-top: 0;
      width: 12px;
      height: 8px;
      border: none;
      background: url('data:image/svg+xml,%3Csvg%20width%3D%2211px%22%20height%3D%227px%22%20viewBox%3D%220%200%2011%207%22%20version%3D%221.1%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%20xmlns:xlink%3D%22http://www.w3.org/1999/xlink%22%3E%3Cpath%20fill%3D%22%233C6FED%22%20d%3D%22M6.376,6.376%20L10.618,2.134%20C11.106,1.646%2011.106,0.855%2010.618,0.366%20C10.13,-0.122%209.339,-0.122%208.851,0.366%20L5.492,3.725%20L2.134,0.366%20C1.646,-0.122%200.855,-0.122%200.366,0.366%20C0.122,0.61%201.89182003e-13,0.93%201.89182003e-13,1.25%20C1.89182003e-13,1.57%200.122,1.89%200.366,2.134%20L4.608,6.376%20C5.097,6.864%205.888,6.864%206.376,6.376%22%3E%3C/path%3E%3C/svg%3E')
        center right no-repeat;
    }
  }
  &.multiselect--active {
    .multiselect__select {
      transform: translateY(-45%) rotate(180deg);
    }
  }
  .multiselect__tags {
    border: none;
    min-height: 54px;
    padding: 8px 40px 0 8px !important;
    .multiselect__tags-wrap {
      .multiselect__tag {
        @apply rounded border border-blue-400 bg-blue-200 inline-flex items-center text-blue-900 text-sm;
        height: 36px;
        box-shadow: 0 3px 8px 0 rgba(129, 143, 174, 0.15);
        .multiselect__tag-icon {
          line-height: 13px;
          transform: translateY(-50%);
          top: 50%;
          &:hover {
            @apply bg-blue-200 text-white;
          }
          &:after {
            content: '\D7';
            @apply text-blue-900;
            font-size: 18px;
          }
        }
      }
    }
  }
  .multiselect__content-wrapper {
    overflow-x: hidden;
    @apply border-grey-300;
    margin-top: 1px;

    margin: 8px 0;
    border: 1px solid #d9e1ea;
    border-radius: 7px;
    box-shadow: 0 3px 8px 0 rgba(129, 143, 174, 0.15);

    .multiselect__content {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      .multiselect__element {
      }
    }
  }
  .multiselect__option {
    white-space: pre-wrap;
    @apply text-grey-600;
    &.multiselect__option--highlight {
      @apply bg-blue-200 text-blue-900;
      &:after {
        display: none;
      }
    }
    &.multiselect__option--selected {
      background: #f3f3f3;
      color: #35495e;
      font-weight: 700;
    }
  }
}
.form-multiselect {
  &.small {
    .multiselect {
      height: 42px;
      min-height: 42px;
      @apply border border-blue-300;
      max-width: 170px;
      min-width: 150px;
      display: inline-block;
      .multiselect__tags {
        height: 42px;
        min-height: 42px;
        padding: 8px 36px 0 8px !important;
        @apply bg-white;
      }
      .multiselect__single,
      .multiselect__placeholder,
      .multiselect__input {
        margin-top: 3px;
        padding-top: 0;
        @apply text-blue-500 text-sm pl-2;
      }
      .multiselect__option {
        &:after {
          display: none;
        }
        @apply text-sm pl-2;
      }
    }
  }
  &.unstyled {
    border: 1px solid transparent;
    width: 140px !important;
    height: 40px;
    min-height: 30px;
    label {
      font-size: 12px !important;
      @apply mb-0 text-grey-600;
    }
    .multiselect {
      .multiselect__tags {
        height: 20px;
        min-height: 20px;
        padding: 0 !important;
        background: none;
      }
      .multiselect__select {
        top: 10px;
        right: 0;
        opacity: 0.6;
      }
      .multiselect__single,
      .multiselect__placeholder,
      .multiselect__input {
        margin: 0;
        padding: 0 14px 0 0 !important;
        background: none;
        @apply text-blue-500 text-sm;
      }
      .multiselect__option {
        &:after {
          display: none;
        }
        @apply text-sm pl-2;
      }
      .multiselect__content-wrapper {
        min-width: 200px;
        right: 0;
        margin-top: 0;
      }
    }
  }
  &.aside {
    .multiselect {
      max-width: inherit;
      width: 100% !important;
      .multiselect__single,
      .multiselect__placeholder,
      .multiselect__input {
        @apply text-blue-900 text-base pl-2;
      }
    }
  }
}
</style>
