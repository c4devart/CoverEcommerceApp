import { shallowMount } from '@vue/test-utils'
import AccountOrderItem from '@/components/account/AccountOrderItem'

describe('AccountOrderItem', () => {
  const wrapper = shallowMount(AccountOrderItem, {
    propsData: {
      item: {
        product: {
          title: 'My item'
        },
        tracking_number: '903ewRW3eJK',
        total: 349.17
      }
    }
  })
  it('should return a color if no background image is available', () => {
    expect(wrapper.vm.backgroundUrl).toBe('background-color: #f7fafc')
  })
  it('should correctly format the cost', () => {
    expect(wrapper.vm.itemTotal).toBe('$349.17')
  })
})
