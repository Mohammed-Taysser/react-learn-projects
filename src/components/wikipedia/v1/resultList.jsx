import React from 'react';
import ResultItem from './resultItem';

function resultList({ results }) {
  return (
    <div className='list-group mt-4'>
      {results.map((result, index) => {
        return <ResultItem result={result} key={index} />;
      })}
    </div>
  );
}
export default resultList;
