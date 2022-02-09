export const state = () => ({
  title: null
})

export const getters = {
}

export const mutations = {
  setTitle: (state, value) => state.title = value,
}

export const actions = {
  setTitle({commit}, value) {
    commit("setTitle", value);
  }
}