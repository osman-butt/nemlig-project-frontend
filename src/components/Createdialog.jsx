import FormInput from "./FormInput";
import { useState } from "react";
import axios from "../api/axios.js";

export default function Createdialog({ closeDialog }) {
  const [productData, setProductData] = useState({
    product_name: "",
    product_underline: "",
    product_description: "",
    images: [{ image_url: "" }],
    labels: [6],
    categories: [5],
    inventory_stock: 0,
    prices: [
      {
        price: 0,
        starting_at: "",
        is_campaign: false,
        ending_at: "",
      },
    ],
  });


  function handleInputChange(event) {
    const {name, value} = event.target;
    setProductData({
      ...productData,
      [name]: name === 'inventory_stock' ? Number(value) : value,
    });
  }

  function handleImageChange(event) {
    setProductData({
      ...productData,
      images: [{ ...productData.images[0], image_url: event.target.value }],
    });
  }

  function handlePriceChange(event) {
    setProductData({
      ...productData,
      prices: [{ ...productData.prices[0], price: Number(event.target.value) }],
    });
  }

  function handleStartingAtChange(event) {
    setProductData({
      ...productData,
      prices: [{ ...productData.prices[0], starting_at: event.target.value }],
    });
  }

  function handleIsCampaignChange(event) {
    setProductData({
      ...productData,
      prices: [{ ...productData.prices[0], is_campaign: event.target.checked }],
    });
  }

  function handleEndingAtChange(event) {
    setProductData({
      ...productData,
      prices: [{ ...productData.prices[0], ending_at: event.target.value }],
    });
  }

  async function handleAddProduct(event) {
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
      console.log(productData);
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
            name="product_description"
            value={productData.product_description}
            onChange={handleInputChange}
          />
          <FormInput
            label="Billede:"
            type="text"
            placeholder="Indsæt link til billede her"
            value={productData.images[0].image_url}
            onChange={handleImageChange}
          />
          <FormInput
            label="Antal på lager:"
            type="number"
            placeholder="Skriv antal her"
            name="inventory_stock"
            value={productData.inventory_stock}
            onChange={handleInputChange}
          />

          <fieldset className="border-2 border-solid">
            <legend>Priser: </legend>
            <FormInput
              label="Pris:"
              type="number"
              placeholder="Skriv pris på varen her"
              value={productData.prices[0].price}
              onChange={handlePriceChange}
            />
            <FormInput
              label="Start dato"
              type="date"
              value={productData.prices[0].starting_at}
              onChange={handleStartingAtChange}
            />
            <div>
              <p>Kampagne</p>
              <input type="checkbox" value={productData.is_campaign} onChange={handleIsCampaignChange} />
            </div>

            <FormInput label="Slut dato" type="date" value={productData.prices[0].ending_at} onChange={handleEndingAtChange} />
          </fieldset>

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
