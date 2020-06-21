export const state = () => ({
  help: {
    title: null,
    image: null,
    content: null
  }
})

export const getters = {
  getHelp: (state) => state.help,
  hasHelp: (state) => state.help.title && state.help.content
}

export const mutations = {
  setHelp(state, { title, image, content }) {
    state.help = {
      title,
      image,
      content
    }
  },
  unsetHelp(state) {
    state.help = {
      title: null,
      image: null,
      content: null
    }
  }
}

export const actions = {
  triggerHelper({ commit }, { title, image, content }) {
    commit('unsetHelp')
    commit('setHelp', { title, image, content })
  }
}
