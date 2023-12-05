import { Link } from "react-router-dom";

function DesktopNavItem({ children, path }) {
  return (
    <Link className="p-4 hover:text-[#d4793a] hover:cursor-pointer" to={path}>
      {children}
    </Link>
  );
}

export default DesktopNavItem;
