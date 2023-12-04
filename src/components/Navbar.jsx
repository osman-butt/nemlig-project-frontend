export default function Navbar({ setCategory, setPage }) {
  return (
    <nav>
      <div className="bg-[#58644c] w-full font-general">
        <div className="max-w-[1240px] flex flex-wrap justify-center md:justify-start m-auto z-50 py-2 align-middle">
          <button
          onClick={() => setCategory("")}
          className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Alle
          </button>
          <button
            onClick={() => {setCategory("frost"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Frost
          </button>
          <button
            onClick={() => {setCategory("mejeri"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Mejeri
          </button>
          <button
            onClick={() => {setCategory("kød"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer"
          >
            Kød
          </button>
          <button
            onClick={() => {setCategory("brød"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Brød
          </button>
          <button
            onClick={() => {setCategory("kolonial"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Kolonial
          </button>
          <button
            onClick={() => {setCategory("drikkevarer"); setPage(1)}}
            className="text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px]  hover:text-[#d4793a] hover:cursor-pointer"
          >
            Drikkevarer
          </button>
        </div>
      </div>
    </nav>
  );
}
