import React from 'react';
import { Route } from '../../components/CustomRouter';

import BlogsDashboard from '../../components/blogs';
import BlogsV1 from '../../components/blogs/v1';

function Blogs() {
  return (
    <>
      <Route path='/blogs'>
        <BlogsDashboard />
      </Route>
      <Route path='/blogs/v1'>
        <BlogsV1 />
      </Route>
    </>
  );
}

export default Blogs;
