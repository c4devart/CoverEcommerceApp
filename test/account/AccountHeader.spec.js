import { shallowMount } from '@vue/test-utils'
import AccountHeader from '@/components/account/AccountHeader'

const logout = jest.fn()

describe('AccountHeader', () => {
  const wrapper = shallowMount(AccountHeader, {
    methods: {
      logout
    },
    mocks: {
      $auth: {
        loggedIn: true
      }
    }
  })
  it('should call a logout method on btn click', () => {
    wrapper.find('.logout-link').trigger('click')
    expect(logout).toHaveBeenCalled()
  })
})
