import React from 'react';
import Dashboard from '../dashboard';

const VERSION = [{ title: 'v1', href: '/blogs/v1' }];

function BlogsDashboard() {
  return <Dashboard versions={VERSION} label='blog dashboard' />;
}
export default BlogsDashboard;
