const ROOT_URL = "/api";

const USER = "/users";

export const listApiUsers = {
  login: `${ROOT_URL}${USER}/login`,
  logout: `${ROOT_URL}${USER}/logout`,
  register: `${ROOT_URL}${USER}/create`,
  checkToken: `${ROOT_URL}${USER}/check-token`,
  users: `${ROOT_URL}${USER}`,
};

