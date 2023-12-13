export default function Pagination({ page, totalPages, setPage }) {
  const buttonStyle =
    "h-[30px] px-2 font-normal text-black lg:text-[18px] md:text-[16px] sm:text-[14px] hover:bg-[#d4793a] hover:cursor-pointer text-bold hover:text-white rounded";

  return (
    <div className="flex flex-row justify-center gap-2 p-2 mx-auto align-middle bg-white max-w-[300px] rounded-xl mb-2">
      <button className={buttonStyle} onClick={() => setPage(1)}>
        &lt;&lt;
      </button>
      <button
        className={buttonStyle}
        onClick={() => setPage(prevPage => prevPage - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      <span className="h-[30px] px-4 bg-white font-normal text-black lg:text-[18px] md:text-[16px] sm:text-[14px] py-1">
        {page} af {totalPages}
      </span>
      <button
        className={buttonStyle}
        onClick={() => setPage(prevPage => prevPage + 1)}
        disabled={page === totalPages}
      >
        &gt;
      </button>
      <button className={buttonStyle} onClick={() => setPage(totalPages)}>
        &gt;&gt;
      </button>
    </div>
  );
}
