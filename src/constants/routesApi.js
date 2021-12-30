const ROOT_URL = '/api';

const USER = '/users';
const CHANNEL = '/channel';
const MESSAGE = '/message';

export const listApiUsers = {
  login: `${ROOT_URL}${USER}/login`,
  logout: `${ROOT_URL}${USER}/logout`,
  register: `${ROOT_URL}${USER}/create`,
  checkToken: `${ROOT_URL}${USER}/check-token`,
  users: `${ROOT_URL}${USER}`,
  detail: `${ROOT_URL}${USER}/detail`,
};

export const listApiChannels = {
  get: `${ROOT_URL}${CHANNEL}/`,
  create: `${ROOT_URL}${CHANNEL}/create`,
};

export const listApiMessages = {
  get: `${ROOT_URL}${MESSAGE}/`,
  save: `${ROOT_URL}${MESSAGE}/save`,
};
