import React from 'react';
import { Route } from '../../components/CustomRouter';

import GeoLocationDashboard from '../../components/geolocation';
import GeoLocationV1 from '../../components/geolocation/v1';

function geolocation() {
  return (
    <>
        <Route path='/geolocation'>
          <GeoLocationDashboard />
        </Route>
        <Route path='/geolocation/v1'>
          <GeoLocationV1 />
        </Route>
    </>
  );
}

export default geolocation;
