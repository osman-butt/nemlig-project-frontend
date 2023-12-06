import FormInput from "./FormInput";
import {useState} from "react";
import axios from "../api/axios";

export default function Createdialog({ closeDialog }) {
  const [productData, setProductData] = useState({
    product_name: "",
    product_underline: "",
    product_description: "",
    images: [{ image_url: "" }],
    labels: [],
    categories: [],
    inventory_stock: 0,
    prices: [
      {
        price: 0,
        starting_at: "",
        is_campaign: false,
        ending_at: "",
      }
    ]
  });

  function handleInputChange(event){
    setProductData({
      ...productData,
      [event.target.name]: event.target.value
    });
  }
  async function handleAddProduct(event){
    event.preventDefault();

    try {
      const response = await axios.post("/products", productData);

      if (response.status === 200) {
        console.log("Produkt tilføjet!");
        closeDialog();
      } else {
        console.error("Noget gik galt ved tilføjelse af produktet.");
      }
    } catch (error) {
      console.error("Fejl ved håndtering af anmodning:", error);
    }
  }

  return (
    <div className="fixed overflow-scroll inset-0 pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="rounded-md">
        <h1 className="text-center text-2xl font-bold py-3">Tilføj vare</h1>
        <form onSubmit={handleAddProduct} className="gap-y-2 px-10 grid">
          <FormInput
            label="Produktnavn:"
            type="text"
            placeholder="Skriv navn på produkt her"
            name="product_name"
            value={productData.product_name}
            onChange={handleInputChange}
          />
          <FormInput
            label="Produkt understregning:"
            type="text"
            placeholder="Skriv produkt understregning her"
            name="product_underline"
            value={productData.product_underline}
            onChange={handleInputChange}
          />
          <FormInput
            label="Produktbeskrivelse:"
            type="text"
            placeholder="Skriv produktbeskrivelse her"
            name="productDescription"
          />
          <FormInput
            label="Billede:"
            type="text"
            placeholder="Indsæt link til billede her"
            name="productImage"
          />
          <FormInput label="Labels:" type="option" placeholder="Vælg labels her" name="labels" />

          <FormInput
            label="Antal på lager:"
            type="number"
            placeholder="Skriv antal her"
            name="productAmount"
          />
          <FormInput
            label="Kategori:"
            type="text"
            placeholder="Skriv kategori her"
            name="productCategory"
          />
          <FormInput
            label="Pris:"
            type="text"
            placeholder="Skriv pris på varen her"
            name="productPrice"
          />

          <div>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md ml-[11.5rem] mb-4 my-2 py-2 text-black font-medium text-xl"
              type="submit"
            >
              Tilføj
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
