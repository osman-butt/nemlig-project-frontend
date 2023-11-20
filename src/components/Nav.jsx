import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [nav, setNav] = useState(true);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black uppercase font-medium">

        <Link className="text-3xl font-bold text-[#d4793a] lowercase" to="/">nemlig.com</Link>

        <ul className="hidden md:flex md:items-center">

          <Link className="p-4 hover:text-[#d4793a] hover:cursor-pointer" to="/favorites">Favoritter</Link>

          <Link className="p-4 hover:text-[#d4793a] hover:cursor-pointer" to="/login">Log ind</Link>

          <Link className="p-4 hover:text-[#d4793a] hover:cursor-pointer "to="/createaccount">Opret bruger</Link>

          <Link className="p-4 hover:text-[#d4793a] hover:cursor-pointer"to="/basket">{<AiOutlineShoppingCart size={30}/>}
          <p>0kr</p></Link>

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
            <Link to="/">nemlig.com</Link>
          </h1>
          <ul className="p-4 uppercase ">
            <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
              <Link to="/favorites">Favoritter</Link>
            </li>
            <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
              <Link to="/login">Log ind</Link>
            </li>
            <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
              <Link to="/createaccount">Opret bruger</Link>
            </li>
            <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
              <Link to="/basket">{<AiOutlineShoppingCart size={30}/>}<p>0kr</p></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
