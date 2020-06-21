import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BaseAddressesAddEditModal from '@/components/base/BaseAddressesAddEditModal'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store()

store.dispatch = jest.fn()

describe('BaseAddressesAddEditModal', () => {
  const wrapper = shallowMount(BaseAddressesAddEditModal, {
    localVue,
    store,
    stubs: {
      ValidationObserver: {
        render: () => {},
        methods: {
          validate: () => true
        }
      }
    },
    data: () => ({
      form: {
        city: 'Toronto',
        country: 'CANADA',
        is_default: true,
        name: 'John Jonhson',
        phone: '(647)123-4567',
        state_province: 'ON',
        street: '123 King Street W',
        zip_postal: 'M2K 5S1'
      }
    })
  })
  it('should dispatch an action when btn clicked and emit an event', async () => {
    wrapper.find('.btn-add').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.dispatch).toHaveBeenCalledWith('customer/addCustomerAddress', {
      city: 'Toronto',
      country: 'CANADA',
      is_default: true,
      name: 'John Jonhson',
      phone: '(647)123-4567',
      state_province: 'ON',
      street: '123 King Street W',
      zip_postal: 'M2K 5S1'
    })
    expect(wrapper.emitted().cancel[0]).toEqual([])
  })
})
