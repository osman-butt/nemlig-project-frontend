/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";

export default function Card({ data }) {
  function addToBasket() {
    console.log("Added to basket");
  }
  // if (!data || !data[0]) {
  //   return null;
  // }
  return (
    <article className="bg-white rounded flex flex-col items-center gap-2 p-4 w-[200px] justify-self-center">
      <img className="translate-x-[74px]" alt="Star" src={star} />
      <img
        className="object-contain w-[150px] h-[150px]"
        src={data.images[0].image_link}
        alt="productImage"
      />
      <p className="font-medium text-center">{data.product_name}</p>
      <p className="font-light text-[14px]">{data.product_underline}</p>
      <p className="font-bold text-[18px] mt-auto">
        {data.prices[0].price.toFixed(2)} kr.
      </p>
      <button
        onClick={() => addToBasket()}
        className="bg-[#d4793a] p-2 rounded"
      >
        Læg i kurv
      </button>
    </article>
  );
}
