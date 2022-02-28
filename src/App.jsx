import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainRoute from './routes';
import AuthContext from './components/context/auth';
import LanguageContext from './components/context/language';
import IsJsonServerDownContext from './components/context/IsJsonServerDown';
import useJsonServerToast from './hooks/useJsonServerToast';

const App = () => {
  let is_auth_default = false,
    user_id_default = null;

  if (localStorage.getItem('auth') !== null) {
    const auth_localStorage = JSON.parse(localStorage.getItem('auth'));
    is_auth_default = auth_localStorage.isAuth;
    user_id_default = auth_localStorage.userId;
  }

  const [isAuth, setIsAuth] = useState(is_auth_default);
  const [userId, setUserId] = useState(user_id_default);
  const [language, setLanguage] = useState('english');
  const auth_context_data = { isAuth, userId, setIsAuth, setUserId };
  const [isDown, jsonServerToast] = useJsonServerToast();

  return (
    <AuthContext.Provider value={auth_context_data}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Navbar />
          {isDown && jsonServerToast}
          <div className='container my-5 py-5'>
            <IsJsonServerDownContext.Provider value={isDown}>
              <MainRoute />
            </IsJsonServerDownContext.Provider>
          </div>
        </BrowserRouter>
      </LanguageContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
