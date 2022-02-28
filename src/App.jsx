import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainRoute from './routes';
import AuthContext from './components/context/auth';
import LanguageContext from './components/context/language';
import IsJsonServerDownContext from './components/context/IsJsonServerDown';
import useJsonServerToast from './hooks/useJsonServerToast';

const App = () => {
  const [isDown, jsonServerToast] = useJsonServerToast();

  return (
    <AuthContext>
      <LanguageContext>
        <BrowserRouter>
          <Navbar />
          {isDown && jsonServerToast}
          <div className='container my-5 py-5'>
            <IsJsonServerDownContext.Provider value={isDown}>
              <MainRoute />
            </IsJsonServerDownContext.Provider>
          </div>
        </BrowserRouter>
      </LanguageContext>
    </AuthContext>
  );
};

export default App;
