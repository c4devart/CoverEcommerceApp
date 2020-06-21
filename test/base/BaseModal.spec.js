import { shallowMount } from '@vue/test-utils'
import BaseModal from '@/components/base/BaseModal'

describe('BaseModal', () => {
  const addNoScroll = jest.fn()
  const removeNoScroll = jest.fn()
  const wrapper = shallowMount(BaseModal, {
    propsData: {
      active: false,
      title: 'My Modal'
    },
    methods: {
      addNoScroll
    }
  })
  it('should return false if type is not delete', () => {
    expect(wrapper.vm.isDelete).toBeFalsy()
  })
  it('should close the modal when overlay is clicked', () => {
    wrapper.find('.modal__overlay').trigger('click')
    expect(wrapper.emitted().cancel[0]).toEqual([])
  })
  it('should close the modal when close btn is clicked', () => {
    wrapper.find('.modal__close').trigger('click')
    expect(wrapper.emitted().cancel[0]).toEqual([])
  })
  it('should add a noScroll class to doc body if active change', async () => {
    wrapper.setProps({ active: true })
    await wrapper.vm.$nextTick()
    expect(addNoScroll).toHaveBeenCalled()
    expect(removeNoScroll).not.toHaveBeenCalled()
  })
})
