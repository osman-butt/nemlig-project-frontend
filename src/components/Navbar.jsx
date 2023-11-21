import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="relative w-[1932px] h-[54px] top-0 left-0 bg-[#58644c]">
        <NavLink
          to="/frost"
          className="w-[49px] left-[354px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Frost
        </NavLink>
        <NavLink
          to="/mejeri"
          className="w-[56px] left-[451px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Mejeri
        </NavLink>
        <NavLink
          to="/kød"
          className="w-[49px] left-[555px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Kød
        </NavLink>
        <NavLink
          to="/brød"
          className="w-[49px] left-[652px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Brød
        </NavLink>
        <NavLink
          to="/kolonial"
          className="w-[77px] left-[749px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Kolonial
        </NavLink>
        <NavLink
          to="/drikkevarer"
          className="w-[94px] left-[874px] absolute h-[31px] top-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] hover:text-[#d4793a] hover:cursor-pointer"
        >
          Drikkevarer
        </NavLink>
      </div>
    </nav>
  );
}
