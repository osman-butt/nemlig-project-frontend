import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.js";
import FormInput from "./FormInput.jsx";

export default function Loginform() {
  const navigate = useNavigate();

  // setter for global auth state
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === "" || email === "") {
      setError(true);
      setErrorMessage("Missing email or password");
    } else {
      // const LOGIN_URL = "/api/v1/login";
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
        setError(true);
        setErrorMessage(error.response?.data.message);
      }
    }
  };

  //<div className="flex flex-col items-center justify-center max-w-[1240px] text-black">
  return (
    <div className="w-full max-w-lg pt-8 m-auto">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="py-3 text-2xl font-medium text-center pt-6">Log ind</h2>
        <div className="w-full max-w-xs m-auto mt-4">
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-6">
              <FormInput
                label="E-mail"
                type="mail"
                placeholder="E-mail"
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="mb-6">
              <FormInput
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
            {error ? (
              <p className="pb-4 text-center text-red-600">{errorMessage}</p>
            ) : (
              <p></p>
            )}
            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-[#d4793a] rounded hover:bg-[#ecbc9a] focus:outline-none focus:shadow-outline"
              >
                Log ind
              </button>
            </div>
          </form>
          <div className="flex items-center mt-6">
            <button
              onClick={() => navigate("/createaccount")}
              className="w-full px-4 py-3 font-bold text-white bg-[#58644C] rounded hover:bg-[#798072] focus:outline-none focus:shadow-outline"
            >
              Opret bruger
            </button>
          </div>
        </div>
        <p className="py-4 font-medium text-center underline cursor-pointer">
          Glemt password?
        </p>
      </div>
    </div>
  );
}
