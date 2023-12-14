import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavItem from "./MobileNavItem";
import MobileNavBasket from "./MobileNavBasket";
import MobileNavLogo from "./MobileNavLogo";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout";

function MobileNav({ handleNav, nav }) {
  const location = useLocation();
  const logout = useLogout();
  const { auth } = useAuth();

  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    handleNav();
    navigate("/login");
  };
  return (
    <div className="relative z-50">
      <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-[#e8e3d8] ease-in-out duration-500 md:hidden"
            : "fixed w-[60%] top-0 h-full left-[-100%] ease-in-out duration-1000 md:hidden"
        }
      >
        <MobileNavLogo handleNav={handleNav} />
        <ul className="p-4 uppercase ">
          {location.pathname === "/" ? (
            <>
              <MobileNavItem handleNav={handleNav} path="/shop">
                Dagligvarer
              </MobileNavItem>
              <MobileNavItem handleNav={handleNav} path="/about">
                Om os
              </MobileNavItem>
            </>
          ) : (
            <>
              {!auth?.user_roles?.includes("admin") && (
                <MobileNavItem handleNav={handleNav} path="/shop">
                  Dagligvarer
                </MobileNavItem>
              )}

              {auth?.user_roles?.includes("admin") && (
                <>
                  <MobileNavItem handleNav={handleNav} path="/admin">
                    Admin
                  </MobileNavItem>
                </>
              )}
              {auth?.user_roles?.includes("customer") && (
                <MobileNavItem handleNav={handleNav} path="/favorites">
                  Favoritter
                </MobileNavItem>
              )}
              {auth?.accessToken && (
                <button
                  className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer w-full text-left"
                  onClick={signOut}
                >
                  LOG UD
                </button>
              )}
              {!auth?.accessToken && (
                <>
                  <MobileNavItem handleNav={handleNav} path="/login">
                    Log ind
                  </MobileNavItem>
                  <MobileNavItem handleNav={handleNav} path="/createaccount">
                    Opret bruger
                  </MobileNavItem>
                </>
              )}
              {!auth?.user_roles?.includes("admin") && (
                <div className="h-10 align-top">
                  <MobileNavBasket handleNav={handleNav} />
                </div>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
