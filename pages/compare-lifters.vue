<template>
  <section class="contact-container">
    <BasePageColumns title="Compare Lifters" type="general">
      <template v-slot:main>
        <div class="compare shadow rounded-large bg-grey-100 overflow-hidden">
          <div
            class="compare__header hidden lg:flex p-2 items-center justify-between bg-grey-200"
          >
            <div class="w-32" />
            <div class="w-1/4 font-semibold leading-none px-3 py-2">
              Lifter Name
              <div class="text-sm text-grey-500 font-normal">Lift Type</div>
            </div>
            <div class="w-1/5 font-semibold px-3 py-2">
              Mount
            </div>
            <div class="w-1/5 font-semibold px-3 py-2">Size/Width</div>
            <div class="w-1/5 font-semibold px-3 py-2">Clearance</div>
            <div class="w-1/3 font-semibold px-3 py-2">Features</div>
            <div class="w-1/5 font-semibold px-3 py-2">Price</div>
          </div>

          <div class="compare__body">
            <div
              v-for="(row, i) in tableData"
              :key="i"
              :class="rowBkgd(i)"
              class="border-b-2 border-grey-400 lg:border-none flex-col lg:flex-row flex lg:p-2 lg:items-center justify-between text-grey-600"
            >
              <div class="lg:w-32 flex">
                <div
                  style="flex: 0 0 110px"
                  class=" pt-4 lg:hidden bg-grey-200"
                />
                <img
                  :src="row.img.src"
                  :alt="row.img.alt"
                  class="pt-4 lg:p-0"
                />
              </div>
              <div
                class="lg:w-1/4 leading-none flex items-stretch lg:items-center"
              >
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden font-semibold leading-none px-3 py-2 bg-grey-200 mr-3"
                >
                  Lifter Name
                  <div class="text-sm text-grey-500 font-normal">Lift Type</div>
                </div>
                <div class="p-2 lg:p-3">
                  {{ row.name }}
                  <div class="text-sm text-grey-500">{{ row.type }}</div>
                </div>
              </div>
              <div class="lg:w-1/5 flex items-stretch lg:items-center">
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden bg-grey-200 w-28 font-semibold p-2 mr-3"
                >
                  Mount
                </div>
                <div v-html="row.mount" class="p-2 lg:p-3" />
              </div>
              <div class="lg:w-1/5 flex items-stretch lg:items-center">
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden bg-grey-200 w-28 font-semibold p-2 mr-3"
                >
                  Size/Width
                </div>
                <div v-html="row.size" class="p-2 lg:p-3" />
              </div>
              <div class="lg:w-1/5 flex items-stretch lg:items-center">
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden bg-grey-200 w-28 font-semibold p-2 mr-3"
                >
                  Clearance
                </div>
                <div v-html="row.clearance" class="p-2 lg:p-3" />
              </div>
              <div class="lg:w-1/3 flex items-stretch lg:items-center">
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden bg-grey-200 w-28 font-semibold p-2 mr-3"
                >
                  Feature
                </div>
                <div v-html="row.feature" class="p-2 lg:p-3" />
              </div>
              <div class="lg:w-1/5  flex items-stretch lg:items-center">
                <div
                  style="flex: 0 0 110px"
                  class="lg:hidden bg-grey-200 w-28 font-semibold p-2 pb-4 mr-3"
                >
                  Price
                </div>
                <div v-html="row.price" class="p-2 pb-4 lg:p-3" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </BasePageColumns>
  </section>
</template>

<script>
import BasePageColumns from '@/components/base/BasePageColumns'

