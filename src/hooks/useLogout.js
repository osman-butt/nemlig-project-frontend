import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "./useAuth.js";

function useLogout() {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
}

export default useLogout;
