import Axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const AxiosClient = Axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status === 200,
  withCredentials: true,
  // timeout: 4000,
});

// const isTokenExpired = false;
// let refreshTokenRequest;

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
    console.log("error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const originalConfig = error.config;

    // const arrNonCheck = [
    //   "/api/users/login",
    //   "/api/users/create",
    //   "/api/users/logout",
    // ];

    // if (!arrNonCheck.includes(originalConfig.url) && error.response) {
    //   // Access Token was expired
    //   if (error.response.status === 401) {
    //     const refreshToken = getCookie("refreshToken");
    //     AxiosClient.post("/api/users/token", {
    //       refreshToken,
    //     }).then((res) => {
    //       const { token } = res.data;
    //       setCookie("token", token);
    //       localStorage.removeItem("refreshToken");
    //       return token;
    //     });
    //   }
    // }

    return Promise.reject(error);
  }
);

export default AxiosClient;
