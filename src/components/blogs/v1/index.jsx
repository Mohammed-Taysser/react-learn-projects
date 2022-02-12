import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostList from './postList';
import PostPagination from './postPagination';
import SearchBar from '../../SearchBar';
import { PostsAPI } from '../../../api/Localhost';
import Alert from '../../bootstrap-component/Alert';
import Spinner from '../../bootstrap-component/Spinner';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [userQuery, setUserQuery] = useState('a');
  const [paginationObj, setPaginationObj] = useState({});

  useDocumentTitle('Blogs v1 | Homepage');

  useEffect(() => {
    get_api_post();
  }, [currentPageNumber, userQuery]);

  const onFormSubmit = (query) => {
    if (query) {
      setUserQuery(query);
      setPosts([]);
      setHasError(false);
      get_api_post();
    } else {
      console.log(query); // no query entered
    }
  };

  const get_api_post = async () => {
    await PostsAPI.get(``, {
      params: { title_like: userQuery, _page: currentPageNumber, _limit: 12 },
    })
      .then((response) => {
        manipulate_pagination_links(response);
        setPosts(response.data);
        setHasError(false);
        if (response.data.length === 0) {
          setHasError(true);
          setErrorMessage(`No Post Contain ${userQuery}`);
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

  const manipulate_pagination_links = (response) => {
    const arr = response.headers.link.split(',');
    if (arr.length === 3) {
      let pagination_obj = {};

      arr.forEach((item) => {
        const url_data = new URLSearchParams(
          item.split(';')[0].replace(/</g, '').replace(/>/g, '')
        );
        const relation = item.split(';')[1].slice(6, -1),
          page_number = parseInt(url_data.get('_page'), 10);
        pagination_obj[relation] = page_number;
      });

      setPaginationObj(pagination_obj);
    }
  };

  return (
    <>
      <div className='mb-3'>
        <Link to='/blogs/v1/create' className='btn btn-dark'>
          create new post
        </Link>
      </div>
      <SearchBar
        onFormSubmit={onFormSubmit}
        result_number={posts.length}
        className='mb-4'
        variant='dark'
      />
      <div className='row justify-content-center align-items-stretch'>
        {render_message()}
      </div>
      <PostPagination
        paginationObj={paginationObj}
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
      />
    </>
  );
}

export default Blogs;
