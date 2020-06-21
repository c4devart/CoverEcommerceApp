import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountAddressesDeleteModal from '@/components/account/AccountAddressesDeleteModal'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store()

store.dispatch = jest.fn()

describe('AccountAddressDeleteModal', () => {
  const wrapper = shallowMount(AccountAddressesDeleteModal, {
    localVue,
    store,
    propsData: {
      delete: {
        index: 1,
        item: {
          street: '402 Queen Street W',
          city: 'Toronto',
          state_province: 'ON'
        }
      }
    }
  })
  it('should return the right label if delete item exists', () => {
    expect(wrapper.vm.deleteAddress).toBe('402 Queen Street W Toronto, ON')
  })
  it('should dispatch an action when btn clicked', () => {
    wrapper.find('.btn-del').trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith(
      'customer/deleteCustomerAddress',
      1
    )
  })
})
