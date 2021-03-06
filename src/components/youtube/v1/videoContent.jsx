import React from 'react';
import { human_date } from '../../DateManipulate';

function mainCard(props) {
  const { currentVideo } = props;
  return (
    <div className='card border-0'>
      <div className='ratio ratio-16x9'>
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
          title={currentVideo.snippet.title}
        ></iframe>
      </div>
      <div className='card-body border'>
        <h5 className='card-title'>
          <a
            href={`https://www.youtube.com/watch?v=${currentVideo.id.videoId}`}
            target='_blank'
            rel='noreferrer'
            className='text-dark text-decoration-none'
          >
            {currentVideo.snippet.title}
          </a>
        </h5>
        <p className='card-subtitle mb-2 text-muted'>
          <a
            href={`https://www.youtube.com/channel/${currentVideo.snippet.channelId}`}
            target='_blank'
            rel='noreferrer'
            className='text-muted text-decoration-none'
          >
            {currentVideo.snippet.channelTitle}
          </a>
        </p>
        <p className='card-text'>{`By ${currentVideo.snippet.description}`}</p>
        <p className='card-text small text-muted'>{`Publish At ${human_date(
          currentVideo.snippet.publishTime
        )}`}</p>
      </div>
    </div>
  );
}

export default mainCard;
