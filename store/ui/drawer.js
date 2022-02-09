export const state = () => ({
  state: false,
})

export const getters = {
  isOpen: state => state.state,
}

export const mutations = {
  open(state) {
    state.state = true;
  },
  
  close(state) {
    state.state = false;
  },
}

export const actions = {
  toggle({state, commit}) {
    if (state.state) commit('close');
    else commit('open');
  },

  open({commit}) {
    commit('open');
  },

  close({commit}) {
    commit('close');
  },

  set({commit}, value) {
    if (value) commit('open');
    else commit('close');
  }
}