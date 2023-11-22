import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-[#58644c] w-full font-general">
        <div className="max-w-[1240px] flex flex-wrap justify-center md:justify-start m-auto z-50 py-2 align-middle">
          <NavLink
            to="/frost"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Frost
          </NavLink>
          <NavLink
            to="/mejeri"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Mejeri
          </NavLink>
          <NavLink
            to="/kød"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Kød
          </NavLink>
          <NavLink
            to="/brød"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Brød
          </NavLink>
          <NavLink
            to="/kolonial"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Kolonial
          </NavLink>
          <NavLink
            to="/drikkevarer"
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Drikkevarer
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
