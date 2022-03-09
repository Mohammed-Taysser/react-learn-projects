import axios from 'axios';

const KEY = 'f59a9475c220bcdeb5aecc2b6ab7e7ea';

const OpenWeatherAPI = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast`,
  params: {
    appid: KEY,
  },
});

export default OpenWeatherAPI;
