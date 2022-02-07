import axios from 'axios';

const KEY = 'AIzaSyAMobinLc4eDN91MFGjHTbPPtvosuGBL6Y';

const VideoSnippetSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  timeout: 5000,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

export { VideoSnippetSearch };
