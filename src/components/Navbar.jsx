import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './context/auth';

function NavBar(props) {
  const auth_context = useContext(AuthContext);
  const onLogoutClick = (e) => {
    e.preventDefault();
    auth_context.setIsAuth(false);
    auth_context.setUserId(null);
    localStorage.removeItem('auth');
  };
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark py-3'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <Link className='navbar-brand' to='/'>
          HOME
        </Link>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/geolocation'>
                GeoLocation
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#temp'
                id='api-projects'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                API
              </a>
              <ul className='dropdown-menu' aria-labelledby='api-projects'>
                <li>
                  <Link className='dropdown-item' to='/youtube'>
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/unsplash'>
                    Unsplash
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/wikipedia'>
                    Wikipedia
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/google-translate'>
                    Google Translate
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/blogs'>
                    blogs
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/todo'>
                Todo's
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='#'
                id='redux-projects'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Redux
              </Link>
              <ul className='dropdown-menu' aria-labelledby='redux-projects'>
                <li>
                  <Link className='dropdown-item' to='/songs'>
                    Songs
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/posts'>
                    Posts
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-0'>
            {auth_context.isAuth ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='/logout'
                    onClick={onLogoutClick}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
