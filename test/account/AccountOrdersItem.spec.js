import { shallowMount } from '@vue/test-utils'
import AccountOrdersItem from '@/components/account/AccountOrdersItem'

describe('AccountOrdersItem', () => {
  const wrapper = shallowMount(AccountOrdersItem, {
    propsData: {
      order: {
        created_at: '2019-12-13',
        tracking_number: '',
        display_status: 'Finalized'
      }
    }
  })
  it('should format the order date correctly', () => {
    expect(wrapper.vm.orderDate).toBe('Dec 13, 2019')
  })
  it('should return placeholder data if no tracking number available', () => {
    expect(wrapper.vm.trackingNumber).toBe('Not Available Yet')
  })
})
