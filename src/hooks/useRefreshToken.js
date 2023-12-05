import axios from "../api/axios";
import useAuth from "./useAuth";

function useRefreshToken() {
  const { setAuth } = useAuth();

  async function refresh() {
    // Fetch new accesstoken
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    // Setting new accesstoken
    setAuth({
      accessToken: response.data.accessToken,
      user_email: response.data.user_email,
      user_roles: response.data.user_roles,
    });

    return response.data.accessToken;
  }

  return refresh;
}

export default useRefreshToken;
