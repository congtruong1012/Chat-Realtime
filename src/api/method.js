import AxiosClient from "./index";

export const get = (endPoint, query) => {
  return AxiosClient.get(endPoint, {
    params: query,
  });
};

export const post = (endPoint, body) => {
  return AxiosClient.post(endPoint, body);
};


