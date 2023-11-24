import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ basket }) {
  const [nav, setNav] = useState(true);

  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black uppercase font-medium">
      <Link className="text-3xl font-bold text-[#d4793a] lowercase" to="/">
        nemlig.com
      </Link>
      <ul className="hidden md:flex md:items-center">
        {location.pathname === "/" ? (
          <>
            <Link
              className="p-4 hover:text-[#d4793a] hover:cursor-pointer"
              to="/shop"
            >
              Dagligvarer
            </Link>
            <Link
              className="p-4 hover:text-[#d4793a] hover:cursor-pointer whitespace-nowrap"
              to="/about"
            >
              Om os
            </Link>
          </>
        ) : (
          <>
            <Link
              className="p-4 hover:text-[#d4793a] hover:cursor-pointer"
              to="/favorites"
            >
              Favoritter
            </Link>

            <Link
              className="p-4 hover:text-[#d4793a] hover:cursor-pointer"
              to="/login"
            >
              Log ind
            </Link>

            <Link
              className="p-4 hover:text-[#d4793a] hover:cursor-pointer "
              to="/createaccount"
            >
              Opret bruger
            </Link>

            <Link
              className="p-4 pb-0 hover:text-[#d4793a] hover:cursor-pointer w-32 flex flex-col items-center"
              to="/basket"
            >
              {<AiOutlineShoppingCart size={30} />}

              <p>
                {basket &&
                  basket
                    .reduce(
                      (acc, item) =>
                        (item.prices.length > 1
                          ? item.prices[1].price
                          : item.prices[0].price) *
                          item.quantity +
                        acc,
                      0
                    )
                    .toFixed(2)}{" "}
                kr
              </p>
              <p className="w-[17px] h-[17px] px-[5px] pb-[px] bg-[#d4793a] translate-y-[-60px] translate-x-[20px] text-xs rounded-full font-bold text-white flex justify-center">
                {basket
                  ? basket.reduce((acc, item) => item.quantity + acc, 0)
                  : 0}
              </p>
            </Link>
          </>
        )}
      </ul>
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
        <h1 className="mx-auto px-4 pt-8 w-full text-3xl font-bold text-[#d4793a] lowercase">
          <Link to="/" onClick={handleNav}>
            nemlig.com
          </Link>
        </h1>
        <ul className="p-4 uppercase ">
          {location.pathname === "/" ? (
            <>
              <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/shop">
                  Dagligvarer
                </Link>
              </li>
              <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/about">
                  Om os
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/favorites">
                  Favoritter
                </Link>
              </li>
              <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/login">
                  Log ind
                </Link>
              </li>
              <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/createaccount">
                  Opret bruger
                </Link>
              </li>
              <li className="p-4 pb-0 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
                <Link onClick={handleNav} to="/basket">
                  {<AiOutlineShoppingCart size={30} />}
                  <p>
                    {basket &&
                      basket
                        .reduce(
                          (acc, item) =>
                            (item.prices.length > 1
                              ? item.prices[1].price
                              : item.prices[0].price) *
                              item.quantity +
                            acc,
                          0
                        )
                        .toFixed(2)}{" "}
                    kr
                  </p>
                  <p className="w-[17px] h-[17px] px-[5px] pb-[px] bg-[#d4793a] translate-y-[-60px] translate-x-[20px] text-xs rounded-full font-bold text-white flex justify-center">
                    {basket
                      ? basket.reduce((acc, item) => item.quantity + acc, 0)
                      : 0}
                  </p>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
