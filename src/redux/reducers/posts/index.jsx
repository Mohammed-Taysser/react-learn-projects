import { combineReducers } from 'redux';
import postsReducers from './postReducers';
import userReducer from './userReducer';

export default combineReducers({
  posts: postsReducers,
  users: userReducer,
});
