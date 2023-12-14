import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function LoggedInUser() {
  const { auth } = useAuth();
  const location = useLocation();
  return (
    <>
      {auth?.accessToken && location.pathname !== "/" ? (
        <p className="text-right h-8 text-[14px] ">
          <span className="hidden md:block">
            Bruger:{" "}
            {auth?.user_roles.includes("admin") ? (
              <span className="font-bold">{auth.user_email}</span>
            ) : (
              <Link to="/profile">
                <span className="font-bold">{auth.user_email}</span>
              </Link>
            )}
          </span>
        </p>
      ) : (
        <p className="text-right h-8 text-[14px]"></p>
      )}
    </>
  );
}

export default LoggedInUser;
