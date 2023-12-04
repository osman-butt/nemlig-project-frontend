import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "../api/axios";

// See https://www.bezkoder.com/axios-interceptors-refresh-token/

function usePrivateAxios() {
  const refreshToken = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        // Do something before request is sent
        return config;
      },
      error => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => {
        // Any status code from range of 2xx
        // Do something with response data
        return response;
      },
      error => {
        // Any status codes outside range of 2xx
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return () => {
      // Remove interceptors, else they will just add more and more headers
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  });
}

export default usePrivateAxios;
