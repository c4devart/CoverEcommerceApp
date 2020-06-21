<template>
  <BuildAccordion label="Cover Shape" is-open>
    <BuildImageItem
      v-for="option in options"
      :key="option.id"
      :option="option"
      :active="activeShape(option.id)"
      @selected="selectOption"
    />
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import BuildImageItem from '@/components/build/BuildImageItem'

export default {
  components: {
    BuildAccordion,
    BuildImageItem
  },
  data: () => ({
    option: {
      type: '',
      title: '',
      description: '',
      is_required: 0,
      price: '',
      max_value: '',
      order: '',
      fields: [
        {
          label: '',
          value: '',
          price: '',
          option: '',
          image: '',
          json: ''
        }
      ]
    },
    options: [
      {
        id: 1,
        image: 'shapes/square-rectangle.svg',
        label: 'Square / Rectangle with Rounded Corners',
        dimensions: {
          a: null,
          b: null,
          c: null
        }
      },
      {
        id: 2,
        image: 'shapes/round.svg',
        label: 'Round',
        dimensions: {
          a: null
        }
      },
      {
        id: 3,
        image: 'shapes/square-rectangle-cut-corners.svg',
        label: 'Square / Rectangle with Cut Corners',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null
        }
      },
      {
        id: 4,
        image: 'shapes/square.svg',
        label: 'Square / Rectangle',
        dimensions: {
          a: null,
          b: null
        }
      },
      {
        id: 5,
        image: 'shapes/one-cut-left-corner.svg',
        label: 'One Cut Left Corner',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 6,
        image: 'shapes/one-cut-right-corner.svg',
        label: 'One Cut Right Corner',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 7,
        image: 'shapes/two-cut-corners.svg',
        label: 'Two Cut Corners',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 8,
        image: 'shapes/octagon.svg',
        label: 'Octagon',
        dimensions: {
          a: null
        }
      },
      {
        id: 9,
        image: 'shapes/custom.svg',
        label: 'Custom',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 10,
        image: 'shapes/custom-side-side-speakers.svg',
        label: 'Side by Side Speakers',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 11,
        image: 'shapes/custom-diagonal-speakers.svg',
        label: 'Two Diagonal Speakers',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      },
      {
        id: 12,
        image: 'shapes/custom-four-speakers.svg',
        label: 'Four Speakers',
        dimensions: {
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          f: null
        }
      }
    ]
  }),
  methods: {
    activeShape(id) {
      return this.$store.getters['configurator/isActiveShape'](id)
    },
    selectOption(option) {
      option
        ? this.$store.commit('configurator/setOption', {
            type: 'shape',
            option,
            title: 'Shape',
            optionId: this.strapLength.id
          })
        : this.$store.commit('builder/unsetOption', 'shape')
    }
  }
}
</script>
