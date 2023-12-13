import { useNavigate } from "react-router-dom";
// import InputField from "./InputField";
import axios from "../api/axios";
import FormInput from "./FormInput";
import { useState } from "react";
import ButtonFullSecondary from "./buttons/ButtonFullSecondary";

export default function Createaccountform() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState();
  const [city, setCity] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(
        "/register",
        JSON.stringify({
          user_email: email,
          user_password: password,
          customer: {
            customer_name: name,
            addresses: {
              street: street,
              city: city,
              zip_code: Number(zipCode),
              country: "Danmark",
            },
          },
        }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      navigate("/login");
    } catch (error) {
      setError(true);
      setErrorMessage(error.response?.data.message);
    }
  };

  return (
    <div className="w-full max-w-lg pt-8 m-auto">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="py-3 pt-6 text-2xl font-medium text-center">
          Opret bruger
        </h2>
        <div className="w-full max-w-xs m-auto mt-4">
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <FormInput
                label="Navn"
                type="text"
                placeholder="Navn"
                value={name}
                onChange={setName}
              />
            </div>
            <div className="mb-2">
              <FormInput
                label="Adresse"
                type="text"
                placeholder="Adresse"
                value={street}
                onChange={setStreet}
              />
            </div>
            <div className="mb-2">
              <FormInput
                label="Postnummer"
                type="number"
                placeholder="Postnummer"
                value={zipCode}
                onChange={setZipCode}
              />
            </div>
            <div className="mb-2">
              <FormInput
                label="By"
                type="text"
                placeholder="By"
                value={city}
                onChange={setCity}
              />
            </div>
            <div className="mb-2">
              <FormInput
                label="E-mail"
                type="mail"
                placeholder="E-mail"
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="mb-2">
              <FormInput
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
            {error ? (
              <p className="pb-0 text-center text-red-600">{errorMessage}</p>
            ) : (
              <p></p>
            )}
            <div className="flex items-center py-4">
              <ButtonFullSecondary type={"submit"}>
                Opret bruger
              </ButtonFullSecondary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
