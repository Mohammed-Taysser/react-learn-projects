import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_weather } from '../../redux/actions/open-weather-map';
import { useWeather } from '../../redux/selectors/open-weather-map';
import WeatherTable from './WeatherTable';

function Dashboard() {
  const dispatch = useDispatch();
  const weather = useWeather();
  const [city, setCity] = useState('egypt');

  useEffect(() => {
    dispatch(fetch_weather(`${city}`));
  }, []);

  const render_message = () => {
    if (weather === null) {
      return <> no city found </>;
    } else if (Object.keys(weather).length > 0) {
      return (
        <div>
          <WeatherTable weather={weather} />
        </div>
      );
    }

    return 'loading';
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetch_weather(`${city}`));
  };

  return (
    <section className='my-5'>
      <form className='row g-3 mb-4' onSubmit={onFormSubmit}>
        <div className='col-auto'>
          <label htmlFor='city-search' className='visually-hidden'>
            city search
          </label>
          <input
            type='text'
            className='form-control'
            id='city-search'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='City Search'
          />
        </div>

        <div className='col-auto'>
          <button type='submit' className='btn btn-primary mb-3'>
            Search
          </button>
        </div>
      </form>
      {render_message()}
    </section>
  );
}

export default Dashboard;
