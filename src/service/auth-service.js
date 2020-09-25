import API from './http-service';

const URL_BASE = 'auth';

export const loginSocial = data => API.post(`${URL_BASE}/login/social`, data);
