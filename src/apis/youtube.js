import axios from 'axios';

const KEY = 'AIzaSyBZmFklTINzaXZFjz05hms2XsBrhZHFUbU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
