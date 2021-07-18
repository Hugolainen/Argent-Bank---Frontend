import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import userProfile from './userProfile';

export default combineReducers({
  auth,
  message,
  userProfile,
});
