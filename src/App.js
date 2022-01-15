import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "./components/CustomRouter";
import UnsplashSearchEngin from "./components/UnsplashSearchEngin";
import YouTubeSearchEngin from "./components/YouTubeSearchEngin";
import GeoLocation from "./components/GeoLocation";
import WikipediaSearchEngin from "./components/WikipediaSearchEngin";
import GoogleTranslate from "./components/GoogleTranslate";
import Todo from "./components/Todo";
import { LANGUAGES, TASKS } from "./static/Data";

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
      </div>
    </>
  );
};

export default App;
