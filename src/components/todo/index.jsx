import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [{ title: 'v1', href: '/todo/v1' }];

function GoogleTranslateDashboard() {
  return <Dashboard versions={VERSION} label='todo dashboard' />;
}
export default GoogleTranslateDashboard;
