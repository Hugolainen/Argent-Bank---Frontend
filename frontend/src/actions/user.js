import { GET_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from './types';

import UserDataService from '../services/user.service';

export const retrieveProfile = () => async (dispatch) => {
  try {
    const res = await UserDataService.fetchProfile();
    dispatch({
      type: GET_PROFILE,
      payload: res.body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = (firstName, lastName) => async (dispatch) => {
  return UserDataService.updateProfile({ firstName: firstName, lastName: lastName }).then(
    (res) => {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.body,
      });

      return Promise.resolve();
    },
    () => {
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
      });

      return Promise.reject();
    },
  );
};
