/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";
import filledstar from "../assets/filledstar.jpg";
import useCart from "../hooks/useCart";
import { useState } from "react";
import Snackbar from "./Snackbar";

export default function Card({ data, addToFavorites, removeFromFavorites, auth, alwaysShowStar }) {
  const { incrementCartItem } = useCart();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const showSnackybar = () => {
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000); // Skjul snackbar efter 3 sekunder (justér efter behov)
  };

  return (
    <article className="bg-white rounded flex flex-col items-center gap-2 p-4 w-[200px] h-[400px] justify-self-center">
      {(alwaysShowStar || (auth && auth.user_email)) && (
        <img
          className="translate-x-[74px]"
          alt="Star"
          src={data.favorite_id ? filledstar : star}
          onClick={() => (data.favorite_id ? removeFromFavorites(data) : addToFavorites(data))}
        />
      )}
      <img
        className="object-contain w-[150px] h-[150px]"
        src={data.images && data.images[0] ? data.images[0].image_url : ""}
        alt="productImage"
      />
      <p className="font-medium text-center mt-auto">{data.product_name}</p>
      <p className="font-light text-[14px] mt-auto">{data.product_underline}</p>
      <p className="font-bold text-[18px] mt-auto">
        {data.prices && data.prices[0] ? data.prices[0].price.toFixed(2) : "N/A"} kr.
      </p>
      <button
        onClick={() => {
          incrementCartItem(data);
          showSnackybar();
        }}
        className="bg-[#d4793a] p-2 rounded"
      >
        Læg i kurv
      </button>
      {showSnackbar && <Snackbar showSnackbar={showSnackbar} />}
    </article>
  );
}
