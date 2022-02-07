import React, { useState, useEffect } from 'react';
import ResultList from './resultList';
import SearchBar from '../../SearchBar';
import Spinner from '../../bootstrap-component/Spinner';
import WikipediaAPI from '../../../api/Wikipedia';

function Wikipedia() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    onSubmit('react');
  }, []);

  const onSubmit = async (query) => {
    if (query) {
      await WikipediaAPI.get('', {
        params: { srsearch: query },
      })
        .then((response) => {
          setResults(response.data.query.search);
        })
        .catch((error) => {
          // handle error
        })
        .then(() => {
          // always executed
        });
    } else {
      console.log(query); // no query entered
    }
  };

  const render_message = () => {
    if (results.length > 0) {
      return <ResultList results={results} />;
    } else {
      return (
        <div className='mt-3'>
          <Spinner />
        </div>
      );
    }
  };

  return (
    <>
      <SearchBar onFormSubmit={onSubmit} result_number={results.length} />
      {render_message()}
    </>
  );
}

export default Wikipedia;
