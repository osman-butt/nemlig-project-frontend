import { useState } from "react";
import MobileNav from "./header/mobile/MobileNav";
import DesktopNav from "./header/desktop/DesktopNav";
import NavLogo from "./header/NavLogo";
import useAuth from "../hooks/useAuth";

export default function Header({ basket }) {
  const [nav, setNav] = useState(true);
  const { auth } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black uppercase font-medium">
      <NavLogo />
      <DesktopNav basket={basket} auth={auth} />
      <MobileNav handleNav={handleNav} basket={basket} nav={nav} />
    </div>
  );
}
