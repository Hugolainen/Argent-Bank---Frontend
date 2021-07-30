import { GET_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from '../actions/types';

const userProfile = JSON.parse(localStorage.getItem('userProfile'));

const initialState = userProfile ? userProfile : { userProfile: null };

function userProfileReducer(userProfile = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return payload;

    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...userProfile,
        ...payload,
      };
    }
    case UPDATE_PROFILE_FAILURE:
      return userProfile;

    default:
      return userProfile;
  }
}

export default userProfileReducer;
