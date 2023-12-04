import { useNavigate } from "react-router-dom";

export default function NotFoundContainer() {
  const navigate = useNavigate();
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-[#e8e3d8] rounded pt-4">
          <h1 className="text-4xl font-bold md:text-4xl sm:text-6xl md:py-6">
            404 - Siden kunne ikke findes
          </h1>
          <div className="flex items-center justify-center">
            <p className="py-4 text-xl font-bold md:text-2xl sm:text-xl">
              Gå tilbage til butikken?
            </p>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold"
          >
            Til butik
          </button>
        </div>
      </div>
    </div>
  );
}
