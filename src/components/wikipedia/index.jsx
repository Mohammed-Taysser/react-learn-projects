import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [{ title: 'v1', href: '/wikipedia/v1' }];

function WikipediaDashboard() {
  return <Dashboard versions={VERSION} label='wikipedia dashboard' />;
}
export default WikipediaDashboard;
