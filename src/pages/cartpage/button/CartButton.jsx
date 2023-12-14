import { useNavigate } from "react-router";
import ButtonFullPrimary from "../../../components/buttons/ButtonFullPrimary.jsx";
import useAuth from "../../../hooks/useAuth.js";

function CartButton({ cart }) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {cart.length > 0 &&
        (auth?.accessToken ? (
          <ButtonFullPrimary
            onClick={() => navigate("/checkout")}
            className={`md:w-[300px] ${
              cart.length === 0 && "disabled cursor-not-allowed"
            }`}
          >
            Gå til checkud
          </ButtonFullPrimary>
        ) : (
          <ButtonFullPrimary
            onClick={() => navigate("/login")}
            className={"md:w-[300px]"}
          >
            Login
          </ButtonFullPrimary>
        ))}
    </>
  );
}

export default CartButton;
