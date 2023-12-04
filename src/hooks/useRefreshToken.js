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
    setAuth(response.data.accessToken);

    return response.data.accessToken;
  }

  return refresh;
}

export default useRefreshToken;
