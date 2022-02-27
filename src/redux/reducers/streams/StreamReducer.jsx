import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from '../../actions/streams/types';

function StreamReducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE_STREAM:
      return state.map((stream) =>
        stream.id === action.payload.id ? action.payload : null
      );
    case DELETE_STREAM:
      return state.filter((stream) => stream.id !== action.payload);

    case EDIT_STREAM:
    case FETCH_STREAM:
    case FETCH_STREAMS:
      return action.payload;

    default:
      return state;
  }
}

export default StreamReducer;
