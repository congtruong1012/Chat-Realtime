import AxiosClient from "./index";

export const get = (endPoint, query) =>
  AxiosClient.get(endPoint, {
    params: query,
  });

export const post = (endPoint, body) => AxiosClient.post(endPoint, body);
