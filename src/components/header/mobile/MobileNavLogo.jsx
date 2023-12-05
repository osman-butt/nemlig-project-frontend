import { Link } from "react-router-dom";

function MobileNavLogo({ handleNav }) {
  return (
    <h1 className="mx-auto px-4 pt-8 w-full text-3xl font-bold text-[#d4793a] lowercase">
      <Link to="/" onClick={handleNav}>
        nemlig.com
      </Link>
    </h1>
  );
}

export default MobileNavLogo;
