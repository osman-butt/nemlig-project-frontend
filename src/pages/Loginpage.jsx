import image from "../assets/hero.jpg";
import Nav from "../components/Nav";

export default function Loginpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}>
      <Nav />

      <div className="text-black">
      <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-[#e8e3d8] rounded">
          <h2 className="font-medium md:text-2xl sm:text-s md:py-6">
            Log ind
          </h2>

          <form className="w-full">
            <div>
              <label className="text-[#000000] font-bold p-4 pr-7">Email:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="py-3">
              <label className="text-[#000000] font-bold p-2">Password:</label>
              <input
                className="border-2 border-[#d4793a] rounded-md w-[300px] h-[50px] px-4"
                type="password"
                placeholder="Password"
              />
            </div>
          </form>
      
          <div>
          <button className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[400px] rounded-md my-4 mx-auto py-3 text-black font-medium">
            Log ind
          </button>
          </div>
          <button className="bg-[#58644C] hover:bg-[#ecbc9a] w-[400px] rounded-md mx-auto py-3 text-black font-medium">
            Opret konto
          </button>

          <div className="flex items-center justify-center">
            <p className="py-4 font-medium">
              Glemt password?
            </p>
          </div>
        </div>
      </div>
    </div>

      </div>
    
    
  );
}
