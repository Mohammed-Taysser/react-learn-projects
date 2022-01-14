import React from 'react';
import Navbar from './components/Navbar';
import { Route } from './components/CustomRouter';
import UnsplashSearchEngin from './components/UnsplashSearchEngin';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <Route path='/'>
          homepage
        </Route>
        <Route path='/unsplash'>
          <UnsplashSearchEngin />
        </Route>
      </div>
    </>
  );
}

export default App;
