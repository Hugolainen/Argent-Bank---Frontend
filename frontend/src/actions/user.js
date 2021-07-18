import { GET_PROFILE, UPDATE_PROFILE } from './types';

import UserDataService from '../services/user.service';

export const retrieveProfile = () => async (dispatch) => {
  try {
    const res = await UserDataService.fetchProfile();
    console.log(res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = (firstName, lastName) => async (dispatch) => {
  try {
    const res = await UserDataService.updateProfile({ firstName, lastName });

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
