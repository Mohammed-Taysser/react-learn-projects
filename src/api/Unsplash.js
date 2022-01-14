import axios from "axios";

const KEY = 'gi84V5p_MYI74eI1qz19faCiWBnPV25iEtnyJuFlkA0'

export default axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 5000,
  headers: {
    Authorization: `Client-ID ${KEY}`,
    'Accept-Version': 'v1'
  },
});
