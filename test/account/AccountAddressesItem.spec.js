import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountAddressesItem from '@/components/account/AccountAddressesItem'

const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
  'customer/isDefaultAddress': () => () => false
}

const store = new Vuex.Store({
  getters
})

store.dispatch = jest.fn()

describe('AccountAddressesItem', () => {
  const wrapper = shallowMount(AccountAddressesItem, {
    localVue,
    store,
    propsData: {
      keyId: 1,
      address: {
        name: 'My Address',
        street: '402 Queen Street W',
        city: 'Toronto',
        state_province: 'ON',
        zip_postal: 'M2D 0SW',
        phone: '647 123 4567',
        country: 'Canada'
      }
    }
  })
  it('should dispatch an action when checkbox checked', () => {
    wrapper.vm.defaultAddress = true
    expect(store.dispatch).toHaveBeenCalledWith(
      'customer/updateCustomerDefaultAddress',
      1
    )
  })
  it('should emit on delete btn click', () => {
    wrapper.find('.address-item__delete').trigger('click')
    expect(wrapper.emitted().delete[0]).toEqual([
      {
        index: 1,
        item: {
          city: 'Toronto',
          country: 'Canada',
          name: 'My Address',
          phone: '647 123 4567',
          state_province: 'ON',
          street: '402 Queen Street W',
          zip_postal: 'M2D 0SW'
        }
      }
    ])
  })
})
