import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "./useAuth.js";

function useLogout() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get("/logout", {
        withCredentials: true,
      });

      // Set global auth state
      setAuth();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
}

export default useLogout;
