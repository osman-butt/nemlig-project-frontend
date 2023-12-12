import { useLocation, useNavigate } from "react-router-dom";
import DesktopNavBasket from "./DesktopNavBasket";
import DesktopNavItem from "./DesktopNavItem";
import useLogout from "../../../hooks/useLogout";
import useAuth from "../../../hooks/useAuth";

function DesktopNav() {
  const location = useLocation();
  const logout = useLogout();
  const { auth } = useAuth();

  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

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
            {auth?.user_roles?.includes("admin") && (
              <>
                <DesktopNavItem path="/admin">Admin</DesktopNavItem>
              </>
            )}
            {auth?.accessToken && (
              <>
                <DesktopNavItem path="/favorites">Favoritter</DesktopNavItem>
                <DesktopNavItem path="/login">
                  <button onClick={signOut}>LOG UD</button>
                </DesktopNavItem>
              </>
            )}
            {!auth?.accessToken && (
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
