import React, { useState, useEffect } from 'react';

const DELAY_TIME = 500;

function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    if (query !== '') {
      const timer_id = setTimeout(() => {
        setDebouncedQuery(query);
      }, DELAY_TIME);
      return () => {
        clearTimeout(timer_id);
      };
    }
  }, [query]);

  useEffect(() => {
    /*
    ? Warning here because of using props on useEffect
    ? but the solution is perfect (without props)
    */
    if (debouncedQuery !== '' && props.auto_submit) {
      props.onFormSubmit(debouncedQuery);
    }
  }, [debouncedQuery]);

  const OnInputChange = (event) => {
    setQuery(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(query);
  };

  return (
    <div className={props.className}>
      <form onSubmit={onFormSubmit}>
        <div className='search-bar-container'>
          <div className='col'>
            <input
              className='search-bar-input'
              type='search'
              placeholder={props.placeholder}
              value={query}
              onChange={OnInputChange}
            />
          </div>
          <div className='col-auto'>
            <button type='submit' className={`btn btn-${props.variant}`}>
              {props.label}
            </button>
          </div>
        </div>
        <small className='text-muted mt-1'>
          {props.result_number ? (
            <span>results: {props.result_number}</span>
          ) : null}
        </small>
      </form>
    </div>
  );
}

SearchBar.defaultProps = {
  placeholder: 'search',
  label: 'search',
  variant: 'primary',
  onFormSubmit: (data) => {
    console.log(data);
  },
  auto_submit: true,
};

export default SearchBar;
