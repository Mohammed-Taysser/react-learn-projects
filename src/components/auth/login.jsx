import React, { useContext, useState } from 'react';
import Alert from '../bootstrap-component/Alert';
import AuthContext from '../context/auth';
import { UsersAPI } from '../../api/Localhost';

function Login() {
  const auth_context = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('second');

  const onFormSubmit = async (e) => {
    e.preventDefault();

    check_empty_fields();

    await UsersAPI.get(``, {
      params: { email: email },
    })
      .then((response) => {
        if (response.data.length === 0) {
          setHasError(true);
          setErrorMessage(`No user found please check your data`);
        } else {
          setHasError(false);
          setCurrentUser(response.data[0]);
          if (response.data[0].password === password) {
            setHasError(false);
            auth_context.setIsAuth(true);
            auth_context.setUserId(response.data[0].id);
            console.log(auth_context);
            localStorage.setItem(
              'auth',
              JSON.stringify({ isAuth: true, userId: response.data[0].id })
            );
          } else {
            setHasError(true);
            setErrorMessage(`please check your password`);
          }
        }
      })
      .catch((error) => {
        // handle error
      })
      .then(() => {
        // always executed
      });
  };

  const check_empty_fields = () => {
    if (email.length > 0) {
      setEmptyEmail(false);
    } else {
      setEmptyEmail(true);
    }

    if (password.length > 0) {
      setEmptyPassword(false);
    } else {
      setEmptyPassword(true);
    }
  };

  const render_message = () => {
    if (auth_context.isAuth) {
      return <Alert> You Already Sign In </Alert>;
    } else {
      return (
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            {hasError && <Alert color='danger'> {errorMessage} </Alert>}
            <form
              className='needs-validation'
              noValidate
              onSubmit={onFormSubmit}
            >
              <div className='my-3'>
                <label htmlFor='login-email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className={`form-control ${emptyEmail ? 'is-invalid' : null}`}
                  id='login-email'
                  value={email}
                  required
                  placeholder='Email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    check_empty_fields();
                  }}
                />
                <div className='valid-feedback'>Looks good!</div>
                <div className='invalid-feedback'>
                  Please enter a valid Email
                </div>
              </div>
              <div className='my-3'>
                <label htmlFor='login-Password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className={`form-control ${
                    emptyPassword ? 'is-invalid' : null
                  }`}
                  id='login-Password'
                  value={password}
                  required
                  placeholder='Password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                    check_empty_fields();
                  }}
                />
                <div className='valid-feedback'>Looks good!</div>
                <div className='invalid-feedback'>
                  Please enter a valid Password
                </div>
              </div>
              <div className='col-md-12'>
                <button className='btn btn-primary' type='submit'>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  return <>{render_message()}</>;
}
export default Login;
