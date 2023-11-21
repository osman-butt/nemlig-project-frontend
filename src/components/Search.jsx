export default function Search() {
  return (
    <div className="lg:mt-4 sm:mt-0 flex flex-row justify-center">
      <input
        type="text"
        placeholder="Søg efter varer..."
        className="w-full lg:w-[535px] md:w-[400px] h-[53px] bg-white rounded-[6px] font-normal text-black text-[20px] lg:text-[20px]  [font-family:'Roboto-Regular',Helvetica] pl-[12px] lg:mb-0 lg:mr-2"
      />
      <button className="lg:w-[113px] h-[53px] bg-[#d4793a] rounded-[4px] font-normal text-black text-[15px] lg:text-[20px] [font-family:'Roboto-Regular',Helvetica] lg:mb-0 lg:mr-12 lg:ml-2 hover:bg-[#ecbc9a]">
        Søg
      </button>
      <button className="lg:w-[113px] h-[53px] bg-white rounded-[4px] font-normal text-black text-[15px] lg:text-[20px]  [font-family:'Roboto-Regular',Helvetica] lg:mb-0 lg:mr-6 lg:ml-20 hover:bg-[#ecbc9a]">
        Sortér
      </button>
      <button className="lg:w-[113px] h-[53px] bg-white rounded-[4px] font-normal text-black text-[15px] lg:text-[20px]  [font-family:'Roboto-Regular',Helvetica] lg:mb-0 lg:mr-4 hover:bg-[#ecbc9a]">
        Kategori
      </button>
    </div>
  );
}
