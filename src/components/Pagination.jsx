export default function Pagination({ page, totalPages, setPage }){
    return (
      <div>
        <button onClick={() => setPage(1)}>First page</button>
        <button onClick={() => setPage(prevPage => Math.max(prevPage - 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(prevPage => Math.min(prevPage + 1))} disabled={page === totalPages}>
          Next
        </button>
        <button onClick={() => setPage(totalPages)}>Last page</button>
      </div>
    );
  }