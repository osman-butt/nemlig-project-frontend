/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";
import filledstar from "../assets/filledstar.jpg";
import useCart from "../hooks/useCart";
import { useState } from "react";
// import Snackbar from "./Snackbar";

export default function Card({
  data,
  addToFavorites,
  removeFromFavorites,
  auth,
  alwaysShowStar,
}) {
  const { incrementCartItem } = useCart();
  // const [showSnackbar, setShowSnackbar] = useState(false);
  const [showBar, setShowBar] = useState(false);

  // const showSnackybar = () => {
  //   setShowSnackbar(true);

  //   setTimeout(() => {
  //     setShowSnackbar(false);
  //   }, 3000); // Skjul snackbar efter 3 sekunder (justér efter behov)
  // };

  function toggleShowBar() {
    setShowBar(true);
    setTimeout(() => {
      setShowBar(false);
    }, 3000);
  }

  return (
    <article className="bg-white rounded-xl w-[200px] h-[350px] relative mx-auto pt-4">
      {showBar && (
        <section className="absolute z-50 w-full h-[30px] bg-[#58644c] text-white top-0 left-0 mx-auto rounded-t-xl flex flex-row justify-center align-middle">
          <p className="mx-auto">Tilføjet til kurv</p>
        </section>
      )}
      <div className="flex flex-col items-center w-full h-full gap-2 justify-self-center">
        {(alwaysShowStar || auth?.user_email) && (
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
        )}
        <div className="relative">
          <img
            className="pt-2 object-contain w-[130px] h-[130px]"
            src={data.images && data.images[0] ? data.images[0].image_url : ""}
            alt="productImage"
          />
          <div className="absolute top-10 left-0 z-10 flex flex-row justify-center w-full h-10 text-black align-middle bg-[#d4793a] bg-opacity-70 rounded-2xl">
            <p className="self-center">Prismatch</p>
          </div>
        </div>
        <div>
          <p className="mt-auto font-medium text-center">{data.product_name}</p>
          <p className="font-light text-[14px] mt-auto">
            {data.product_underline}
          </p>
        </div>
        <p className=" text-[18px] mt-auto line-through text-red-700">
          {data.prices && data.prices[0]
            ? data.prices[0].price.toFixed(2)
            : "N/A"}{" "}
          kr.
        </p>
        <p className="font-bold text-[18px] mt-auto">
          {data.prices && data.prices[0]
            ? data.prices[0].price.toFixed(2)
            : "N/A"}{" "}
          kr.
        </p>
        <button
          onClick={() => {
            incrementCartItem(data);
            // showSnackybar();
            toggleShowBar();
          }}
          className="bg-[#d4793a] rounded-b-xl w-full py-2 text-white"
        >
          Læg i kurv
        </button>
        {/* {showSnackbar && <Snackbar showSnackbar={showSnackbar} />} */}
      </div>
    </article>
  );
}
