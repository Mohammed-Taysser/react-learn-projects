import React, { useState } from 'react';

import { human_date } from '../../DateManipulate';
import { PostsAPI } from '../../../api/Localhost';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function CreateBlog() {
  const [postTitle, setPostTitle] = useState('');
  const [postDetails, setPostDetails] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postTags, setPostTags] = useState('');
  const [postIsActive, setPostIsActive] = useState(true);
  const [postImage, setPostImage] = useState('');
  useDocumentTitle('Blogs v1 | Create New Post');

  const onFormSubmit = async (e) => {
    const post_id = random_id();
    const POST_DATA = {
      id: post_id,
      title: postTitle || 'post title',
      author: postAuthor || 'post author',
      about: postDetails || 'post details',
      tags:
        [...new Set(postTags.split(','))][0] !== ''
          ? [...new Set(postTags.split(','))]
          : [],
      createdAt: human_date(new Date()),
      isActive: postIsActive,
      picture: postImage || 'https://picsum.photos/id/1013/1000/1000',
    };
    e.preventDefault();
    console.log(POST_DATA);
    await PostsAPI.post(``, POST_DATA)
      .then((response) => {
        // console.log(response);
        window.location.href = '/blogs/v1/';
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
      setPostImage(uploaded_image);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const random_id = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz123456789'.split(''),
      random_char = () => alphabet[(Math.random() * alphabet.length) | 0];

    let generated_id = '';
    for (let index = 0; index < 24; index++) {
      generated_id += random_char();
    }
    return generated_id;
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
              onChange={generate_uploaded_image}
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
              value={postTags.replace(' ', ',')}
              required
              placeholder='Post tags'
              onChange={(e) => {
                setPostTags(e.target.value);
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
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateBlog;
