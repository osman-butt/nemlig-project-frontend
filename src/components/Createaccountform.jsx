import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function Createaccountform() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-black">
        <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="bg-[#e8e3d8] rounded">
            <h2 className="font-medium text-2xl py-3 md:text-2xl">Opret bruger</h2>

            <form className="w-full grid justify-around gap-y-2 px-10">
              <InputField label="Navn:" type="text" placeholder="Skriv dit fulde navn her" />
              <InputField label="Adresse:" type="text" placeholder="Skriv din adresse her" />
              <InputField label="Postnummer:" type="text" placeholder="Postnummer" />
              <InputField label="By:" type="text" placeholder="By" />
              <InputField label="E-mail:" type="email" placeholder="E-mail" />
              <InputField label="Password:" type="password" placeholder="Password" />
            </form>

            <div className="my-8">
              <button
                onClick={() => navigate("/createaccount")}
                className="bg-[#58644C] hover:bg-[#ecbc9a] w-[382px] rounded-md py-3 text-black font-medium"
              >
                Opret bruger
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
