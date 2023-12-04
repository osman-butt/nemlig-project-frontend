import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavItem from "./MobileNavItem";
import MobileNavBasket from "./MobileNavBasket";
import MobileNavLogo from "./MobileNavLogo";

function MobileNav({ handleNav, basket, nav }) {
  return (
    <>
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
              <MobileNavItem handleNav={handleNav} path="/shop">
                Dagligvarer
              </MobileNavItem>
              <MobileNavItem handleNav={handleNav} path="/favorites">
                Favoritter
              </MobileNavItem>
              <MobileNavItem handleNav={handleNav} path="/login">
                Log ind
              </MobileNavItem>
              <MobileNavItem handleNav={handleNav} path="/createaccount">
                Opret bruger
              </MobileNavItem>
              <MobileNavBasket handleNav={handleNav} basket={basket} />
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
