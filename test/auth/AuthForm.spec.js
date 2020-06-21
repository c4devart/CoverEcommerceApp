import { shallowMount } from '@vue/test-utils'
import AuthForm from '@/components/auth/AuthForm'

describe('AuthForm', () => {
  const wrapper = shallowMount(AuthForm, {
    propsData: {
      type: 'login'
    },
    stubs: {
      ValidationObserver: {
        render: () => {},
        methods: {
          validate: () => true
        }
      }
    },
    data: () => ({
      form: {
        email: 'john@yabhq.com',
        password: 'p@ssw0rd!',
        password_confirmation: null
      }
    })
  })
  it('should return the right margin class if login form', () => {
    expect(wrapper.vm.btnMargin).toBe('mt-8')
  })
  it('should return the right form type', () => {
    expect(wrapper.vm.isLogin).toBeTruthy()
    expect(wrapper.vm.isSignup).toBeFalsy()
    expect(wrapper.vm.isForgot).toBeFalsy()
    expect(wrapper.vm.isReset).toBeFalsy()
  })
  it('should return the right label depending on the type', () => {
    expect(wrapper.vm.btnLabel).toBe('Sign In')
  })
  it('should dispatch an action when btn clicked and emit an event', async () => {
    wrapper.find('.btn-auth').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().post[0]).toEqual([
      {
        email: 'john@yabhq.com',
        password: 'p@ssw0rd!',
        password_confirmation: null
      }
    ])
  })
})
