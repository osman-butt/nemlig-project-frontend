import { useState } from "react";
import Table from "./Table";
import Createdialog from "./Dialogs/Createdialog";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";

export default function Admintable({
  data,
  labelData,
  categoryData,
  setData,
  setUpdate,
}) {
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
          setUpdate={setUpdate}
        />
      )}
      <div className="flex justify-center">
        <ButtonPrimary onClick={openDialog}>Tilføj produkt</ButtonPrimary>
      </div>
      <table className="font-medium bg-[#e8e3d8] text-center text-xs sm:text-lg md:text-xl w-full">
        <thead className="uppercase text-sm sm:text-xl md:text-2xl border-[3px] border-solid border-black">
          <tr>
            <th className="border-black border-solid border-[3px] p-1">ID</th>
            <th className="border-black border-solid border-[3px] p-1">
              Billede
            </th>
            <th className="border-black border-solid border-[3px] p-1">
              Produktnavn
            </th>
            <th className="border-black border-solid border-[3px] p-1">Pris</th>
            <th className="border-black border-solid border-[3px] p-1">
              Rediger
            </th>
            <th className="border-black border-solid border-[3px] p-1">Slet</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <Table
              key={item.product_id}
              data={item}
              labelData={labelData}
              categoryData={categoryData}
              setData={setData}
              setUpdate={setUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
