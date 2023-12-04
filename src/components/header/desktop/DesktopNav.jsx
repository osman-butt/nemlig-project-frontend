import { useLocation } from "react-router-dom";
import DesktopNavBasket from "./DesktopNavBasket";
import DesktopNavItem from "./DesktopNavItem";

function DesktopNav({ basket }) {
  const location = useLocation();
  return (
    <>
      <ul className="hidden md:flex md:items-center">
        {location.pathname === "/" ? (
          <>
            <DesktopNavItem path="/shop">Dagligvarer</DesktopNavItem>
            <DesktopNavItem path="/about">Om os</DesktopNavItem>
          </>
        ) : (
          <>
            <DesktopNavItem path="/shop">Dagligvarer</DesktopNavItem>
            <DesktopNavItem path="/favorites">Favoritter</DesktopNavItem>
            <DesktopNavItem path="/login">Log ind</DesktopNavItem>
            <DesktopNavItem path="/createaccount">Opret bruger</DesktopNavItem>
            <DesktopNavBasket basket={basket} />
          </>
        )}
      </ul>
    </>
  );
}

export default DesktopNav;
