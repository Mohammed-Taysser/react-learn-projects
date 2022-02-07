import axios from 'axios';

export default axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  params: {
    action: 'query',
    // limit: "5",
    origin: '*',
    list: 'search',
    // namespace: "0",
    format: 'json',
  },
});
