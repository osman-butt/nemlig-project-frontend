export default function Pagination({ page, totalPages, setPage }){

  const buttonStyle = "h-[30px] px-4 bg-white font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px] hover:bg-[#ecbc9a]"

    return (
      <div className="m-auto flex flex-row justify-center align-middle gap-2 p-2">
        <button className={buttonStyle} onClick={() => setPage(1)}>First page</button>
        <button className={buttonStyle} onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>
          Previous
        </button>
        <span className="h-[30px] px-4 bg-white font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px]">Page {page} of {totalPages}</span>
        <button className={buttonStyle} onClick={() => setPage(prevPage => prevPage + 1)} disabled={page === totalPages}>
          Next
        </button>
        <button className={buttonStyle} onClick={() => setPage(totalPages)}>Last page</button>
      </div>
    );
  }