import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const getToken = url => {
  if (url === 'auth/login/social' || url === 'auth/register' || url === 'auth/login') {
    return {};
  }
  const token = localStorage.getItem('authorization');
  return { authorization: `Bearer ${token}` };
};

const axios_api = axios.create({
  baseURL: `${baseURL}/api`
});

const apiRequest = (method, url, data, parameters) =>
  axios_api({
    method,
    url,
    data,
    headers: getToken(url),
    params: parameters
  })
    .then(response => response.data)
    // eslint-disable-next-line no-console
    .catch(error => console.log(error.response));

const get = (url, parameters = {}) => apiRequest('get', url, {}, parameters);
const post = (url, data = {}) => apiRequest('post', url, data, {});
const remove = url => apiRequest('delete', url, {}, {});

const API = {
  get,
  post,
  remove
};

export default API;
