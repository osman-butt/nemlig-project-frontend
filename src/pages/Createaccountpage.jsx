import image from "../assets/hero.jpg";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";


export default function Createaccountpage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}>
      <Nav />

      <div className="text-black">
      <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-[#e8e3d8] rounded">
          <h2 className="font-medium md:text-2xl sm:text-xl md:py-6">
            Opret bruger
          </h2>

          <form className="w-full">
            <div>
              <label className="text-[#000000] font-bold p-4 pr-5">Navn:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4"
                type="text"
                placeholder="Skriv dit fulde navn her"
              />
            </div>
            <div className="py-3">
              <label className="text-[#000000] font-bold p-2">Adresse:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4"
                type="text"
                placeholder="Skriv din adresse her"
              />
            </div>
            <div className="flex pl-[73px]">
              <label className="text-[#000000] font-bold p-2">Postnummer:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[100px] h-[50px] px-4"
                type="text"
                placeholder="Postnummer"
              />
                <label className="text-[#000000] font-bold p-2">By:</label>
                <input className="border-2 border-[#d4793a] rounded-md w-[162px] h-[50px] px-4" type="text" placeholder="By" />
            </div>
            <div className="py-3">
              <label className="text-[#000000] font-bold p-2">E-mail:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4 ml-3"
                type="email"
                placeholder="E-mail"
              />              
            </div>
            <div className="py-0.5 pr-3">
              <label className="text-[#000000] font-bold p-2">Password:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4"
                type="password"
                placeholder="Password"
              />              
            </div>
          </form>
            <div className="my-8">
          <button onClick={() => navigate("/createaccount")}className="bg-[#58644C] hover:bg-[#ecbc9a] w-[382px] rounded-md py-3 text-black font-medium">
            Opret bruger
          </button>
            </div>
        </div>
      </div>
    </div>

      </div>
    
    
  );
}