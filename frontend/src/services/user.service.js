import http from '../http-common';
import authHeader from './auth-header';

class UserDataService {
  fetchProfile() {
    return http.post('/user/profile', {}, { headers: authHeader() });
  }

  updateProfile(data) {
    return http.put('/user/profile', data, { headers: authHeader() });
  }
}

export default new UserDataService();
