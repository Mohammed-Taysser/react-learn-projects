import React from 'react';
import { connect } from 'react-redux';

function songDetails({ song }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title d-flex justify-content-between align-items-start'>
          <span>{song.title}</span>
          <span className='badge bg-primary rounded-pill'>{song.duration}</span>
        </h5>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    song: state.selectedSong,
  };
}

export default connect(mapStateToProps)(songDetails);
