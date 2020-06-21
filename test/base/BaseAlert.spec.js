import { shallowMount } from '@vue/test-utils'
import BaseAlert from '@/components/base/BaseAlert'

describe('BaseAlert', () => {
  const wrapper = shallowMount(BaseAlert, {
    propsData: {
      type: 'success'
    }
  })
  it('should have the right class depending on the type', () => {
    expect(wrapper.find('.base-alert.alert-success')).toBeTruthy()
  })
})
