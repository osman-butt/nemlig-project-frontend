export default function Search() {
  return (
    <div className="lg:mt-4 md:mt-4 flex flex-row lg:justify-center md:justify-around sm:justify-around">
      <input
        type="text"
        placeholder="Søg efter varer..."
        className="w-full lg:w-[535px] h-[53px] bg-white rounded-[6px] font-normal text-black text-[20px] lg:text-[20px]  [font-family:'Roboto-Regular',Helvetica] pl-[12px] mb-0 lg:mr-2"
      />
      <div className="hidden md:flex">
        <button className="lg:w-[113px] md:w-[100px] h-[53px] bg-[#d4793a] rounded-[4px] font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px] [font-family:'Roboto-Regular',Helvetica]  mr-12 ml-2 hover:bg-[#ecbc9a]">
          Søg
        </button>
        <button className="lg:w-[113px] md:w-[100px] h-[53px] bg-white rounded-[4px] font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px]  [font-family:'Roboto-Regular',Helvetica] mb-0 mr-6 ml-20 hover:bg-[#ecbc9a]">
          Sortér
        </button>
        <button className="lg:w-[113px] md:w-[100px] h-[53px] bg-white rounded-[4px] font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px]  [font-family:'Roboto-Regular',Helvetica] mb-0 mr-4 hover:bg-[#ecbc9a]">
          Kategori
        </button>
      </div>
    </div>
  );
}
