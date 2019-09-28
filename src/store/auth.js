import get from 'lodash.get';
import request from '../services/request';

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
  async load({ commit, state }) {
    if (state.token) {
      commit('loading');
      const res = await request.get('/profile/', state.token);
      commit('setUser', res.data);
      commit('loading', false);
    }
  },
  async login({ commit }, data) {
    commit('loading');
    commit('error');
    try {
      const res = await request.post('/login/', data);
      commit('setToken', res.data.token);
      location.reload();
      return;
    }
    catch (e) {
      // eslint-disable-next-line
      console.error(e);
      commit('error', get(e, 'response.data.detail', 'Unknown error'));
    }
    commit('loading', false);
  },
  logout({ commit }) {
    commit('loading');
    localStorage.removeItem('token');
    location.href = '/';
  }
};

export default {namespaced:true, state, mutations, actions};
