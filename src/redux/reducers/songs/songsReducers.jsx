import { combineReducers } from 'redux';
import { SONGS } from '../../../static/Data';

function songReducer() {
  return SONGS;
}

function selectedSongReducer(selected_song = null, action = {}) {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selected_song;
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
