import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "../api/axios";

// See https://www.bezkoder.com/axios-interceptors-refresh-token/

// Purpose:
// Abstracts authentication logic. If the accessToken is invalid
// the hook will make a new request to "backend-url/refresh"
// in order to obtain a new accessToken and set it to the
// global state (this is implemented in useRefreshToken)
// If the refreshToken is invalid, and error is returned

// Usage:
// import usePrivateAxios from "..."
// Initialize: const privateAxios = usePrivateAxios();
// Inside useEffect Hook:
// const response = await privateAxios.get(url);

function usePrivateAxios() {
  const refreshToken = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        // Before the request is sent, add the auth header
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      error => {
        // If error return the error
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => {
        // Any status code from range of 2xx
        return response;
      },
      async error => {
        // Any status codes outside range of 2xx
        // Do something with response error
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          // we dont want to end in a inifinte loop to the /refresh route
          // So we set the prevRequest=true, to only try once
          prevRequest.sent = true;
          // Get new accessToken
          const accessToken = await refreshToken();
          // Add the new accessToken to the header
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          // return axios instance
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Remove interceptors, else they will just add more and more headers
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refreshToken]);
  return axiosPrivate;
}

export default usePrivateAxios;
