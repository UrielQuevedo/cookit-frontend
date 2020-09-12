import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const AXIOS_API = axios.create({
  baseURL: baseURL + '/api',
});

const apiRequest = (method, url, data = {}) => {
  return AXIOS_API({
    method,
    url,
    data: data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
};

const get = (url) => apiRequest('get', url);
const post = (url, data) => apiRequest('post', url, data);

const API = {
  get,
  post,
};

export default API;
