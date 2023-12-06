import { useState } from "react";
import Table from "./Table";
import Createdialog from "./Createdialog";

export default function Admintable({ data }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="mx-5 py-5">
      {dialogOpen && <Createdialog closeDialog={closeDialog} data={data} />}
      <button onClick={openDialog} className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md my-4 py-2 text-black font-medium text-xl">
        Tilføj
      </button>
      {data.map((item) => (
        <Table key={item.product_id} data={item} />
      ))}
    </div>
  );
}
