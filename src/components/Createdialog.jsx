import FormInput from "./FormInput";
import axios from "../api/axios";

export default function Createdialog({ closeDialog }) {
  const handleAddProduct = async (event) => {
    event.preventDefault();

    const productName = event.target.elements.productName.value;
    const price = event.target.elements.price.value;
    const image = event.target.elements.image.value;

    const formData = {
      productName,
      price,
      image,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/v1/add-product", formData);

      if (response.status === 200) {
        console.log("Produkt tilføjet!");
        closeDialog();
      } else {
        console.error("Noget gik galt ved tilføjelse af produktet.");
      }
    } catch (error) {
      console.error("Fejl ved håndtering af anmodning:", error);
    }
  };

  return (
    <div className="fixed inset-0 pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="rounded-md">
        <h1 className="text-center text-2xl font-bold py-3">Tilføj vare</h1>
        <form className="gap-y-2 px-10 grid">
          <FormInput
            label="Produktnavn:"
            type="text"
            placeholder="Skriv navn på produkt her"
            name="productName"
          />
          <FormInput label="Pris:" type="text" placeholder="Skriv pris på varen her" name="price" />
          <FormInput
            label="Billede:"
            type="text"
            placeholder="Indsæt link til billede her"
            name="image"
          />
          <div>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md ml-[7rem] mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={handleAddProduct}
            >
              Tilføj
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
