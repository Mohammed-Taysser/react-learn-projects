import { combineReducers } from 'redux';
import CakeReducer from './CakeReducer';
import IceCreamReducer from './IceCreamReducer';
import MoltoReducer from './MoltoReducer';

export default combineReducers({
  cakes: CakeReducer,
  ice_creams: IceCreamReducer,
  moltos: MoltoReducer,
});
