/**
 * reducer to select song
 * @param {String} song details of strong
 * @returns {Object} return selected song
 */
function selectSong(song) {
  return {
    type: 'SELECT_SONG',
    payload: song,
  };
}

function deleteSong(title = '') {
  return {
    type: 'DELETE_SONG',
    payload: {
      title: title,
    },
  };
}

export { selectSong, deleteSong };
