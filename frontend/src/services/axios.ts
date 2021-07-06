import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

instance.interceptors.request.use((config) => {
  const bearerToken = localStorage.getItem('bearer_token');
  if (bearerToken) {
    config.headers.Authorization = `Bearer ${bearerToken}`;
  }
  return config;
});

export default instance;
