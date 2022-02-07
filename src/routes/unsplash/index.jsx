import React from 'react';
import { Route } from '../../components/CustomRouter';

import UnsplashDashboard from '../../components/unsplash';
import UnsplashV1 from '../../components/unsplash/v1';

function Unsplash() {
  return (
    <>
      <Route path='/unsplash'>
        <UnsplashDashboard />
      </Route>
      <Route path='/unsplash/v1'>
        <UnsplashV1 />
      </Route>
    </>
  );
}
export default Unsplash;
