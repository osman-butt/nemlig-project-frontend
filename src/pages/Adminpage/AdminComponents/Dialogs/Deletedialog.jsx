import axios from "../../../../api/axios.js";

export default function Deletedialog({ closeDialog, product_id, setData, setUpdate }) {
  const deleteProduct = async (product_id) => {
    try {
      const response = await axios.delete(`products/${product_id}`);
      if (response.status === 200) {
        console.log("Produkt slettet:", response.data);
        setUpdate(true); // trigger a re-render
        closeDialog();
      }
      setData((prevData) => prevData.filter((item) => item.product_id !== product_id));
    } catch (error) {
      console.error("Fejl ved sletning af produkt:", error);
    }
  };

  const handleDeleteClick = () => {
    deleteProduct(product_id);
  };

  return (
    <div className="fixed inset-0 pt-[8rem] items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="px-5">
        <h1 className="text-center text-2xl font-bold py-5">
          Er du sikker på, <br /> at du vil slette denne vare?
        </h1>
        <button
          className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
          onClick={closeDialog}
        >
          Luk
        </button>
        <button
          className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] ml-[100px] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
          onClick={handleDeleteClick}
        >
          Slet
        </button>
      </dialog>
    </div>
  );
}
