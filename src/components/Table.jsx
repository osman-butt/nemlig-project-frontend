function Table({ children }) {
  return <table className="w-[100%] select-none">{children}</table>;
}

function TableHead({ children }) {
  return <thead className="border-b-2 border-black">{children}</thead>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children, className }) {
  return <tr className={className}>{children}</tr>;
}

function TableHeaderCell({ children, className }) {
  return <th className={className}>{children}</th>;
}

function TableCell({ children, className }) {
  return <td className={className}>{children}</td>;
}

export { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell };
