/* eslint-disable react/prop-types */
import star from "../assets/star.jpg";

export default function Card({ data }) {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div key={item.product_id} className="bg-white m-4 border border-gray-200 rounded-md">
          <div className="relative w-[200px] h-[317px] top-0 left-0 ">
            <img className="relative w-[102px] h-[150px] top-[27px] left-[49px] object-cover" alt="Image" src={item.image} />
            <div className="absolute w-[147px] top-[180px] left-[26px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
              {item.product_name}
            </div>
            <div className="absolute w-[78px] top-[228px] left-[61px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {item.price}
            </div>
            <div className="absolute w-[147px] top-[204px] left-[26px] opacity-60 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] text-center tracking-[0] leading-[normal]">
              {item.description}
            </div>
            <button className="absolute w-[115px] h-[45px] top-[259px] left-[40px] all-[unset] box bg-[#d4793a] rounded-[4px] hover:bg-[#ecbc9a]  text-black font-bold ">
              Læg i kurv
            </button>
            <img className="absolute w-[19px] h-[18px] top-[7px] left-[158px]" alt="Star" src={star} />
          </div>
        </div>
      ))}
    </div>
  );
}
