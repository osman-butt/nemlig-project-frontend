import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import axios from "../api/axios.js";
// import useAuth from "../hooks/useAuth.js";
import FormInput from "./FormInput.jsx";
import useLogin from "../hooks/useLogin.js";
import ButtonFullSecondary from "./buttons/ButtonFullSecondary.jsx";
import ButtonFullPrimary from "./buttons/ButtonFullPrimary.jsx";

export default function Loginform() {
  const navigate = useNavigate();
  const { login, error, errorMessage } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="w-full max-w-lg pt-8 m-auto">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="py-3 pt-6 text-2xl font-medium text-center">Log ind</h2>
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
              <ButtonFullPrimary type={"submit"}>Log ind</ButtonFullPrimary>
            </div>
          </form>
          <div className="flex items-center mt-6">
            <ButtonFullSecondary onClick={() => navigate("/createaccount")}>
              Opret bruger
            </ButtonFullSecondary>
          </div>
        </div>
        <p className="py-4 font-medium text-center underline cursor-pointer">
          Glemt password?
        </p>
      </div>
    </div>
  );
}
