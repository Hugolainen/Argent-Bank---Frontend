import http from '../http-common';

class AuthService {
  login(data) {
    return http.post('/user/login', data).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  signup(data) {
    return http.post('/user/signup', data);
  }
}

export default new AuthService();
