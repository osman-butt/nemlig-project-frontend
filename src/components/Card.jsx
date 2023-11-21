/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";

export default function Card({ data }) {
  console.log(data[0]);

  function addToBasket() {
    console.log("Added to basket");
  }
  if (!data || !data[0]) {
    return null;
  }
  return (
    <div className="flex flex-wrap justify-center">
      {data[0].map((item) => (
        <div key={item.product_id} className="bg-white m-4 border border-gray-200 rounded">
          <div>
          <div className="relative w-[200px] h-[317px]">
            <div>
              <img className="w-[19px] h-[18px] ml-auto mt-2 mr-4" alt="Star" src={star} />
            </div>
            <div className="w-full h-[150px] m-auto mt-5">
              <img className="w-[80px] h-[140px] object-cover m-auto" alt="Image" src={item.images[0].image_link} />
            </div>
            <div className="relative w-full m-auto font-medium text-black text-[16px] text-center">{item.product_name}</div>
            <div className="w-full m-auto font-normal text-[12px] opacity-80 text-center">{item.product_underline}</div>
            <div className="w-full m-auto font-bold text-black text-[18px] text-center">{item.prices[0].price} kr.</div>
            <button
              onClick={addToBasket}
              className="absolute w-[115px] h-[45px] top-[259px] left-[40px] bg-[#d4793a] rounded-[4px] hover:bg-[#ecbc9a]  font-normal text-black text-[20px] text-center"
            >
              Læg i kurv
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
