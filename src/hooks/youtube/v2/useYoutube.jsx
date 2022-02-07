import { useState, useEffect } from 'react';
import { VideoSnippetSearch } from '../../../api/Youtube';

const useVideos = (default_query) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(default_query);
  }, [default_query]);

  const search = async (query) => {
    if (query) {
      await VideoSnippetSearch.get('/search', {
        params: { q: query },
      })
        .then((response) => {
          setVideos(response.data.items);
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
  return [videos, search];
};

export { useVideos };
