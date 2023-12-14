import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import Updatedialog from "./Dialogs/Updatedialog.jsx";
import Deletedialog from "./Dialogs/Deletedialog.jsx";

export default function Table({
  data,
  labelData,
  categoryData,
  setData,
  setUpdate,
}) {
  const [dialogType, setDialogType] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const iconStyle = {
    cursor: "pointer",
    margin: "auto",
  };

  const editIcon = <AiOutlineEdit size={30} style={iconStyle} />;
  const deleteIcon = <AiOutlineClose size={30} style={iconStyle} />;

  const openDialog = type => {
    setDialogType(type);
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {dialogOpen && dialogType === "update" && (
        <Updatedialog
          closeDialog={closeDialog}
          data={data}
          labelData={labelData}
          categoryData={categoryData}
          setUpdate={setUpdate}
        />
      )}
      {dialogOpen && dialogType === "delete" && (
        <Deletedialog
          closeDialog={closeDialog}
          product_id={data.product_id}
          setData={setData}
          setUpdate={setUpdate}
        />
      )}

      <tr className="text-left text-[14px] border-gray-500 border-b w-full">
        <td className="hidden md:table-cell w-[5%]">{data.product_id}</td>
        <td className="w-[20%] hidden md:table-cell" data-field="name">
          <div className="flex items-center justify-center py-2">
            <img
              className="max-h-[80px] max-w-[80px] object-contain"
              src={data.images[0].image_url}
              alt="product-img"
            />
          </div>
        </td>
        <td className="w-[30%] py-4">
          <p className="w-[135px] font-bold truncate md:hidden">
            {data.product_name}
          </p>
          <p className="hidden font-bold md:block">{data.product_name}</p>
          <p className="font-light">{data.product_underline}</p>
        </td>
        <td className="w-[20%]">
          {data.prices && data.prices[0]
            ? data.prices[0].price.toFixed(2) + " kr."
            : "N/A"}
        </td>
        <td className="w-[10%]">{data.inventory.inventory_stock}</td>
        <td
          onClick={() => openDialog("update")}
          className="w-[10%] hover:text-[#d4793a]"
        >
          {editIcon}
        </td>

        <td
          onClick={() => openDialog("delete")}
          className="w-[10%] hover:text-[#d4793a]"
        >
          {deleteIcon}
        </td>
      </tr>
    </>
  );
}
