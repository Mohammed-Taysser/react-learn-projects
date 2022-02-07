import React from 'react';
import { Route } from '../../components/CustomRouter';

import WikipediaDashboard from '../../components/wikipedia';
import WikipediaV1 from '../../components/wikipedia/v1';

function Wikipedia() {
  return (
    <>
      <Route path='/wikipedia'>
        <WikipediaDashboard />
      </Route>
      <Route path='/wikipedia/v1'>
        <WikipediaV1 />
      </Route>
    </>
  );
}

export default Wikipedia;
