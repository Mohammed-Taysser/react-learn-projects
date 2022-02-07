import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [{ title: 'v1', href: '/geolocation/v1' }];

function GeolocationDashboard() {
  return <Dashboard versions={VERSION} label='geolocation dashboard' />;
}
export default GeolocationDashboard;
