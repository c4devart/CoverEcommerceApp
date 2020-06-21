import { mount } from '@vue/test-utils'
import AccountAddressesHeader from '@/components/account/AccountAddressesHeader'

describe('AccountAddressesHeader', () => {
  const wrapper = mount(AccountAddressesHeader)
  it('should trigger the modal on click', () => {
    wrapper.find('.add-address').trigger('click')
    expect(wrapper.vm.showModal).toBeTruthy()
  })
})
