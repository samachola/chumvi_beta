import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api-v0';
export default {
    user: {
      login: data => axios.post(`${API_URL}/auth/login`, data).then(response => response.data)
    }
}