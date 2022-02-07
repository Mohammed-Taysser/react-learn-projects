import React from 'react';

import Utilities from './utilities';
import UnsplashRoute from './unsplash';
import YoutubeRoute from './youtube';
import Wikipedia from './wikipedia';
import GeoLocation from './geolocation';
import GoogleTranslate from './googleTranslate';
import Todo from './todo';
import Songs from './songs';
import Posts from './posts';
import Blogs from './blogs';

export default function index() {
  return (
    <>
      <Utilities />
      <UnsplashRoute />
      <YoutubeRoute />
      <Wikipedia />
      <GeoLocation />
      <GoogleTranslate />
      <Todo />
      <Songs />
      <Posts />
      <Blogs />
    </>
  );
}
