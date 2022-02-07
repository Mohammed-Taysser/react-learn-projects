import jsonPlaceHolder from '../api/jsonPlaceHolder';

function fetchPosts() {
  return async (dispatch, getState) => {
    const posts = await jsonPlaceHolder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: posts,
    });
  };
}
export default fetchPosts;
