import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import AccountNavLinks from '@/components/account/AccountNavLinks'

describe('AccountNavLinks', () => {
  const wrapper = shallowMount(AccountNavLinks, {
    mocks: {
      $route: {
        name: 'login'
      }
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
  it('should return true if current route is one of auth', () => {
    expect(wrapper.vm.isAuthPages).toBeTruthy()
  })
})
