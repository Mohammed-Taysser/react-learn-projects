import React from 'react';
import { Route } from '../../components/CustomRouter';

import YouTubeDashboard from '../../components/youtube';
import YouTubeV1 from '../../components/youtube/v1';
import YouTubeV2 from '../../components/youtube/v2';

function Youtube() {
  return (
    <>
      <Route path='/youtube'>
        <YouTubeDashboard />
      </Route>
      <Route path='/youtube/v1'>
        <YouTubeV1 />
      </Route>
      <Route path='/youtube/v2'>
        <YouTubeV2 />
      </Route>
    </>
  );
}

export default Youtube;
