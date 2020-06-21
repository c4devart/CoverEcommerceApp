<template>
  <BuildAccordion
    title="Energy Saving Combos"
    is-open
    description="Our Energy Saving Combos are crafted to help extend the life of your hot
      tub cover and save energy. The Chemical Resistant Energy Shield and Full
      Hinge Seal stops heat from escaping your hot tub while the Vapour Barrier
      protects it from the water absorption that occurs when chemicals in your
      hot tub break down the integrity of the foam core."
  >
    <div class="flex flex-col flex-1 max-w-full">
      <template v-if="configYourself">
        <BuildFormOption
          :request="vapourRq"
          @update="unsetEnergySavings"
          step="upgrades"
          label="label"
          has-info
          type="vapour-barrier"
          is-multiple
          class="flex-1 my-2"
        />
        <BuildFormOption
          :request="chemicalRq"
          @update="unsetEnergySavings"
          step="upgrades"
          label="label"
          has-info
          type="chemical-shield"
          is-multiple
          class="flex-1 my-2"
        />
        <BuildFormOption
          :request="hingeRq"
          @update="unsetEnergySavings"
          step="upgrades"
          label="label"
          has-info
          is-multiple
          type="hinge-seal"
          class="flex-1 my-2"
        />
      </template>
      <template v-else>
        <p class="text-grey-700 mb-3">
          Save money by selecting one of our pre-built combos.
        </p>
        <div class="overflow-x-auto">
          <div v-if="combos" class="en-table flex my-6" style="width: 630px">
            <div class="en-table__col table-col en-table__col--header">
              <div class="table-col__row table-col__row--header"></div>
              <div class="table-col__row">6mil</div>
              <div class="table-col__row">8mil</div>
              <div class="table-col__row">12mil</div>
              <div class="table-col__row table-col__row--chemical">
                Chemical Resistant <br />
                Energy Shield
              </div>
              <div class="table-col__row">Full Hinge Seal</div>
              <div class="table-col__row table-col__row--footer"></div>
            </div>

            <div
              v-for="(field, i) in combos.fields"
              :key="field.id"
              :class="{
                'en-table__col--most-popular': i === 2,
                ' en-table__col--no-savings': i === 0
              }"
              class="en-table__col table-col"
            >
              <div class="table-col__row table-col__row--header">
                <div v-if="i === 2" class="table-col__tooltip">
                  Most Popular
                </div>
                <div class="table-select flex flex-col items-center">
                  <FormCheckbox
                    :value="isComboSelected(field.id)"
                    @input="selectCombo(field)"
                    style="margin-left: 8px"
                  />
                  <div class="mt-2">{{ field.label }}</div>
                </div>
              </div>
              <div
                v-for="(fieldOption, ind) in parsedOptions(field.configuration)"
                :key="`o-${ind}`"
                :class="{ 'table-col__row--chemical': ind === 3 }"
                class="table-col__row"
              >
                <img
                  v-if="fieldOption === 1"
                  src="/img/checkmark.svg"
                  alt="Checkmark"
                />
              </div>
              <div
                v-if="field.price"
                class="table-col__row table-col__row--footer"
              >
                <div class="en-table__regular">
                  Reg. {{ regPrice(field.configuration) }}
                </div>
                <div class="en-table__price">
                  {{ format(field.price) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <a
        @click.prevent="configYourself = !configYourself"
        href=""
        class="text-sm underline text-blue-600 mt-4"
      >
        {{ configYourselfLabel }}
      </a>
    </div>
  </BuildAccordion>
</template>

<script>
import { currencyFormat } from '@/utils/helpers'
import BuildAccordion from '@/components/build/BuildAccordion'
import FormCheckbox from '@/components/form/FormCheckbox'
import BuildFormOption from '@/components/build/BuildFormOption'

export default {
  components: {
    BuildAccordion,
    FormCheckbox,
    BuildFormOption
  },
  data: () => ({
    currentCombo: null,
    configYourself: false
  }),
  computed: {
    configYourselfLabel() {
      return this.configYourself
        ? 'Pick a combo and save money'
        : 'Configure your own energy saving options'
    },
    combos() {
      return this.$store.getters['builder/retrieveProductOption'](
        'energy-savings'
      )
    },
    vapourRq() {
      return {
        title: 'Vapour Barrier Upgrade',
        content:
          "<strong>Extends your Cover Warranty!</strong><br /><br />One of the most important features of our hot tub covers is the extra protection provided by the vapor barrier surrounding the foam. This helps your cover last longer and stay lighter as it protects it from the water absorption that occurs when chemicals in your hot tub, such as chlorine and bromine, break down the integrity of the foam core.<br /><br />One of the exclusive features of our hot tub covers is that we start with a <strong>6 mil vapour barrier</strong> surrounding the foam, which completely encapsulates the insulation, and is both vacuum and heat-sealed. This provides a protective barrier to your cover to prevent water absorption, keeping your cover light over the years.<br /><br />This is above and beyond the industry standard as most online manufacturers build their covers with only a <strong></strong>2 mil vapour barrier.<br /><br />We highly recommend upgrading to include even more layers of vapour barrier as it is a small investment for the additional years your cover will remain intact, light and easy to handle.<br /><br />We offer 2 protection upgrades over and above the <strong>included 6 mil vapour barrier</strong> through the manufacturing process, as we can double wrap the foam core of your custom cover with a second layer of 2 mil or 6 mil polyethylene sheeting.<br /><br />The <strong>8 mil barrier</strong> consists of 2 layers, an inner layer of 4 mil and outer layer of 4 mil.The <strong>12 mil barrier</strong> consists of 2 layers, an inner layer of 6 mil and then another 6 mil outer layer is added.<br /><br />This is something no other Canadian manufacturer offers and we know you'll love the results!"
      }
    },
    chemicalRq() {
      return {
        title: 'Chemical Resistant Energy Shield',
        content:
          'The highly effective, energy-saving chemical resistant shield is durable and replaces the standard black underside of the cover. This hot tub cover upgrade will save you money by acting as a shield to bounce radiant heat back into the hot tub that would normally be lost.'
      }
    },
    hingeRq() {
      return {
        title: 'Full Hinge Seal Upgrade',
        content:
          "<strong>More than pays for itself in energy savings!</strong><br /><br />Hot Tub Covers Canada's standard hinge seal consists of two steam pockets and a rubber gasket which runs down the center of the cover. This will not allow steam to escape from the sides of the cover as the steam stoppers are two pads that are placed on the underside of the cover, at the ends, between the two halves.<br /><br />We can upgrade this for you, with a single continuous seal stretching the entire length of the fold to improve energy efficiency.<br /><br />The Full Length Hinge Seal Option will make the cover more efficient by filling in the entire gap between the two halves with one continuous hinge seal to prevent heat loss from the center of the cover.<br /><br />The benefits of this upgrade are much more noticeable in snowy weather where covers without the full hinge seal demonstrate how much heat is lost by the small amount of snow which melts along the center of the hinge.<br /><br />Depending on the size of your cover, a standard hinge seal could leave the equivalent of 36 square inches of coverage with little or no insulation in some cases.<br /><br /><img src='/img/hinge_seal_graphic_labeled_blue.png' /><br /><br /><br />Check out the amount of heat that is lost from your hot tub without the addition of a Hinge Seal in the first few images below.<br /><br /><img src='/img/flir-1.png' /><br /><br />As shown in the bottom left image, a cover with no hinge seal shows significant heat loss along the hinge, but with the addition of a hinge seal the heat is contained to nearly the same level of efficiency as the rest of the cover!<br /><br />This translates into greater energy efficiency and cost savings for the peace of mind you deserve!<br /><br /><img src='/img/flir-3.png' />"
      }
    }
  },
  mounted() {
    this.setInitialOption()
  },
  methods: {
    parsedOptions(config) {
      const parsedCfg = JSON.parse(config)
      return parsedCfg.options
    },
    regPrice(config) {
      const parsedCfg = JSON.parse(config)
      return currencyFormat(parsedCfg.reg_price)
    },
    setInitialOption() {
      const option = this.$store.getters['builder/retrieveOption'](
        'energy-savings'
      )
      if (option) {
        this.currentCombo = option.option_field_id
      }
    },
    unsetEnergySavings() {
      this.currentCombo = null
      this.$store.commit('builder/unsetOption', 'energy-savings')
    },
    unsetSingleOptions() {
      this.$store.commit('builder/unsetOption', 'vapour-barrier')
      this.$store.commit('builder/unsetOption', 'chemical-shield')
      this.$store.commit('builder/unsetOption', 'hinge-seal')
    },

    isComboSelected(id) {
      return this.currentCombo === id
    },
    format(price) {
      return currencyFormat(price)
    },
    selectCombo(option) {
      if (this.currentCombo && this.currentCombo === option.id) {
        this.unsetEnergySavings()
        return
      }
      this.unsetSingleOptions()
      this.currentCombo = option.id
      this.$store.commit('builder/setOption', {
        type: this.combos.slug,
        optionId: this.combos.id,
        option,
        title: this.combos.title,
        step: 'upgrades'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.en-table {
  &__col {
    width: 100px;
    @apply text-center;
    &--no-savings {
      @apply bg-grey-100 rounded;
    }
    &--most-popular {
      @apply bg-green-100 border-2 border-green-500 rounded;
      margin-top: -2px;
    }
    .table-col {
      &__tooltip {
        @apply absolute bg-green-500 text-white rounded-sm text-xs px-1 h-5 inline-flex items-center justify-center w-20;
        top: -14px;
        &:after {
          top: 100%;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(72, 187, 120, 0);
          border-top-color: #48bb78;
          border-width: 4px;
          margin-left: -4px;
        }
      }
      &__row {
        @apply border-b relative border-blue-200 py-3 flex items-center justify-center;
        height: 50px;
        &--header {
          height: 120px;
          @apply border-none;
        }
        &--header {
          @apply items-start pt-8;
        }
        &--chemical {
          height: 100px;
        }
        &--footer {
          height: 70px;
        }
        &--footer {
          @apply border-none flex flex-col;
        }
      }
    }
    &--header {
      width: 130px;
      @apply text-grey-700 text-left;
      .table-col__row {
        @apply justify-start;
      }
    }
  }
  &__regular {
    @apply text-xs;
  }
  &__price {
    @apply font-bold;
  }
}
</style>
