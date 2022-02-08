import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostsAPI } from '../../../api/Localhost';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function CreateBlog() {
  let params = useParams();
  const [currentPost, setCurrentPost] = useState({});
  const [postTitle, setPostTitle] = useState('');
  const [postDetails, setPostDetails] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postTags, setPostTags] = useState('');
  const [postIsActive, setPostIsActive] = useState(true);
  const [postImage, setPostImage] = useState('');
  useDocumentTitle('Blogs v1 | Update Post');

  useEffect(() => {
    get_current_post();
  }, []);

  const get_current_post = async () => {
    await PostsAPI.get(``, {
      params: { id: params.postId },
    })
      .then((response) => {
        // console.log(response.data[0]);
        setCurrentPost(response.data[0]);
        show_current_post_data(response.data[0]);
      })
      .catch((error) => {
        // handle error
      })
      .then(() => {
        // always executed
      });
  };

  const generate_uploaded_image = (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      setPostImage(uploaded_image.toString());
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const show_current_post_data = (current_post) => {
    setPostTitle(current_post.title);
    setPostAuthor(current_post.author);
    setPostDetails(current_post.about);
    setPostIsActive(current_post.isActive);
    setPostImage(current_post.picture);
    setPostTags(current_post.tags.toString());
  };

  const onFormSubmit = async (e) => {
    const POST_DATA = {
      id: currentPost.id,
      title: postTitle || currentPost.title,
      author: postAuthor || currentPost.author,
      about: postDetails || currentPost.about,
      tags:
        [...new Set(postTags.split(','))][0] !== ''
          ? [...new Set(postTags.split(','))]
          : [],
      createdAt: currentPost.createdAt,
      isActive: postIsActive,
      picture: postImage || currentPost.picture,
    };
    e.preventDefault();
    // console.log(POST_DATA);
    await PostsAPI.put(`/${currentPost.id}`, POST_DATA)
      .then((response) => {
        // console.log(response);
        window.location.href = `/blogs/v1/${currentPost.id}`;
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
      <div className=''>
        <form
          className='row g-3 needs-validation'
          noValidate
          onSubmit={onFormSubmit}
        >
          <div className='col-md-6'>
            <label htmlFor='post-title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              id='post-title'
              value={postTitle}
              required
              placeholder='Post Title'
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            />
            <div className='valid-feedback'>Looks good!</div>
            <div className='invalid-feedback'>Please enter a valid title</div>
          </div>
          <div className='col-md-6'>
            <label htmlFor='post-author' className='form-label'>
              Author
            </label>
            <input
              type='text'
              className='form-control'
              id='post-author'
              value={postAuthor}
              required
              placeholder='Post Author'
              onChange={(e) => {
                setPostAuthor(e.target.value);
              }}
            />
            <div className='valid-feedback'>Looks good!</div>
            <div className='invalid-feedback'>Please enter a valid name</div>
          </div>
          <div className='col-md-12'>
            <label htmlFor='post-details' className='form-label'>
              details
            </label>
            <textarea
              className='form-control'
              id='post-details'
              value={postDetails}
              placeholder='Enter Details'
              required
              onChange={(e) => {
                setPostDetails(e.target.value);
              }}
            ></textarea>
            <div className='valid-feedback'>Looks good!</div>
            <div className='invalid-feedback'>Please enter a post detail</div>
          </div>
          <div className='col-md-6 my-3'>
            <label htmlFor='post-image' className='form-label'>
              image
            </label>
            <input
              className='form-control'
              type='file'
              id='post-image'
              // value={postImage}
              onChange={generate_uploaded_image}
            />
            <img
              src={postImage}
              alt={postTitle}
              className='img-fluid mt-3'
              width={`100px`}
              height={'100px'}
            />
          </div>
          <div className='col-md-6'>
            <label htmlFor='post-tags' className='form-label'>
              tags
            </label>
            <input
              type='text'
              className='form-control'
              id='post-tags'
              value={postTags}
              required
              placeholder='Post tags'
              onChange={(e) => {
                setPostTags(e.target.value.replace(' ', ','));
              }}
            />
            <div className='valid-feedback'>Looks good!</div>
            <div className='invalid-feedback'>Please enter a valid title</div>
          </div>
          <div className='col-md-12'>
            <div className='form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='post-active'
                checked={postIsActive}
                onChange={(e) => {
                  setPostIsActive(e.target.checked);
                }}
                required
              />
              <label className='form-check-label' htmlFor='post-active'>
                is active
              </label>
            </div>
          </div>

          <div className='col-md-12'>
            <button className='btn btn-primary' type='submit'>
              Update Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateBlog;
