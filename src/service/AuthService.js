import API from './HttpService';

const URL_BASE = 'auth';

export const loginSocial = (data) => {
  return API.post(URL_BASE + `/login/social`, data);
};
