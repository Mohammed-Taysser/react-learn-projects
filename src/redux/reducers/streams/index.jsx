import { combineReducers } from 'redux';
import GoogleAuthReducer from './GoogleAuthReducer';
import StreamReducer from './StreamReducer';

export default combineReducers({
  auth: GoogleAuthReducer,
  streams: StreamReducer,
});
