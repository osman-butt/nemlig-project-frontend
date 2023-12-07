import { useLocation } from "react-router-dom";
import DesktopNavBasket from "./DesktopNavBasket";
import DesktopNavItem from "./DesktopNavItem";
import useLogout from "../../../hooks/useLogout";
import useAuth from "../../../hooks/useAuth";

function DesktopNav() {
  const location = useLocation();
  const logout = useLogout();
  const { auth } = useAuth();

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
            {auth && (
              <>
                <DesktopNavItem path="/favorites">Favoritter</DesktopNavItem>
                <DesktopNavItem path="/login">
                  <button onClick={logout}>LOG UD</button>
                </DesktopNavItem>
              </>
            )}
            {!auth && (
              <>
                <DesktopNavItem path="/login">Log ind</DesktopNavItem>
                <DesktopNavItem path="/createaccount">
                  Opret bruger
                </DesktopNavItem>
              </>
            )}
            <div className="h-10 align-top">
              <DesktopNavBasket />
            </div>
          </>
        )}
      </ul>
    </>
  );
}

export default DesktopNav;
