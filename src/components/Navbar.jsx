export default function Navbar({ setCategory, setPage }) {
  const buttonStyle = "text-base px-4 md:text-lg lg:py-4 lg:text-xl font-normal text-white text-[18px] hover:text-[#d4793a] hover:cursor-pointer";

  return (
    <nav>
      <div className="bg-[#58644c] w-full font-general">
        <div className="max-w-[1240px] flex flex-wrap justify-center md:justify-start m-auto z-50 py-2 align-middle">
          <button
            onClick={() => {
              setCategory("");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Alle
          </button>
          <button
            onClick={() => {
              setCategory("frost");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Frost
          </button>
          <button
            onClick={() => {
              setCategory("mejeri");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Mejeri
          </button>
          <button
            onClick={() => {
              setCategory("kød");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Kød
          </button>
          <button
            onClick={() => {
              setCategory("brød");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Brød
          </button>
          <button
            onClick={() => {
              setCategory("kolonial");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Kolonial
          </button>
          <button
            onClick={() => {
              setCategory("drikkevarer");
              if (setPage) {
                setPage(1);
              }
            }}
            className={buttonStyle}
          >
            Drikkevarer
          </button>
        </div>
      </div>
    </nav>
  );
}
