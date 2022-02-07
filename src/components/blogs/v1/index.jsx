import React, { useState, useEffect } from 'react';
import PostList from './postList';
import SearchBar from '../../SearchBar';
import { PostsAPI } from '../../../api/Localhost';
import Alert from '../../bootstrap-component/Alert';
import Spinner from '../../bootstrap-component/Spinner';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    onFormSubmit('we');
  }, []);

  const onFormSubmit = async (query) => {
    if (query) {
      setPosts([]);
      setHasError(false);
      await PostsAPI.get(``, {
        params: { title_like: query },
      })
        .then((response) => {
          setPosts(response.data);
          setHasError(false);
          if (response.data.length === 0) {
            setHasError(true);
            setErrorMessage(`No Post Contain ${query}`);
          }
        })
        .catch((error) => {
          // handle error
          if (error.toString() === 'Error: Network Error') {
            setHasError(true);
            setErrorMessage('Server Is Down, Please Try On Another Time');
          }
        })
        .then(() => {
          // always executed
        });
    } else {
      console.log(query); // no query entered
    }
  };

  const render_message = () => {
    if (posts.length > 0) {
      return <PostList posts={posts} />;
    } else if (hasError) {
      return <Alert color='warning'>{errorMessage}</Alert>;
    } else {
      return <Spinner />;
    }
  };

  return (
    <>
      <SearchBar
        onFormSubmit={onFormSubmit}
        result_number={posts.length}
        className='mb-4'
      />
      <div className='row justify-content-center align-items-stretch'>
        {render_message()}
      </div>
    </>
  );
}

export default Blogs;
