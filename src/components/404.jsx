import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='text-center'>
      <h1>page not found</h1>
      <h2 className='display-1 text-danger'>404</h2>
      <h3 className='h5'>the page you are looking for not found</h3>
      <p>
        back <Link to='/'> homepage </Link>
      </p>
    </div>
  );
}

export default Homepage;
