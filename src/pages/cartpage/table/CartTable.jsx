function CartTable({ children }) {
  return (
    <table className="w-[100%] select-none" id="cart">
      <thead className="border-b-2 border-black">
        <tr className="text-left">
          <th className="hidden md:block"></th>
          <th></th>
          <th></th>
          <th className="text-center"></th>
        </tr>
      </thead>
      <tbody className="">{children}</tbody>
    </table>
  );
}

export default CartTable;
