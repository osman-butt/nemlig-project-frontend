import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import Updatedialog from "./Updatedialog";
import Deletedialog from "./Deletedialog";

export default function Table({ data }) {
  const [dialogType, setDialogType] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(data);

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
      {dialogOpen && dialogType === "update" && (
        <Updatedialog closeDialog={closeDialog} />
      )}
      {dialogOpen && dialogType === "delete" && (
        <Deletedialog closeDialog={closeDialog} />
      )}

      <table className="border-black border-solid border-2 w-full font-[700] bg-[#e8e3d8]">
        <tbody>
          <tr className="border-black border-solid border-2 text-center">
            <td className="border-black border-solid border-2 p-2 w-1/5">
              {data.product_id}
            </td>
            <td className="border-black border-solid border-2 p-2 w-2/5">
              {data.product_name}
            </td>
            <td className="border-black border-solid border-2 p-2 w-1/5">
              {data.prices[0].price}
            </td>
            <td
              onClick={() => openDialog("update")}
              className="border-black border-solid border-2 p-2 w-1/5 hover:text-[#d4793a] cursor-pointer text-center align-middle"
            >
              {editIcon}
            </td>

            <td
              onClick={() => openDialog("delete")}
              className="border-black border-solid border-2 p-2 w-1/5 hover:text-[#d4793a] cursor-pointer"
            >
              {deleteIcon}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
