import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { GoSignOut } from 'react-icons/go';
import { SignIn, SignOut } from '../../redux/actions/streams';
import { useIsSignedIn, useUserId } from '../../redux/selectors/streams';
import 'https://apis.google.com/js/platform.js';

function GoogleAuth() {
  const dispatch = useDispatch();
  const isSignedIn = useIsSignedIn();
  const userId = useUserId();
  const [authInstance, setAuthInstance] = useState(null);

  useEffect(() => {
    init_google_auth();
  }, []);

  useEffect(() => {
    if (authInstance !== null) {
      on_auth_change(authInstance.isSignedIn.get());
      authInstance.isSignedIn.listen(on_auth_change);
    }
  }, [authInstance]);

  const init_google_auth = () => {
    window.gapi.load('client:auth2', () => {
      // async request ti get the needed library
      window.gapi.client
        .init({
          clientId:
            '901199294918-8epdsddciat1qekhuqb2tbt4revrcus4.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          // invoke after init function
          setAuthInstance(window.gapi.auth2.getAuthInstance());
        });
    });
  };

  const on_auth_change = (is_sign_in) => {
    if (is_sign_in) {
      dispatch(SignIn(authInstance.currentUser.get().getId()));
    } else {
      dispatch(SignOut());
    }
  };

  const on_sign_in_btn_click = (evt) => {
    evt.preventDefault();
    authInstance.signIn();
  };

  const on_sign_out_btn_click = (evt) => {
    evt.preventDefault();
    authInstance.signOut();
  };

  const render_sign_in_button = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <a
          className='btn text-danger'
          href='#sign-out'
          onClick={on_sign_out_btn_click}
        >
          Logout {<GoSignOut className='h3 m-0 ' />}
        </a>
      );
    } else {
      return (
        <a className='btn' href='#sign-in' onClick={on_sign_in_btn_click}>
          Login with {<FcGoogle className='h4 m-0' />}
        </a>
      );
    }
  };

  return <div>{render_sign_in_button()}</div>;
}

export default GoogleAuth;
