import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-[#58644c] flex flex-wrap justify-center lg:justify-start pl-4 lg:pl-60">
        <NavLink
          to="/frost"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Frost
        </NavLink>
        <NavLink
          to="/mejeri"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Mejeri
        </NavLink>
        <NavLink
          to="/kød"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Kød
        </NavLink>
        <NavLink
          to="/brød"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
        >
          Brød
        </NavLink>
        <NavLink
          to="/kolonial"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
        >
          Kolonial
        </NavLink>
        <NavLink
          to="/drikkevarer"
          className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg lg:px-6 lg:py-4 lg:text-xl [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
        >
          Drikkevarer
        </NavLink>
      </div>
    </nav>
  );
}
