import React, { useState, createContext } from 'react';

const Context = createContext({
  language: 'english',
  setLanguage: (data) => console.log(data),
});

function LanguageContext(props) {
  const [language, setLanguage] = useState('english');

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {props.children}
    </Context.Provider>
  );
}

export default LanguageContext;
export { Context };
