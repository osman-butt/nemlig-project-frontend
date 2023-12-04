import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function Createaccountform() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center w-full max-w-lg py-8 m-auto text-black">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="py-3 text-2xl font-medium text-center md:text-2xl">
          Opret bruger
        </h2>

        <form className="grid justify-around w-full gap-y-2">
          <InputField
            label="Navn:"
            type="text"
            placeholder="Skriv dit fulde navn her"
          />
          <InputField
            label="Adresse:"
            type="text"
            placeholder="Skriv din adresse her"
          />
          <InputField
            label="Postnummer:"
            type="text"
            placeholder="Postnummer"
          />
          <InputField label="By:" type="text" placeholder="By" />
          <InputField label="E-mail:" type="email" placeholder="E-mail" />
          <InputField
            label="Password:"
            type="password"
            placeholder="Password"
          />
        </form>

        <div className="flex items-center justify-between px-3 m-6">
          <button
            onClick={() => navigate("/createaccount")}
            className="bg-[#58644C] hover:bg-[#ecbc9a] w-full rounded-md py-3 font-medium"
          >
            Opret bruger
          </button>
        </div>
      </div>
    </div>
  );
}
