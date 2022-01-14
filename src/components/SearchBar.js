import React, { useState, useEffect } from "react";

const DELAY_TIME = 500;

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    if (debouncedQuery !== "") {
      const timer_id = setTimeout(() => {
        setQuery(debouncedQuery);
      }, DELAY_TIME);
      return () => {
        clearTimeout(timer_id);
      };
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (query !== "") {
      props.onFormSubmit(query);
    }
  }, [query]);

  const OnInputChange = (event) => {
    setDebouncedQuery(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(query);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="search-bar-container">
        <div className="col">
          <input
            className="search-bar-input"
            type="search"
            placeholder={props.placeholder}
            value={debouncedQuery}
            onChange={OnInputChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            {props.label}
          </button>
        </div>
      </div>
      <small className="text-muted mt-1">
        {props.result_number ? <span>results: {props.result_number}</span> : null}
      </small>
    </form>
  );
}

SearchBar.defaultProps={
  placeholder: 'search',
  label: 'search',
}

export default SearchBar;