export default {
  components: {
    BasePageColumns
  },
  data: () => ({
    tableData: [
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_beside.png',
          alt: 'cover lifter beside hot tub'
        },
        name: 'Ultralift Visionlift',
        type: 'Dual Gas Shocks',
        mount: 'Cabinet Mount',
        size: 'Maximum hot tub corner radius of 20"',
        clearance: 'min 10-14" Rear/5" Side',
        feature:
          '<ul><li>5 Year Limited Warranty</li><li>Open or Close on either side - Full 360 degree view</li><li>Does not work with In-Deck or Round Spas</li></ul><br /><a href="/pdf/ULTRALIFT-Visionlift-Instructions.pdf" class="dl">Download Instructions »</a>',
        price: 'Regular: $349.95<br />Special: $299.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'cover lifter that sits up beside cabinet'
        },
        name: 'Cover Buddy II',
        type: 'Manual',
        mount: 'Cabinet Mount',
        size: 'Maximum hot tub corner radius of 12"',
        clearance: 'min 10"',
        feature:
          '<ul><li>Durable non-corrosive composite mounting base</li><li>Equipped with 3 hook towel holder</li><li>Foam grip handles</li></ul><br/><a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/CoverBuddy-Guide.pdf" class="dl">Download Instructions »</a>',
        price: 'Regular: $179.95<br />Special: $169.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_across.png',
          alt: 'cover lifter that sits upright'
        },
        name: 'Cover Roller',
        type: 'Manual',
        mount: 'Cabinet Mount',
        size:
          '<ul> <li> Partially-sunken spas must rise 20 inches above the deck to make room for the bracket (Sorry, it won\'t work with fully sunken or round spas). </li> <li> The brackets measure 32" when extended and are 19-3/8" in height. </li> </ul>',
        clearance:
          'Please allow clearance behind your hot tub equal to the 1/2 width of your cover.',
        feature:
          '<ul> <li>Easy on/Easy off Roller design</li> <li>Only one of its kind</li> <li>Gentle on your cover</li> <li> Cover can be used as a table top while in its open position<br /> </li> </ul> <br /> <a href="/media/animations/1ROLLER.SWF" class="dl" >View Animation »</a ><br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/CoverRoller_Instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $119.95<br />Special: $109.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'cover lifter that sits upright'
        },
        name: 'Cabinet Free Cover Rest',
        type: 'Manual',
        mount: 'Deck or floor Mount',
        size: 'Square or rectangle hot tubs up to 96"',
        clearance: 'Roughly 24" or 2 feet of rear clearance',
        feature:
          '<ul> <li> Steel brackets, stainless steel hardware and rust free construction </li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/CabinetFreeCoverRest-Instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $219.95<br />On Special: $189.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'cover lifter that sits upright'
        },
        name: 'Cabinet Mount Assist Lift &amp; Lock',
        type: 'Dual gas assist lifters',
        mount: 'Cabinet Mount',
        size: 'Designed for corner or square-radius hot tubs',
        clearance: 'Requires 18" of rear clearance',
        feature:
          '<ul> <li>Create privacy and windbreak</li> <li>Engineered locking device</li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/CabinetMountAssistLiftLock-Instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $299.95<br />Special: $249.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'spa lifter that sits at top of cabinet'
        },
        name: 'Ultralift Standard',
        type: 'Manual',
        mount: 'Cabinet mount, or mount to deck or patio beside hot tub',
        size:
          '<ul> <li> Fit virtually any spa - square, rectangle, octagon, and spas with angled corners </li> <li>One size really fits all</li> </ul>',
        clearance:
          'min 5" clearance on either side for cabinet, min 14" at rear if deck mount',
        feature:
          '<ul> <li>Canadian made <span class="leaf"></span></li> <li> Ultralift\'s patented sliding brackets - constructed from 1 1/4" diameter tube with no hydraulics or permanent cover attachments </li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/ultralift-installation.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $249.95<br />Special: $189.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'cover saver for cover lifters'
        },
        name: 'Ultralift Hydraulic',
        type: 'Dual Hydraulic',
        mount:
          '<ul> <li>High side or top cabinet mount</li> <li> Attaches to the side of your spa, requiring minimal clearance and provides a privacy screen when in the open position </li> </ul>',
        size:
          '<ul> <li>Perfect for tight spaces.</li> <li> Suitable for above-ground or if spa is set into deck the mounting assembly can be attached to floor or deck. </li> </ul>',
        clearance:
          '3x\'s the depth of your cover for rear clearance, and 5" - 6" of side clearance',
        feature:
          '<ul> <li>Canadian made <span class="leaf"></span></li> <li> If your hot tub or spa is set into your deck, the mounting assembly can be attached directly to the floor or deck surface </li> <li>Limited lifetime warranty</li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/hydraulic_ultra_lifter_instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $335.95<br />Special: $249.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_beside.png',
          alt: 'cover lifter beside hot tub'
        },
        name: 'Glider Pro Cover Lifter',
        type: 'Manual',
        mount: 'Cabinet or deck mount',
        size:
          '<ul> <li> Suitable for above-ground hot tubs on any patio or deck. </li> </ul>',
        clearance:
          '<ul> <li> 18" - 20quot; of clearance needed at the back of your hot tub </li> </ul>',
        feature:
          '<ul> <li> Reflex Action Support Strap System for moving cover on and off in 2 easy steps </li> <li> Patented Seam Saver Top Bar extends the life of your cover </li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/base/default/pdf/Glider-Cover-Lifter-Installation.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $199.95<br />Special: $119.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_across.png',
          alt: 'cover lifter that sits across top side'
        },
        name: 'Cabinet Free Cover Shelf',
        type: 'Manual',
        mount: 'Floor or deck mount',
        size: 'Universal Design to fit any spa',
        clearance: '4 feet of clearance required',
        feature:
          '<ul> <li>Cabinet free installation</li> <li>Inside spa removal</li> <li>Stainless steel hardware and rust free construction</li> <li>Adjustable arm to access behind your spa<br /></li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/CabinetFreeCoverShelf-Instuctions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $219.95<br />Special: $199.95'
      },
      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_beside.png',
          alt: 'cover lifter that sits upright'
        },
        name: 'Cabinet Free Cover Basket',
        type: 'Single gas-assist cylinder',
        mount: 'Floor or deck mount',
        size: 'Fits all spa shapes',
        clearance: '24" clearance required',
        feature:
          '<ul> <li>Durable, rust-resistant construction</li> <li>Cover removal from inside or outside the spa</li> <li>Folded down, the cover provides a full view</li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/base/default/pdf/CabinetFreeCoverBasket-Instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $289.95<br />Special: $244.95'
      },

      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_beside.png',
          alt: 'cover lifter that sits beside hot tub'
        },
        name: 'Ultralift Undermount',
        type: 'Pivot',
        mount: 'Undermount - bracket slides underneath hot tub.',
        size: 'Fits square, rectangular and hot tubs with angled corners.',
        clearance:
          'Requires about 3x\'s the depth of your cover for rear clearance and 5" - 6" on either side of hot tub.',
        feature:
          '<ul> <li>Canadian made <span class="leaf"></span>.</li> <li> If your hot tub or spa is set into your deck, the mounting assembly can be attached directly to the floor or deck surface </li> <li>Limited lifetime warranty</li> </ul> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/ultralift-installation.pdf" >Download Instructions »</a >',
        price: 'Regular: $299.95<br />Special: $239.00'
      },

      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/hottublifter_up.png',
          alt: 'cover lifter that sits up top'
        },
        name: 'Cabinet Mount Lift',
        type: 'Manual - Easy lift from either side',
        mount: 'Cabinet Mount',
        size: 'Designed for corner or square-radius spas',
        clearance: '24" inches rear clearance',
        feature:
          '<ul> <li>Create privacy and windbreak</li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc//pdf/CabinetMountLifter.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $199.95<br />Special: $179.95'
      },

      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/coverlock-chart.jpg',
          alt: 'cover saver for cover lifters'
        },
        name: 'Universal Cover Lock',
        type: 'Lifter accessory - safety lock',
        mount: 'N/A',
        size: 'Designed to fit all center bar cover lifters',
        clearance: 'N/A',
        feature:
          '<ul> <li>Designed with safety in mind</li> <li>Easy to install</li> <li>Windlock</li> <li>Rust free construction</li> <li>100% stainless steel hardware</li> </ul>',
        price: 'Regular: $159.95<br />Special: $129.95'
      },

      {
        img: {
          src:
            'http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/images/comparison-chart/coversaver_snapshot.png',
          alt: 'cover saver for cover lifters'
        },
        name: 'Cover Saver',
        type: 'Lifter accessory - prolongs the life of your cover',
        mount: 'N/A',
        size: 'Designed to fit all center bar cover lifters',
        clearance: 'N/A',
        feature:
          '<ul> <li> The two part system with nylon strapping is durable and functional. </li> <li>Easy to install (no tools required).</li> <li>Works well with existing bar cover lifters</li> <li> The spa cover\'s full weight rests on special T brackets - not on the centre hinge </li> </ul> <br /> <a href="http://www.hottubcoverscanada.ca/skin/frontend/default/htcc/pdf/Cover_Saver_Instructions.pdf" class="dl" >Download Instructions »</a >',
        price: 'Regular: $49.95<br />Special: $34.95'
      }
    ]
  }),
  methods: {
    rowBkgd(i) {
      return i % 2 === 0 ? 'bg-white' : 'bg-grey-100'
    }
  }
}
</script>

<style lang="scss" scoped>
.compare__header {
  @apply;
}
</style>
