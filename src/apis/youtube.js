import axios from 'axios';

const KEY = 'AIzaSyBzKk13eOwhWq3e8sUyp1xodgvDqWkAWKE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
