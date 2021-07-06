import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
import { User } from '../models/user';
import authAPI from '../services/authApi';

export interface AuthenticationState {
  loggedIn: boolean;
  loggedInUser: User | null;
}
interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  loggedIn: boolean;
  loggedInUser: User;
}

interface LoginFailAction {
  type: 'LOGIN_FAIL';
  loggedIn: boolean;
  loggedInUser: User | null;
}

type AuthenticationAction = LoginSuccessAction | LoginFailAction;

const AUTH_KEY = 'bearer_token';

export const actionCreators = {
  login:
    (email: string, password: string): AppThunkAction<AuthenticationAction> =>
    (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.authentication) {
        authAPI
          .logIn(email, password)
          .then((res) => {
            const {
              status,
              data: { token },
            } = res;

            if (status === 201) {
              // Decode user object from the response token
              const { user } = JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1]))));

              // set token to local storage
              localStorage.setItem(AUTH_KEY, token);

              dispatch({ type: 'LOGIN_SUCCESS', loggedIn: true, loggedInUser: user });
            }
          })
          .catch((err) => {
            console.error(err);
            dispatch({ type: 'LOGIN_FAIL', loggedIn: false, loggedInUser: null });
          });
      }
    },
};

const unloadedState: AuthenticationState = { loggedIn: !!localStorage.getItem(AUTH_KEY), loggedInUser: null };

export const reducer: Reducer<AuthenticationState> = (
  state: AuthenticationState | undefined,
  incomingAction: Action,
): AuthenticationState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as AuthenticationAction;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: action.loggedIn,
        loggedInUser: action.loggedInUser,
      };
    case 'LOGIN_FAIL':
      return {
        loggedIn: action.loggedIn,
        loggedInUser: action.loggedInUser,
      };
    default:
      return state;
  }
};
