import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import useCart from "../../../hooks/useCart.js";

function ToggleQuantity({ product }) {
  const { incrementCartItem, decrementCartItem } = useCart();
  return (
    <>
      <CiCircleMinus
        className="hover:cursor-pointer"
        size={30}
        onClick={() => decrementCartItem(product)}
      />
      <p className="mx-1 w-[30px] py-1 px-1 bg-[#58644c] rounded-full font-bold text-white">
        {product.quantity}
      </p>
      <CiCirclePlus
        className="hover:cursor-pointer"
        size={30}
        onClick={() => incrementCartItem(product)}
      />
    </>
  );
}

export default ToggleQuantity;
