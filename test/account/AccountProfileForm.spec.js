import Vuex from 'vuex'

import { mount, createLocalVue } from '@vue/test-utils'
import AccountProfileForm from '@/components/account/AccountProfileForm'

const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
  'customer/getCustomerId': () => 1
}

const store = new Vuex.Store({
  getters
})

const $axios = {
  put: jest.fn()
}

store.dispatch = jest.fn()

describe('AccountProfileForm', () => {
  const wrapper = mount(AccountProfileForm, {
    localVue,
    store,
    propsData: {
      initialData: {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michael@johnson.com',
        phone: '647 123 4567'
      }
    },
    mocks: {
      $axios
    },
    stubs: {
      ValidationObserver: {
        render: () => {},
        methods: {
          validate: () => true
        }
      }
    },
    sync: false
  })
  it('should set initial data on created', () => {
    expect(wrapper.vm.form).toEqual({
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michael@johnson.com',
      phone: '647 123 4567'
    })
  })
  it('should update personal info on btn click', async () => {
    await wrapper.vm.updateProfile()
    wrapper.vm.$nextTick()
    expect(store.dispatch).toHaveBeenCalledWith('customer/updateCustomer', {
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michael@johnson.com',
      phone: '647 123 4567'
    })
  })
  it("should return an error if passwords don't match", async () => {
    wrapper.setData({
      auth: {
        old_password: '1234',
        password: '12345',
        password_confirmation: '123456'
      }
    })
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.authAlert).toEqual({
      message: "The confirm new password doesn't match the new password",
      type: 'error'
    })
  })
  it("should return an error if password isn't strong enough", async () => {
    wrapper.setData({
      auth: {
        old_password: '1234',
        password: '12345',
        password_confirmation: '12345'
      }
    })
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.authAlert).toEqual({
      message:
        'Your password needs to have at least 8 characters with 1 number and 1 upper case letter',
      type: 'error'
    })
  })
  it("should update password if everything's ok", async () => {
    wrapper.setData({
      auth: {
        old_password: '1234',
        password: 'P@ssw000rd!!!',
        password_confirmation: 'P@ssw000rd!!!'
      }
    })
    await wrapper.vm.updateProfile()
    expect($axios.put).toHaveBeenCalledWith('api/c/password/update', {
      old_password: '1234',
      password: 'P@ssw000rd!!!',
      password_confirmation: 'P@ssw000rd!!!'
    })
  })
})
