<template>
  <BuildAccordion
    title="Make and Model"
    class="build-cover-dim"
    is-open
    description="Do you know your Hot Tub make and model? If so, please select them below."
  >
    <template>
      <template v-if="!allMakes.length">
        <FormLoadingPlaceholder class="flex-1 md:mr-3" />
        <FormLoadingPlaceholder class="flex-1 md:mr-3" />
      </template>
      <template v-else>
        <FormMultiselect
          v-model="form.make"
          :options="allMakes"
          label="name"
          label-text="Hot Tub Make"
          class="flex-1 md:mr-3"
        />
        <FormMultiselect
          :disabled="!hasSelectedMake"
          v-model="form.model"
          :options="allModels"
          label="name"
          label-text="Hot Tub Model"
          class="flex-1 md:ml-3"
        />
      </template>
    </template>
  </BuildAccordion>
</template>

<script>
import BuildAccordion from '@/components/build/BuildAccordion'
import { getAllMakes } from '@/graphql/make'
import FormMultiselect from '@/components/form/FormMultiselect'
import FormLoadingPlaceholder from '@/components/form/FormLoadingPlaceholder'

export default {
  components: {
    BuildAccordion,
    FormMultiselect,
    FormLoadingPlaceholder
  },
  // apollo: {
  //   allMakes: {
  //     query: getAllMakes,
  //     fetchPolicy: 'no-cache'
  //   }
  // },
  data: () => ({
    allMakes: [],
    form: {
      make: null,
      model: null
    }
  }),
  computed: {
    allModels() {
      if (this.hasSelectedMake) {
        const selectedMake = this.allMakes.find(
          (make) => make.id === this.form.make.id
        )
        return selectedMake ? selectedMake.models : []
      }
      return []
    },
    hasSelectedMake() {
      return !!this.form.make
    }
  },
  async mounted() {
    await this.getMakes()
    await this.$watch('form.model', () => {
      if (this.form.model && this.form.make) {
        this.$store.dispatch('builder/presetConfig', this.form)
      }
    })
    await this.$watch('form.make', () => (this.form.model = null))
  },
  methods: {
    presetMakesModel() {
      if (this.$store.state.builder.makeModel.make) {
        this.form.make = this.allMakes.find(
          (make) => make.id === this.$store.state.builder.makeModel.make.id
        )
      }
      if (this.$store.state.builder.makeModel.model) {
        this.form.model = this.allModels.find(
          (model) => model.id === this.$store.state.builder.makeModel.model.id
        )
      }
    },
    async getMakes() {
      const { data } = await this.$apollo.query({
        query: getAllMakes,
        variables: {
          slug: 'hot-tub-covers'
        },
        fetchPolicy: 'no-cache'
      })
      this.allMakes = data.allMakes
      this.presetMakesModel()
    }
  }
}
</script>

<style lang="scss" scoped></style>
