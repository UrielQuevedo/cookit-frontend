import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const AXIOS_API = axios.create({
  baseURL: baseURL + '/api',
});

const apiRequest = (method, url) => {
  return AXIOS_API({
    method,
    url,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
};

const get = (url) => apiRequest('get', url);

const API = {
  get,
};

export default API;
