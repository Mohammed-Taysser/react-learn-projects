import { combineReducers } from 'redux';
import { FETCH_WEATHER } from '../../actions/open-weather-map/types';

function OpenWeatherMap(state = [], action = {}) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload === null ? state : [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({ weather: OpenWeatherMap });
