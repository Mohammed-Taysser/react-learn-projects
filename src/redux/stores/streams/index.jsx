import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Streams from '../../reducers/streams';

export default createStore(Streams, applyMiddleware(thunk));
