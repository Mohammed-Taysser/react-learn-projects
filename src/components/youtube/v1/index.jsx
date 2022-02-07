import React, { useState, useEffect } from 'react';

import Spinner from '../../bootstrap-component/Spinner';
import Alert from '../../bootstrap-component/Alert';

import SearchBar from '../../SearchBar';
import { VideoSnippetSearch } from '../../../api/Youtube';

import MainCard from './videoContent';
import VideoList from './videoList';

function Youtube() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState({});
  const [noResponse, setNoResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos]);

  useEffect(() => {
    search('redux');
  }, []);

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

  const search = async (query) => {
    if (query) {
      try {
        await VideoSnippetSearch.get('/search', {
          params: { q: query },
        }).then((response) => {
          setVideos(response.data.items);
          setNoResponse(false);
        });
      } catch (error) {
        setNoResponse(true);
        setErrorMessage(error.response.data.error.message);
      } finally {
        // run anyway
      }
    } else {
      console.log(query); // no query entered
    }
  };

  return (
    <>
      <SearchBar onFormSubmit={search} auto_submit={false} result_number={videos.length}  />
      {view_message()}
    </>
  );
}

export default Youtube;
