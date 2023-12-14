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
      <section className="container w-full bg-[#e8e3d8] p-4 mb-4 rounded md:p-10 overflow-y-scroll scrollbar-hide">
        <table className="w-[100%] select-none mx-auto" id="cart">
          <thead className="border-b-2 border-black">
            <tr className="text-left">
              <th className="hidden md:table-cell">ID</th>
              <th className="hidden text-center md:table-cell">Billede</th>
              <th>Produkt</th>
              <th>Pris</th>
              <th>På lager</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
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
      </section>
    </div>
  );
}
