import { shallowMount } from '@vue/test-utils'
import AccountOrderItemOption from '@/components/account/AccountOrderItemOption'

describe('AccountOrderItemOption', () => {
  const wrapper = shallowMount(AccountOrderItemOption, {
    propsData: {
      spec: {
        cost: 2144.23,
        option: {
          title: 'Type'
        },
        optionField: {
          label: 'Name'
        }
      }
    }
  })
  it('should return the correct name value', () => {
    expect(wrapper.vm.optionNameValue).toBe('Type: Name')
  })
  it('should correctly format the cost', () => {
    expect(wrapper.vm.cost).toBe('$2,144.23')
  })
})
