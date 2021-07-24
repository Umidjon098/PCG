import React from "react";
import ReactDOM from "react-dom";
import { baseUrl } from "./constants";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = baseUrl;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config;
      const refreshToken = localStorage.getItem("refreshToken");
      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const response = fetch("/profile/token/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        })
          .then((res) => res.json())

          .then((res) => {
            localStorage.set(res.access, "accessToken");
            return axios(originalRequest);
          });
        resolve(response);
      }
      return Promise.reject(error);
    });
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
