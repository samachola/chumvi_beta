import axios from 'axios';

const API_URL = 'https://chumviapi.herokuapp.com/api-v0';
export default {
    user: {
      login: data => axios.post(`${API_URL}/auth/login`, data).then(response => response.data),
      register: data => axios.post(`${API_URL}/auth/register`, data).then(response => response.data),
      forgot: data => axios.post(`${API_URL}/auth/forgot_password`, data).then(response => response.data),
      reset: (data, token) => axios.post(`${API_URL}/auth/reset_password/${token}`, data).then(response => response.data),
    },
    categories: {
      all: () => axios.get(`${API_URL}/category`).then(response => response.data),
      add: data => axios.post(`${API_URL}/category`, data).then(response => response.data),
      update: (data, id) => axios.put(`${API_URL}/category/${id}`, data).then(response => response.data),
      delete: id => axios.delete(`${API_URL}/category/${id}`).then(response => response.data)
    },
    recipes: {
      all: (page, q) => {
        if(typeof q === 'undefined' || q === ''){
          return axios.get(`${API_URL}/recipe?page=${page}`).then(response => response.data)
        }
        return axios.get(`${API_URL}/recipe?q=${q}&page=${page}`).then(response => response.data)
      },
      add: data => axios.post(`${API_URL}/recipe`, data).then(response => response.data),
      update: (data, id) => axios.put(`${API_URL}/recipe/${id}`, data).then(response => response.data),
      delete: id => axios.delete(`${API_URL}/recipe/${id}`).then(response => response.data)
    }
}