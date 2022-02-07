import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

export default axios.create({
  baseURL: 'https://translation.googleapis.com/language/translate/v2',
  timeout: 5000,
  method: 'POST',
  params: {
    key: KEY,
  },
});
