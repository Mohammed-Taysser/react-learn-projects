import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';
import { StreamsAPI } from '../../../api/Localhost';

function SignIn(user_id) {
  return {
    type: SIGN_IN,
    payload: {
      userId: user_id,
    },
  };
}

function SignOut() {
  return {
    type: SIGN_OUT,
  };
}

function CreateStream(form_value, homepage_btn) {
  return async (dispatch, getState) => {
    const user_id = getState().auth.userId;
    let request_data = {
      ...form_value,
      userId: user_id.userId,
    };
    await StreamsAPI.post('/', request_data).then((response) => {
      dispatch({
        type: CREATE_STREAM,
        payload: response.data,
      });
      // window.location.href = '/streams';
      homepage_btn.click();
    });
  };
}

function DeleteStream(stream_id) {
  return async (dispatch) => {
    await StreamsAPI.delete(`/${stream_id}`).then((response) => {
      dispatch({
        type: DELETE_STREAM,
        payload: stream_id,
      });
    });
  };
}

function EditStream(stream_id, form_value, homepage_btn) {
  return async (dispatch) => {
    await StreamsAPI.patch(`/${stream_id}`, form_value).then((response) => {
      dispatch({
        type: EDIT_STREAM,
        payload: response.data,
      });
      homepage_btn.click();
    });
  };
}

function FetchStream(stream_id) {
  return async (dispatch) => {
    await StreamsAPI.get(`/${stream_id}`).then((response) => {
      dispatch({
        type: FETCH_STREAM,
        payload: response.data,
      });
    });
  };
}

function FetchStreams() {
  return async (dispatch) => {
    await StreamsAPI.get(`/`).then((response) => {
      dispatch({
        type: FETCH_STREAMS,
        payload: response.data,
      });
    });
  };
}

export {
  SignIn,
  SignOut,
  CreateStream,
  FetchStream,
  FetchStreams,
  EditStream,
  DeleteStream,
};
