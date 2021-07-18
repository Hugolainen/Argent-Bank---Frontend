import { GET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = [];

function userProfileReducer(userProfile = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return payload;

    case UPDATE_PROFILE:
      if (userProfile === payload) {
        return {
          ...userProfile,
          ...payload,
        };
      } else {
        return userProfile;
      }

    default:
      return userProfile;
  }
}

export default userProfileReducer;
