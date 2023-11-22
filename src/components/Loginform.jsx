import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function Loginform() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-black">
        <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="bg-[#e8e3d8] rounded">
            <h2 className="font-medium text-2xl py-3">Log ind</h2>

            <form className="w-full grid justify-around gap-y-2">
              <InputField label="Email:" type="email" placeholder="Email" />
              <InputField label="Password:" type="password" placeholder="Password" />
            </form>

            <div>
              <button className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[400px] rounded-md my-4 mx-auto py-3 text-black font-medium">Log ind</button>
            </div>
            <button
              onClick={() => navigate("/createaccount")}
              className="bg-[#58644C] hover:bg-[#ecbc9a] w-[400px] rounded-md mx-auto py-3 text-black font-medium"
            >
              Opret bruger
            </button>

            <div className="flex items-center justify-center">
              <p className="py-4 font-medium underline cursor-pointer">Glemt password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
