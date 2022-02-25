import jsonPlaceHolder from '../../../api/jsonPlaceHolder';

function fetchPosts() {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
}
export default fetchPosts;
