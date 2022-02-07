import React from 'react';

function songsList(props) {
  return props.songs.map((song) => {
    return (
      <button
        type='button'
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-start curser-pointer'
        key={song.title}
        onClick={() => props.selectSong(song)}
      >
        <span>{song.title}</span>
        <span className='badge bg-primary rounded-pill'>{song.duration}</span>
      </button>
    );
  });
}
export default songsList;
