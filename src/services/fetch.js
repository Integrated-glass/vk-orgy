import {API_HOST} from '@/constants';
import store from '../store/index';

const auth = store.state.auth.token ? {'Authorization': 'Bearer ' + store.state.auth.token} : null;
export default (url, method, payload, isLogin = false) => {
  return fetch(API_HOST + '/api' + url, {
    method: method,
    headers: {
      'Content-Type': isLogin ? 'application/x-www-form-urlencoded' : 'application/json',
      ...auth
    },
    body: isLogin ? payload : JSON.stringify(payload)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    });
};
