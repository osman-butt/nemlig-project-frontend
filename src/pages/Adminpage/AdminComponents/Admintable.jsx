import { useState } from "react";
import Table from "./Table";
import Createdialog from "./Createdialog";

export default function Admintable({ data, labelData, categoryData, setData }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="py-5 px-2 max-w-[1240px] m-auto">
      {dialogOpen && (
        <Createdialog
          closeDialog={closeDialog}
          data={data}
          labelData={labelData}
          categoryData={categoryData}
        />
      )}
      <button
        onClick={openDialog}
        className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[150px] rounded-md my-4 py-2 text-black font-medium text-xl"
      >
        Tilføj produkt
      </button>
      <table className="font-medium bg-[#e8e3d8] text-center text-xs sm:text-lg md:text-xl w-full">
        <thead className="uppercase text-sm sm:text-xl md:text-2xl border-[3px] border-solid border-black">
          <tr>
            <th className="border-black border-solid border-[3px] p-1">ID</th>
            <th className="border-black border-solid border-[3px] p-1">Billede</th>
            <th className="border-black border-solid border-[3px] p-1">Produktnavn</th>
            <th className="border-black border-solid border-[3px] p-1">Pris</th>
            <th className="border-black border-solid border-[3px] p-1">Rediger</th>
            <th className="border-black border-solid border-[3px] p-1">Slet</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Table
              key={item.product_id}
              data={item}
              labelData={labelData}
              categoryData={categoryData}
              setData={setData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
