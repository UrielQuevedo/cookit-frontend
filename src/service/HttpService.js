import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const getToken = (url) => {
  debugger;
  if (url === 'auth/login/social') {
    return {};
  }
  const token = localStorage.getItem('authorization');
  return{ authorization: `Bearer ${token}` };
}

const AXIOS_API = axios.create({
  baseURL: baseURL + '/api',
});

const apiRequest = (method, url, data = {}) => {
  return AXIOS_API({
    method,
    url,
    data: data,
    headers: getToken(url)
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
