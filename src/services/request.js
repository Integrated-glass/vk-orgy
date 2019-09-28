import axios from 'axios';
import store from '../store';
import {API_HOST} from '../constants';

const request = axios.create({
    baseURL: `${API_HOST}/api`,
});

request.interceptors.request.use((config) => {
    if (store.state.auth.token !== null) {
        config.headers.Authorization = `Token ${store.state.auth.token}`;
    }
    return config;
});

export default request;
