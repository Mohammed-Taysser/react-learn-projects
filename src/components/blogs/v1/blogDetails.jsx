import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { human_date } from '../../DateManipulate';
import { PostsAPI } from '../../../api/Localhost';
import Alert from '../../bootstrap-component/Alert';
import Spinner from '../../bootstrap-component/Spinner';

function BlogDetails() {
  let params = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('second');

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {
    setHasError(false);
    await PostsAPI.get(``, {
      params: { id: params.postId },
    })
      .then((response) => {
        setCurrentPost(response.data);
        setHasError(false);
        if (response.data.length === 0) {
          setHasError(true);
          setErrorMessage(`No Post With ${params.postId} Id`);
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

  const delete_post = () =>{
    PostsAPI.delete(`/${params.postId}`,{})
      .then((response) => {
        window.location.href = '/blogs/v1/';
      })
      .catch((error) => {
        // handle error
      })
      .then(() => {
        // always executed
      });
  }

  const render_message = () => {
    if (currentPost.length > 0) {
      return <PostData current_post={currentPost[0]} />;
    } else if (hasError) {
      return <Alert color='warning'>{errorMessage}</Alert>;
    } else {
      return <Spinner />;
    }
  };

  const PostData = ({ current_post }) => {
    return (
      <div className='row align-items-center align-items-stretch'>
        <div className='col-md-4 my-3'>
          <img
            src={current_post.picture}
            className='img-fluid h-100 rounded'
            alt={current_post.title}
          />
        </div>
        <div className='col-md-8 my-3'>
          <div className='nice-shadow h-100'>
            <div className='p-4 rounded'>
              <div className='d-flex align-items-center justify-content-between'>
                <h4>{current_post.title}</h4>
                <small
                  className={`badge rounded-pill bg-${
                    current_post.isActive ? 'success' : 'danger'
                  }`}
                >
                  {current_post.isActive ? 'active' : 'not active'}
                </small>
              </div>
              <h6 className='mb-2 text-muted'>
                {current_post.author} |{' '}
                <small>{human_date(current_post.createdAt)}</small>
              </h6>
              <p className=''>{current_post.about}</p>
              <div className=''>
                tags: 
                {current_post.tags.length > 0
                  ? current_post.tags.map((tag, index) => (
                      <span
                        className='badge rounded-pill bg-warning text-dark mx-1'
                        key={index}
                      >
                        {tag}
                      </span>
                    ))
                  : ' no tags'}
              </div>
              <div className="mt-3">
                <button className='btn btn-danger btn-sm' onClick={delete_post}> Delete Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=''>{render_message()}</div>
    </>
  );
}
export default BlogDetails;
