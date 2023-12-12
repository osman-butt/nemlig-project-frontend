import { useState } from "react";
import MobileNav from "./header/mobile/MobileNav";
import DesktopNav from "./header/desktop/DesktopNav";
import NavLogo from "./header/NavLogo";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(true);
  const { auth } = useAuth();
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4">
        {auth &&
        location.pathname !== "/" &&
        auth?.user_roles.includes("customer") ? (
          <p className="text-right h-8 text-[14px] ">
            <span className="hidden md:block">
              Bruger:{" "}
              <Link to="/profile">
                <span className="font-bold">{auth.user_email}</span>
              </Link>
            </span>
          </p>
        ) : (
          <p className="text-right h-8 text-[14px]"></p>
        )}
      </div>
      <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4 pb-4 text-black uppercase font-medium">
        <NavLogo />
        <DesktopNav />
        <MobileNav handleNav={handleNav} nav={nav} />
      </div>
    </>
  );
}
