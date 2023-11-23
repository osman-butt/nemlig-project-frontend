import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function Createaccountform() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg flex flex-col m-auto justify-center text-black lg:mt-10 p-4">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="font-medium text-2xl py-3 md:text-2xl text-center">Opret bruger</h2>

        <form className="w-full grid justify-around gap-y-2">
          <InputField label="Navn:" type="text" placeholder="Skriv dit fulde navn her" />
          <InputField label="Adresse:" type="text" placeholder="Skriv din adresse her" />
          <InputField label="Postnummer:" type="text" placeholder="Postnummer" />
          <InputField label="By:" type="text" placeholder="By" />
          <InputField label="E-mail:" type="email" placeholder="E-mail" />
          <InputField label="Password:" type="password" placeholder="Password" />
        </form>

        <div className="flex items-center justify-between px-3 m-6">
          <button onClick={() => navigate("/createaccount")} className="bg-[#58644C] hover:bg-[#ecbc9a] w-full rounded-md py-3 font-medium">
            Opret bruger
          </button>
        </div>
      </div>
    </div>
  );
}
