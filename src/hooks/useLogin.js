import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";
import { useState } from "react";

function useLogin() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const login = async (email, password) => {
    if (password === "" || email === "") {
      setError(true);
      setErrorMessage("Mangler email/password");
    } else {
      try {
        const response = await axios.post(
          "/login",
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        // Set global auth state
        setAuth({
          accessToken: response.data.accessToken,
          user_email: response.data.user_email,
          user_roles: response.data.user_roles,
        });

        setError(false);
        setErrorMessage("");
        navigate("/shop");
      } catch (error) {
        //   return err.response?.data.message;
        setError(true);
        setErrorMessage(error.response?.data.message);
      }
    }
  };

  return { login, error, errorMessage };
}

export default useLogin;
