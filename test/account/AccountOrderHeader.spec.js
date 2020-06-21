import { shallowMount } from '@vue/test-utils'
import AccountOrderHeader from '@/components/account/AccountOrderHeader'

describe('AccountOrderHeader', () => {
  const wrapper = shallowMount(AccountOrderHeader, {
    propsData: {
      order: {
        order_number: '23425354',
        display_status: 'Finalized',
        created_at: '2019-12-16'
      }
    }
  })
  it('should format the order date correctly', () => {
    expect(wrapper.vm.orderDate).toBe('Dec 16, 2019')
  })
})
