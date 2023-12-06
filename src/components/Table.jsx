import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import Updatedialog from "./Updatedialog";
import Deletedialog from "./Deletedialog";

export default function Table({ data }) {
  const [dialogType, setDialogType] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const editIcon = <AiOutlineEdit size={30} />;
  const deleteIcon = <AiOutlineClose size={30} />;

  const openDialog = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {dialogOpen && dialogType === "update" && <Updatedialog closeDialog={closeDialog} data={data} />}
      {dialogOpen && dialogType === "delete" && <Deletedialog closeDialog={closeDialog} product_id={data.product_id} />}

      <table className="font-medium bg-[#e8e3d8]">
        <tbody>
          <tr className="text-center text-xs sm:text-lg md:text-xl">
            <td className="border-black border-solid border-2 p-2 w-[2%]">{data.product_id}</td>
            <td className="border-black border-solid border-2 p-2 w-[6%]">
              <img className="w-[50%] mx-auto" src={data.images && data.images[0] ? data.images[0].image_url : ""} alt="" />
            </td>
            <td className="border-black border-solid border-2 p-2 w-[20%]">{data.product_name}</td>
            <td className="border-black border-solid border-2 p-2 w-[10%]">
              {data.prices && data.prices[0] ? data.prices[0].price + " kr." : "N/A"}
            </td>
            <td
              onClick={() => openDialog("update")}
              className="border-black border-solid border-2 p-2 w-[2%] hover:text-[#d4793a] cursor-pointer text-center align-middle"
            >
              {editIcon}
            </td>

            <td onClick={() => openDialog("delete")} className="border-black border-solid border-2 p-2 w-[2%] hover:text-[#d4793a] cursor-pointer">
              {deleteIcon}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
