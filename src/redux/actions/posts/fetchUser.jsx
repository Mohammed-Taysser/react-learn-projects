import jsonPlaceHolder from '../../../api/jsonPlaceHolder';

function fetchUsers(user_id) {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${user_id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data,
    });
  };
}
export default fetchUsers;
