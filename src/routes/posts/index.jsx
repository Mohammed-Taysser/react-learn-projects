import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { Route } from '../../components/CustomRouter';
import Posts from '../../components/posts';
import postsReducers from '../../redux-reducers/postsReducers';

function PostsRoute() {
  return (
    <>
      <Route path='/posts'>
        <Provider store={createStore(postsReducers, applyMiddleware(thunk))}>
          <Posts />
        </Provider>
      </Route>
    </>
  );
}

export default PostsRoute;
