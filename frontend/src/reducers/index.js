import { combineReducers } from 'redux';
import auth from './auth';
import userProfile from './userProfile';

export default combineReducers({
  auth,
  userProfile,
});
