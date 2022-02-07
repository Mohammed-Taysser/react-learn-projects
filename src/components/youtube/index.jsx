import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [
  { title: 'v1', href: '/youtube/v1' },
  { title: 'v2', href: '/youtube/v2' },
];

function YoutubeDashboard() {
  return <Dashboard versions={VERSION} label='youtube dashboard' />;
}
export default YoutubeDashboard;
