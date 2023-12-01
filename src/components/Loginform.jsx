import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function Loginform() {
  const navigate = useNavigate();

  //<div className="flex flex-col items-center justify-center max-w-[1240px] text-black">
  return (
    <div className="w-full max-w-lg pt-8 m-auto px-4">
      <div className="bg-[#e8e3d8] rounded">
        <h2 className="py-3 text-2xl font-medium text-center">Log ind</h2>

        <form className="grid justify-around w-full gap-y-2">
          <InputField label="Email:" type="email" placeholder="Email" />
          <InputField label="Password:" type="password" placeholder="Password" />
        </form>

        <div className="flex items-center justify-between px-4">
          <button className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[400px] rounded-md my-4 mx-auto py-3 text-black font-medium">Log ind</button>
        </div>
        <div className="flex items-center justify-between px-4">
          <button
            onClick={() => navigate("/createaccount")}
            className="bg-[#58644C] hover:bg-[#ecbc9a] w-[400px] rounded-md mx-auto py-3 text-black font-medium"
          >
            Opret bruger
          </button>
        </div>
        <p className="py-4 font-medium text-center underline cursor-pointer">Glemt password?</p>
      </div>
    </div>
  );
}
