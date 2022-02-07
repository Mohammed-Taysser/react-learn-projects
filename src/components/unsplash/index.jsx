import React from 'react';
import Dashboard from '../dashboard';
const VERSION = [{ title: 'v1', href: '/unsplash/v1' }];

function UnsplashDashboard() {
  return <Dashboard versions={VERSION} label='unsplash dashboard' />;
}
export default UnsplashDashboard;
