import React from 'react';
import PostItem from './postItem';

function PostList(props) {
  return props.posts.map((post, index) => {
    return (
      <div className='col-md-6 col-lg-4 my-3' key={index}>
        <PostItem {...post} />
      </div>
    );
  });
}

PostList.defaultProps = {
  posts: [],
};

export default PostList;
