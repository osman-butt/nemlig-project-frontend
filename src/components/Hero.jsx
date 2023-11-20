import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-[#e8e3d8] rounded bg-opacity-70">
          <p className="text-[#d4793a] font-bold p-2">nemlig.com</p>
          <h1 className="text-4xl font-bold md:text-6xl sm:text-6xl md:py-6">
            Dagligvarer når det passer dig
          </h1>
          <div className="flex items-center justify-center">
            <p className="py-4 text-xl font-bold md:text-4xl sm:text-xl">
              Få leveret lige til døren!
            </p>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold"
          >
            Se udvalget
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
