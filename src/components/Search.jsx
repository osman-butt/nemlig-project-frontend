export default function Search() {
  return (
    <div className="max-w-[1240px] flex flex-row justify-center m-auto mt-4 font-general align-middle gap-10">
      <form className="flex flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="Søg efter varer..."
          className="lg:w-[535px] h-[53px] bg-white rounded font-normal text-black text-[20px]"
        />
        <button className="h-[53px] px-4 bg-[#d4793a] rounded font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px] hover:bg-[#ecbc9a]">
          Søg
        </button>
      </form>
      <div className="hidden gap-4 md:flex">
        <button className="h-[53px] px-4 bg-white rounded font-normal text-[20px] text-black  hover:bg-[#ecbc9a]">
          Sortér
        </button>
        <button className="h-[53px] px-4 bg-white rounded font-normal text-[20px] text-black  hover:bg-[#ecbc9a]">
          Kategori
        </button>
      </div>
    </div>
  );
}
