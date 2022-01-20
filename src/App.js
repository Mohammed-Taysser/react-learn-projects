import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Route } from "./components/CustomRouter";
import Navbar from "./components/Navbar";
import UnsplashSearchEngin from "./components/UnsplashSearchEngin";
import YouTubeSearchEngin from "./components/YouTubeSearchEngin";
import GeoLocation from "./components/GeoLocation";
import WikipediaSearchEngin from "./components/WikipediaSearchEngin";
import GoogleTranslate from "./components/GoogleTranslate";
import Todo from "./components/Todo";
import songsReducers from './redux-reducers/songsReducers';
import postsReducers from './redux-reducers/postsReducers';
import Songs from "./components/songs";
import Posts from "./components/Posts";
import { LANGUAGES, TASKS, SONGS } from "./static/Data";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <Route path="/">homepage</Route>
        <Route path="/unsplash">
          <UnsplashSearchEngin />
        </Route>
        <Route path="/youtube">
          <YouTubeSearchEngin />
        </Route>
        <Route path="/goelocation">
          <GeoLocation />
        </Route>
        <Route path="/wikipedia">
          <WikipediaSearchEngin />
        </Route>
        <Route path="/translate">
          <GoogleTranslate languages={LANGUAGES} />
        </Route>
        <Route path="/todo">
          <Todo tasks={TASKS} />
        </Route>
        <Route path="/songs">
          <Provider store={createStore(songsReducers)}>
            <Songs songs={SONGS} />
          </Provider>
        </Route>
        <Route path="/posts">
          <Provider store={createStore(postsReducers)}>
            <Posts />
          </Provider>
        </Route>
      </div>
    </>
  );
};

export default App;
