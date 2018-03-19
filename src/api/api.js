import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api-v0';
export default {
    user: {
      login: data => axios.post(`${API_URL}/auth/login`, data).then(response => response.data),
      register: data => axios.post(`${API_URL}/auth/register`, data).then(response => response.data)
    },
    categories: {
      all: () => axios.get(`${API_URL}/category`).then(response => response.data),
      add: data => axios.post(`${API_URL}/category`, data).then(response => response.data),
      update: (data, id) => axios.put(`${API_URL}/category/${id}`, data).then(response => response.data),
      delete: id => axios.delete(`${API_URL}/category/${id}`).then(response => response.data)
    },
    recipes: {
      all: () => axios.get(`${API_URL}/recipe`).then(response => response.data),
      add: data => axios.post(`${API_URL}/recipe`, data).then(response => response.data)
    }
}