import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../../redux/actions/songs/selectSong';
import SongList from './songsList';
import SongDetails from './songDetails';

class Songs extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <button
          type='button'
          className='list-group-item list-group-item-action d-flex justify-content-between align-items-start curser-pointer'
          key={song.title}
          onClick={() => this.props.selectSong(song)}
        >
          <span>{song.title}</span>
          <span className='badge bg-primary rounded-pill'>{song.duration}</span>
        </button>
      );
    });
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-6 my-'>
          <div className='list-group'>
            {
              <SongList
                songs={this.props.songs}
                selectSong={this.props.selectSong}
              />
            }
          </div>
        </div>
        <div className='col-md-6 my-3'>
          {this.props.selectedSong ? <SongDetails /> : 'No Song Selected Yet.'}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
}

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(Songs);
