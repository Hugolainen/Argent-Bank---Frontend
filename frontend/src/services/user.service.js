import http from '../http-common';
import authHeader from './auth-header';

class UserDataService {
  fetchProfile() {
    const headers = {
      Authorization: authHeader(),
    };
    return http.post('/user/profile', { headers: headers });
  }

  updateProfile(data) {
    return http.put('/user/profile', data, { headers: authHeader() });
  }
}

export default new UserDataService();
