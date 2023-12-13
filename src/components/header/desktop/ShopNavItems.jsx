import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout";
import DesktopNavBasket from "./DesktopNavBasket";
import DesktopNavItem from "./DesktopNavItem";

function ShopNavItems() {
  const logout = useLogout();
  const { auth } = useAuth();

  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {!auth?.user_roles?.includes("admin") && (
        <DesktopNavItem path="/shop">Dagligvarer</DesktopNavItem>
      )}

      {auth?.user_roles?.includes("admin") && (
        <>
          <DesktopNavItem path="/admin">Admin</DesktopNavItem>
        </>
      )}
      {auth?.user_roles?.includes("customer") && (
        <DesktopNavItem path="/favorites">Favoritter</DesktopNavItem>
      )}
      {auth?.accessToken && (
        <button
          className="p-4 hover:text-[#d4793a] hover:cursor-pointer"
          onClick={signOut}
        >
          LOG UD
        </button>
      )}
      {!auth?.accessToken && (
        <>
          <DesktopNavItem path="/login">Log ind</DesktopNavItem>
          <DesktopNavItem path="/createaccount">Opret bruger</DesktopNavItem>
        </>
      )}
      {!auth?.user_roles?.includes("admin") && (
        <div className="h-10 align-top">
          <DesktopNavBasket />
        </div>
      )}
    </>
  );
}

export default ShopNavItems;
