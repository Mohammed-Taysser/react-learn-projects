import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [{ title: 'v1', href: '/google-translate/v1' }];

function GoogleTranslateDashboard() {
  return <Dashboard versions={VERSION} label='google translate dashboard' />;
}
export default GoogleTranslateDashboard;
