import { Link } from "react-router-dom";

function MobileNavItem({ handleNav, children, path }) {
  return (
    <li className="p-4 border-b border-[#d4793a] font-bold hover:text-[#d4793a] hover:cursor-pointer">
      <Link onClick={handleNav} to={path}>
        {children}
      </Link>
    </li>
  );
}

export default MobileNavItem;
