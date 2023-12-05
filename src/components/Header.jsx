import { useState } from "react";
import MobileNav from "./header/mobile/MobileNav";
import DesktopNav from "./header/desktop/DesktopNav";
import NavLogo from "./header/NavLogo";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router";

export default function Header({ basket }) {
  const [nav, setNav] = useState(true);
  const { auth } = useAuth();
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4">
        {auth && location.pathname !== "/" ? (
          <p className="text-right h-8 text-[14px] ">
            <span className="hidden md:block">
              Bruger: <span className="font-bold">{auth.user_email}</span>
            </span>
          </p>
        ) : (
          <p className="text-right h-8 text-[14px]"></p>
        )}
      </div>
      <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4 pb-4 text-black uppercase font-medium">
        <NavLogo />
        <DesktopNav basket={basket} auth={auth} />
        <MobileNav handleNav={handleNav} basket={basket} nav={nav} />
      </div>
    </>
  );
}
