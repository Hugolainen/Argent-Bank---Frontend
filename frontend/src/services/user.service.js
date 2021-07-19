import http from '../http-common';
import authHeader from './auth-header';

class UserDataService {
  fetchProfile() {
    return http.post('/user/profile', {}, { headers: authHeader() }).then((response) => {
      if (response.data.body) {
        localStorage.setItem('userProfile', JSON.stringify(response.data.body));
      }
      return response.data;
    });
  }

  updateProfile(data) {
    return http.put('/user/profile', data, { headers: authHeader() }).then((response) => {
      if (response.data.body.firstName || response.data.body.lastName) {
        localStorage.setItem('userProfile', JSON.stringify(response.data.body));
      }
    });
  }
}

export default new UserDataService();
