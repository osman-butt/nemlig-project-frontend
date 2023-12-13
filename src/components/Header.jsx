import { useState } from "react";
import MobileNav from "./header/mobile/MobileNav";
import DesktopNav from "./header/desktop/DesktopNav";
import NavLogo from "./header/NavLogo";
import LoggedInUser from "./header/LoggedInUser";

export default function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-[16px] font-sans">
      <div className="max-w-[1240px] mx-auto px-4">
        <LoggedInUser />
      </div>
      <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4 pb-4 text-black uppercase font-medium">
        <NavLogo />
        <DesktopNav />
        <MobileNav handleNav={handleNav} nav={nav} />
      </div>
    </div>
  );
}
