import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-104px] w-full h-screen mx-auto text-center flex flex-col justify-center">
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
          <ButtonPrimary onClick={() => navigate("/shop")}>
            Se udvalget
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
