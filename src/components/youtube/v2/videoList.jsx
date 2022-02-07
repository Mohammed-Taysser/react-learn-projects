import React from 'react';
import VideoItem from './videoItem';

function videoList(props) {
  return props.videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onClick={props.setCurrentVideo}
      />
    );
  });
}

export default videoList;
