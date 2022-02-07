import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Route } from '../../components/CustomRouter';
import Songs from '../../components/songs/v1';
import songsReducers from '../../redux-reducers/songsReducers';
import { SONGS } from '../../static/Data';

function SongsRoutes() {
  return (
    <>
      <Route path='/songs'>
        <Provider store={createStore(songsReducers)}>
          <Songs songs={SONGS} />
        </Provider>
      </Route>
    </>
  );
}

export default SongsRoutes;
