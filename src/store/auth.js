// import fetch from '../services/fetch';

export const state = () => ({
  isLoading: false,
  token: localStorage.getItem('token') || null,
  user: null,
  error: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  setUser(state, user) {
    state.user = user;
  },
  loading(state, data = true) {
    state.isLoading = data;
  },
  error(state, data = null) {
    state.error = data;
  }
};

export const actions = {
  saveToken({commit}, value) {
    commit('setToken', value);
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setToken', null);
  }
};

export default {namespaced:true, state, mutations, actions};
