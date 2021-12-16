import Axios from "axios";
import { getCookie } from "../utils/cookie";

const AxiosClient = Axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: status => status === 200
  // timeout: 2000,
});

// const isTokenExpired = false;
// let refreshTokenRequest: Promise<string> | null;

// Add a request interceptor
AxiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getCookie("token");

    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('error', error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const originalConfig = error.config;

    // if (originalConfig.url !== "/login" && error.response) {
    //   // Access Token was expired
    //   if (error.response.status === 401) {
    //     if (refreshTokenRequest) {
    //       refreshTokenRequest.then((token: string) => {
    //         originalConfig.headers["Authorization"] = `Bearer ${token}`;
    //       });
    //     } else {
    //       const refreshToken = localStorage.getItem("refresh-token");
    //       refreshTokenRequest = AxiosClient.post("/token", {
    //         refreshToken,
    //       }).then((res) => {
    //         refreshTokenRequest = null;
    //         const { token } = res.data;
    //         localStorage.setItem("token", token);
    //         return token;
    //       });
    //     }
    //   }
    // }

    return Promise.reject(error);
  }
);

export default AxiosClient;
