import ButtonSmallPrimary from "../../../../components/buttons/ButtonSmallPrimary";
import usePrivateAxios from "../../../../hooks/usePrivateAxios";

export default function Deletedialog({
  closeDialog,
  product_id,
  setData,
  setUpdate,
}) {
  const privateAxios = usePrivateAxios();
  const deleteProduct = async product_id => {
    try {
      const response = await privateAxios.delete(`products/${product_id}`);
      if (response.status === 200) {
        console.log("Produkt slettet:", response.data);
        setUpdate(true); // trigger a re-render
        closeDialog();
      }
      setData(prevData =>
        prevData.filter(item => item.product_id !== product_id)
      );
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
        <h1 className="py-5 text-2xl font-bold text-center">
          Er du sikker på, <br /> at du vil slette denne vare?
        </h1>
        <div className="flex justify-between">
          <ButtonSmallPrimary
            onClick={closeDialog}
            className={"py-2 w-[100px] mb-4"}
          >
            Luk
          </ButtonSmallPrimary>
          <ButtonSmallPrimary
            onClick={handleDeleteClick}
            className={"py-2 w-[100px] mb-4"}
          >
            Slet
          </ButtonSmallPrimary>
        </div>
      </dialog>
    </div>
  );
}
