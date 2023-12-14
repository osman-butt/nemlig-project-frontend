/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";
import filledstar from "../assets/filledstar.jpg";
import useCart from "../hooks/useCart";
import { useState } from "react";
import Snackbar from "./Snackbar";

export default function Card({
  data,
  addToFavorites,
  removeFromFavorites,
  auth,
  alwaysShowStar,
}) {
  const { incrementCartItem } = useCart();
  const [showSnackbar, setShowSnackbar] = useState(false);

  function showSnackybar() {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 800);
  }

  // Find the lowest price / only if prices.length > 0
  const lowestPrice =
    data.prices.length > 0
      ? data.prices.reduce((prev, curr) =>
          prev.price < curr.price ? prev : curr
        )
      : null;

  // Find highest price / only if prices.length > 0
  const highestPrice =
    data.prices.length > 0
      ? data.prices.reduce((prev, curr) =>
          prev.price > curr.price ? prev : curr
        )
      : null;

  return (
    <article className="bg-white rounded-xl w-[200px] min-h-[330px] relative mx-auto pt-4">
      {showSnackbar && <Snackbar />}
      <div className="flex flex-col items-center w-full h-full gap-2 justify-self-center">
        {alwaysShowStar || (auth && auth.user_email) ? (
          <img
            className="translate-x-[74px]"
            alt="Star"
            src={data.favorite_id ? filledstar : star}
            onClick={() =>
              data.favorite_id
                ? removeFromFavorites(data)
                : addToFavorites(data)
            }
          />
        ) : (
          <div className="h-6"></div>
        )}
        <div className="relative">
          <img
            className="pt-2 object-contain w-[100px] h-[100px]"
            src={data.images && data.images[0] ? data.images[0].image_url : ""}
            alt="productImage"
          />
          {lowestPrice?.is_pricematch && (
            <div className="absolute top-10 left-0 z-10 flex flex-row justify-center w-full h-10 text-white align-middle bg-[#d4793a] bg-opacity-70 rounded-2xl">
              <p className="self-center">Prismatch</p>
            </div>
          )}
        </div>
        <div>
          <p className="mt-auto font-medium text-center">{data.product_name}</p>
          <p className="font-light text-[12px] mt-auto px-2 text-center">
            {data.product_underline.length > 40
              ? data.product_underline.substring(0, 40) + "..."
              : data.product_underline}
          </p>
        </div>
        {lowestPrice.price !== highestPrice.price ? (
          <div className="flex flex-col justify-end h-full">
            <p className="text-[18px] line-through text-red-700">
              {highestPrice.price.toFixed(2)} kr.
            </p>
            <p className="font-bold text-[18px] gap-4 align-middle">
              {lowestPrice.price.toFixed(2)} kr.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-end h-full gap-4">
            <p className="font-bold text-[18px]  align-middle">
              {lowestPrice && lowestPrice.price.toFixed(2)} kr.
            </p>
          </div>
        )}
        <button
          onClick={() => {
            incrementCartItem(data);
            showSnackybar();
          }}
          className="bg-[#d4793a] rounded-b-xl w-full py-3 text-white"
        >
          Læg i kurv
        </button>
        {showSnackbar && <Snackbar showSnackbar={showSnackbar} />}
      </div>
    </article>
  );
}
