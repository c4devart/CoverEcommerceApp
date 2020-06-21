import { shallowMount } from '@vue/test-utils'
import AccountOrderDetailsCard from '@/components/account/AccountOrderDetailsCard'

describe('AccountOrderDetailsCard', () => {
  const wrapper = shallowMount(AccountOrderDetailsCard, {
    propsData: {
      brand: 'Mastercard'
    }
  })
  it('should return the proper card logo', () => {
    expect(wrapper.vm.isMastercard).toBeTruthy()
    expect(wrapper.vm.isVisa).toBeFalsy()
    expect(wrapper.vm.isAmex).toBeFalsy()
  })
})
