import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function NavLogo() {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user_roles?.includes("admin") ? (
        <p className="text-3xl font-bold text-[#d4793a] lowercase">
          nemlig.com
        </p>
      ) : (
        <Link className="text-3xl font-bold text-[#d4793a] lowercase" to="/">
          nemlig.com
        </Link>
      )}
    </>
  );
}

export default NavLogo;
