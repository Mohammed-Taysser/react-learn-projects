import React, { useState, useEffect } from 'react';
import Dropdown from '../../Dropdown';
import SearchBar from '../../SearchBar';
import Translate from '../../../api/GoogleTranslate';

const GoogleTranslate = (props) => {
  const [translation, setTranslation] = useState('');
  const [source, setSource] = useState('hello world');
  const [currentLanguage, setCurrentLanguage] = useState('ar');

  useEffect(() => {
    getTranslation();
  }, [source, currentLanguage]);

  const getTranslation = async () => {
    await Translate.post(
      '',
      {},
      {
        params: {
          q: source,
          target: currentLanguage,
        },
      }
    )
      .then((response) => {
        setTranslation(response.data.data.translations[0].translatedText);
      })
      .catch((error) => {
        // handle error
      })
      .then(() => {
        // always executed
      });
  };

  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <div className='w-auto my-3'>
          <SearchBar onFormSubmit={setSource} label={'translate'} />
        </div>
        <div className='w-auto my-3'>
          <Dropdown
            items={props.languages}
            label={'Google Translate'}
            OnSelectChange={setCurrentLanguage}
          />
        </div>
      </div>
      <h1 className='w-100 text-center my-3'>{translation}</h1>
    </>
  );
};

export default GoogleTranslate;
