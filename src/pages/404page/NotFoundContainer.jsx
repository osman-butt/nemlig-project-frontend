import { useNavigate } from "react-router-dom";

export default function NotFoundContainer() {
  const navigate = useNavigate();
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-[#e8e3d8] rounded py-4">
          <p className="text-[#d4793a] font-bold p-2">nemlig.com</p>
          <h1 className="text-4xl font-bold md:text-4xl sm:text-6xl md:py-6">
            404 - Siden kunne ikke findes
          </h1>
          <div className="flex items-center justify-center">
            <p className="py-4 text-xl font-bold md:text-2xl sm:text-xl">
              Vi kunne desværre ikke finde det du ledte efter.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="py-4 text-xl font-bold">
              Se vores udvalg af{" "}
              <span
                onClick={() => navigate("/shop")}
                className="text-[#d4793a] hover:text-[#4d3422] hover:cursor-pointer w-[200px] rounded-md my-6 mx-auto py-3 font-bold"
              >
                dagligvarer
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
