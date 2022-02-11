import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import Homepage from '../pages/homepage';
import PageNotFound from '../pages/404';

import Login from '../components/auth/login';

import YouTubeDashboard from '../components/youtube';
import YouTubeV1 from '../components/youtube/v1';
import YouTubeV2 from '../components/youtube/v2';

import WikipediaDashboard from '../components/wikipedia';
import WikipediaV1 from '../components/wikipedia/v1';

import GeoLocationDashboard from '../components/geolocation';
import GeoLocationV1 from '../components/geolocation/v1';

import UnsplashDashboard from '../components/unsplash';
import UnsplashV1 from '../components/unsplash/v1';

import TodoDashboard from '../components/todo';
import TodoV1 from '../components/todo/v1';

import GoogleTranslateDashboard from '../components/googleTranslate';
import GoogleTranslateV1 from '../components/googleTranslate/v1';

import BlogsDashboard from '../components/blogs';
import BlogsV1 from '../components/blogs/v1';
import BlogsDetailsV1 from '../components/blogs/v1/postDetails';
import BlogsCreateV1 from '../components/blogs/v1/createPost';
import BlogsUpdateV1 from '../components/blogs/v1/updatePost';

import Songs from '../components/songs/v1';
import songsReducers from '../redux-reducers/songsReducers';

import Posts from '../components/posts';
import postsReducers from '../redux-reducers/postsReducers';

import { TASKS, SONGS, LANGUAGES } from '../static/Data';

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/login' element={<Login />} />

        <Route path='youtube' element={<YouTubeDashboard />} />
        <Route path='youtube/v1' element={<YouTubeV1 />} />
        <Route path='youtube/v2' element={<YouTubeV2 />} />

        <Route path='wikipedia' element={<WikipediaDashboard />} />
        <Route path='wikipedia/v1' element={<WikipediaV1 />} />

        <Route path='geolocation' element={<GeoLocationDashboard />} />
        <Route path='geolocation/v1' element={<GeoLocationV1 />} />

        <Route path='unsplash' element={<UnsplashDashboard />} />
        <Route path='unsplash/v1' element={<UnsplashV1 />} />

        <Route path='blogs' element={<BlogsDashboard />} />
        <Route path='blogs/v1' element={<BlogsV1 />} />
        <Route path='blogs/v1/:postId' element={<BlogsDetailsV1 />} />
        <Route path='blogs/v1/create' element={<BlogsCreateV1 />} />
        <Route path='blogs/v1/update/:postId' element={<BlogsUpdateV1 />} />

        <Route path='todo' element={<TodoDashboard />} />
        <Route path='todo/v1' element={<TodoV1 tasks={TASKS} />} />

        <Route path='google-translate' element={<GoogleTranslateDashboard />} />
        <Route
          path='google-translate/v1'
          element={<GoogleTranslateV1 languages={LANGUAGES} />}
        />

        <Route
          path='/songs'
          element={
            <Provider store={createStore(songsReducers)}>
              <Songs songs={SONGS} />
            </Provider>
          }
        />
        <Route
          path='/posts'
          element={
            <Provider
              store={createStore(postsReducers, applyMiddleware(thunk))}
            >
              <Posts />
            </Provider>
          }
        />
      </Routes>
    </>
  );
}
