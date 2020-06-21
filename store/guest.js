export const state = () => ({
  guest: null
})

export const mutations = {
  setGuest(state, guest) {
    state.guest = guest
  }
}
