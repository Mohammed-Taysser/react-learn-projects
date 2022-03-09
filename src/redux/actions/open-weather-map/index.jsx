import OpenWeatherAPI from '../../../api/OpenWeatherMap';
import { FETCH_WEATHER } from './types';

function fetch_weather(city) {
  return async (dispatch, getState) => {
    await OpenWeatherAPI.get(`/`, {
      params: {
        q: city,
      },
    })
      .then((response) => {
        dispatch({
          type: FETCH_WEATHER,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_WEATHER,
          payload: null,
        });
      });
  };
}
export { fetch_weather };
