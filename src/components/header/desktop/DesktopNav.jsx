import { useLocation } from "react-router-dom";
import ShopNavItems from "./ShopNavItems";
import LandingPageNavItems from "./LandingPageNavItems";

function DesktopNav() {
  const location = useLocation();

  return (
    <>
      <ul className="hidden md:flex md:items-center">
        {location.pathname === "/" ? (
          <>
            <LandingPageNavItems />
          </>
        ) : (
          <ShopNavItems />
        )}
      </ul>
    </>
  );
}

export default DesktopNav;
