import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import Updatedialog from "./Updatedialog";
import Deletedialog from "./Deletedialog";

export default function Table({ data, labelData, categoryData }) {
  const [dialogType, setDialogType] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const iconStyle = {
    cursor: "pointer",
    display: "block",
    margin: "auto",
  };

  const editIcon = <AiOutlineEdit size={30} style={iconStyle} />;
  const deleteIcon = <AiOutlineClose size={30} style={iconStyle} />;

  const openDialog = (type) => {
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
        />
      )}
      {dialogOpen && dialogType === "delete" && (
        <Deletedialog closeDialog={closeDialog} product_id={data.product_id} />
      )}

      <tr className="">
        <td className="border-black border-solid border-2">{data.product_id}</td>
        <td className="border-black border-solid border-2 p-1">
          <img
            className="w-5 sm:w-7 md:w-8 m-auto"
            src={data.images && data.images[0] ? data.images[0].image_url : ""}
            alt=""
          />
        </td>
        <td className="border-black border-solid border-2 p-1">{data.product_name}</td>
        <td className="border-black border-solid border-2 p-1">
          {data.prices && data.prices[0] ? data.prices[0].price + " kr." : "N/A"}
        </td>
        <td
          onClick={() => openDialog("update")}
          className="border-black border-solid border-2 p-1 hover:text-[#d4793a]"
        >
          {editIcon}
        </td>

        <td
          onClick={() => openDialog("delete")}
          className="border-black border-solid border-2 p-1 hover:text-[#d4793a]"
        >
          {deleteIcon}
        </td>
      </tr>
    </>
  );
}
