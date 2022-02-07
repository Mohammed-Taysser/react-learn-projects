import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import MainRoute from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container my-5 py-5'>
        <MainRoute />
      </div>
    </BrowserRouter>
  );
};

export default App;
