import React, { useState, useEffect } from "react";
import { useVideos } from "../../../hooks/youtube/v2/useYoutube";

import SearchBar from "../../SearchBar";

import Alert from '../../bootstrap-component/Alert';
import Spinner from "../../bootstrap-component/Spinner";

import MainCard from './videoContent';
import VideoList from './videoList';

const Youtube = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, search] = useVideos("react");
  const [noResponse, setNoResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos]);

  const view_message = () => {
    if (isNaN(currentVideo) && currentVideo !== undefined) {
      return (
        <div className='row justify-content-center'>
          <div className='col-lg-7 my-3'>
            {<MainCard currentVideo={currentVideo} />}
          </div>
          <div className='col-lg-5 my-3'>
            {<VideoList videos={videos} setCurrentVideo={setCurrentVideo} />}
          </div>
        </div>
      );
    } else if (noResponse) {
      return (
        <div className='mt-3'>
          <Alert color='warning'> {errorMessage} </Alert>
        </div>
      );
    } else {
      return <Spinner className='mt-4' />;
    }
  };

  return (
    <div className={``}>
      <SearchBar onFormSubmit={search} auto_submit={false} result_number={videos.length} />
      {view_message()}
    </div>
  );
};

export default Youtube;
