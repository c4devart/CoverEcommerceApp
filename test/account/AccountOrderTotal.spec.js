import { shallowMount } from '@vue/test-utils'
import AccountOrderTotal from '@/components/account/AccountOrderTotal'

describe('AccountOrderTotal', () => {
  const wrapper = shallowMount(AccountOrderTotal, {
    propsData: {
      order: {
        subtotal: 1232.03,
        shipping: 120,
        taxes: 67.97,
        total: 1420
      }
    }
  })
  it('should format the amounts correctly', () => {
    expect(wrapper.vm.subtotal).toBe('$1,232.03')
    expect(wrapper.vm.shipping).toBe('$120.00')
    expect(wrapper.vm.taxes).toBe('$67.97')
    expect(wrapper.vm.total).toBe('$1,420.00')
  })
})
