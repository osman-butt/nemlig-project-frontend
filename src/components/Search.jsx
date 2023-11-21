export default function Search() {
  return (
    <div className="relative top-0 left-0 mt-4 ml-40 flex justify-center">
      <input
        type="text"
        placeholder="Søg efter varer..."
        className="w-[535px] h-[53px] bg-white rounded-[6px] font-normal text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap pl-[12px]"
      />
      <div>
        <button className="w-[113px] h-[53px] top-0 left-px bg-[#d4793a] rounded-[4px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] ml-8 mr-20  hover:bg-[#ecbc9a]">
          Søg
        </button>
        <button className="w-[113px] h-[53px] top-0 left-px bg-white rounded-[4px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] ml-10  hover:bg-[#ecbc9a]">
          Sortér
        </button>
        <button className="w-[113px] h-[53px] top-0 left-px bg-white rounded-[4px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] ml-8  hover:bg-[#ecbc9a]">
          Kategori
        </button>
      </div>
    </div>
  );
}
