import React from 'react';
import Navbar from './components/Navbar';
import MainRoute from './routes';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container my-5 py-5'>

        <MainRoute />

      </div>
    </>
  );
};

export default App;
