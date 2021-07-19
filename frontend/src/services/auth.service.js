import http from '../http-common';

class AuthService {
  login(data) {
    return http.post('/user/login', data).then((response) => {
      if (response.data.body.token) {
        localStorage.setItem('token', JSON.stringify(response.data.body.token));
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
  }

  signup(data) {
    return http.post('/user/signup', data);
  }
}

export default new AuthService();
