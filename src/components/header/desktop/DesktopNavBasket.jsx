import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

function DesktopNavBasket() {
  const { cart } = useCart();

  return (
    <Link
      className=" pb-0 hover:text-[#d4793a] hover:cursor-pointer w-32 flex flex-col items-center"
      to="/basket"
    >
      {<AiOutlineShoppingCart size={22} />}

      <p>
        {cart &&
          cart
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
        {cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0}
      </p>
    </Link>
  );
}

export default DesktopNavBasket;
