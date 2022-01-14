import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Wikipedia from "../api/Wikipedia";
import WikipediaResultItem from "./WikipediaResultItem";

function WikipediaSearchEngin() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    onSubmit("react");
  }, []);

  const onSubmit = async (query) => {
    if (query) {
      await Wikipedia.get("", {
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
      return (
        <div className="list-group mt-4">
          {results.map((result, index) => {
            return <WikipediaResultItem result={result} key={index} />;
          })}
        </div>
      );
    }
  };

  return (
    <>
      <SearchBar onFormSubmit={onSubmit} label={'search'} result_number={results.length} />
      {render_message()}
    </>
  );
}

export default WikipediaSearchEngin;
