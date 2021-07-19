import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

import AuthService from '../services/auth.service';

export const signupNewUser = (email, password, firstName, lastName) => (dispatch) => {
  return AuthService.signup(email, password, firstName, lastName).then(
    () => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });

      return Promise.resolve();
    },
    () => {
      dispatch({
        type: SIGNUP_FAIL,
      });

      return Promise.reject();
    },
  );
};

export const signinUser = (email, password) => (dispatch) => {
  return AuthService.login({ email: email, password: password }).then(
    () => {
      dispatch({
        type: LOGIN_SUCCESS,
      });

      return Promise.resolve();
    },
    () => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    },
  );
};

export const signoutUser = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
