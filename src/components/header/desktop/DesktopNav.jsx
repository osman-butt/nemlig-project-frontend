import { useLocation } from "react-router-dom";
import DesktopNavBasket from "./DesktopNavBasket";
import DesktopNavItem from "./DesktopNavItem";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

function DesktopNav({ basket, auth }) {
  const location = useLocation();
  const { setAuth } = useAuth();

  async function handleLogout() {
    setAuth();
    // Make a request to your server's logout endpoint
    await axios.get("http://localhost:3000/api/v1/logout", {
      withCredentials: true,
    });
  }

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
                  <button onClick={handleLogout}>LOG UD</button>
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
              <DesktopNavBasket basket={basket} />
            </div>
          </>
        )}
      </ul>
    </>
  );
}

export default DesktopNav;
