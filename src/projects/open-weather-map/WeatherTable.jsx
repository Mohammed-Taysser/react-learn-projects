import React from 'react';
import SingleSvgCol from './SingleSvgCol';

function WeatherTable(props) {
  const { weather: weatherList } = props;

  const prepare_data = (list) => {
    let temp = [],
      pressure_arr = [],
      humidity_ar = [];

    list.forEach((item) => {
      temp.push(item.main.temp);
      pressure_arr.push(item.main.pressure);
      humidity_ar.push(item.main.humidity);
    });
    return [temp, pressure_arr, humidity_ar];
  };

  return (
    <div className='table-responsive'>
      <table className='table table-hover align-middle text-center'>
        <thead>
          <tr>
            <th scope='col'>City</th>
            <th scope='col'>Temperature(K)</th>
            <th scope='col'>Pressure(hPa)</th>
            <th scope='col'>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {weatherList.map((weatherItem, index) => {
            const [temperature, pressure, humidity] = prepare_data(
              weatherItem.list
            );

            return (
              <tr key={index}>
                <th scope='row'>{weatherItem.city.name}</th>
                <SingleSvgCol data={temperature} color='orange' unit='K' />
                <SingleSvgCol data={pressure} color='purple' unit='hPa' />
                <SingleSvgCol data={humidity} color='green' unit='%' />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
