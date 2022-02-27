import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useStreams } from '../../redux/selectors/streams';
import { FetchStream } from '../../redux/actions/streams';
import flv from 'flv.js';

function ShowStream() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const current_stream = useStreams();
  const videoRef = useRef(null);

  useEffect(() => {
    dispatch(FetchStream(parseInt(id, 10)));
    let flvPlayer = null;
    if (flv.isSupported() && videoRef !== null) {
      flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`,
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
      flvPlayer.play();
    }
    return () => {
      if (flvPlayer !== null) {
        flvPlayer.destroy();
      }
    };
  }, []);

  return (
    <section>
      <div className='ratio ratio-16x9'>
        <video src='' ref={videoRef} controls />
      </div>
      {current_stream.title}
    </section>
  );
}

export default ShowStream;
