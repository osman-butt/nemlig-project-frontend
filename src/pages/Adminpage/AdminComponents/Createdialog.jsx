import FormInput from "../../../components/FormInput.jsx";
import {
  handleInputChange,
  handleImageChange,
  handlePriceOrDateChange,
  handleIsCampaignChange,
  handleSelectChange,
} from "../AdminUtils/eventHandlers.js";
import PriceField from "./PriceField.jsx";
import SelectField from "./SelectField.jsx";
import { useState } from "react";
import axios from "../../../api/axios.js";

export default function Createdialog({ closeDialog, labelData, categoryData, setUpdate }) {
  // Dynamic field states
  const [prices, setPrices] = useState([{ price: "", starting_at: "", is_campaign: false, ending_at: "" }]);
  const [images, setImages] = useState([{ image_url: "" }]);

  function addPriceField() {
    setPrices([...prices, { price: "", starting_at: "", is_campaign: false, ending_at: "" }]);
  }

  function removePriceField(index) {
    setPrices(prices.filter((_, i) => i !== index));
  }
  function addImageField() {
    setImages([...images, { image_url: "" }]);
  }
  function removeImageField(index) {
    setImages(images.filter((_, i) => i !== index));
  }

  const [productData, setProductData] = useState({
    product_name: "",
    product_underline: "",
    product_description: "",
    images: [{ image_url: "" }],
    labels: [],
    categories: [],
    inventory_stock: "",
    prices: [
      {
        price: "",
        starting_at: "",
        is_campaign: false,
        ending_at: "",
      },
    ],
  });

  // Setup instances of event handlers
  const handleInputChangeInstance = handleInputChange(setProductData);
  const handleImageChangeInstance = handleImageChange(setProductData, setImages);
  const handlePriceOrDateChangeInstance = handlePriceOrDateChange(setProductData, setPrices);
  const handleIsCampaignChangeInstance = handleIsCampaignChange(setProductData, setPrices);
  const handleSelectChangeInstance = handleSelectChange(setProductData);

  async function handleAddProduct(event) {
    event.preventDefault();

    const updatedProductData = {
      ...productData,
      ...(prices.length > 0 && { prices }),
      ...(images.length > 0 && { images }),
    };

    try {
      const response = await axios.post("/products", updatedProductData);

      if (response.status === 200) {
        setUpdate(true); // trigger a re-render
        console.log("Produkt tilføjet!", response.data);
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
            onChange={(value) => handleInputChangeInstance("product_name", value)}
          />
          <FormInput
            label="Produkt understregning:"
            type="text"
            placeholder="Skriv produkt understregning her"
            name="product_underline"
            value={productData.product_underline}
            onChange={(value) => handleInputChangeInstance("product_underline", value)}
          />
          <FormInput
            label="Produktbeskrivelse:"
            type="text"
            placeholder="Skriv produktbeskrivelse her"
            name="product_description"
            value={productData.product_description}
            onChange={(value) => handleInputChangeInstance("product_description", value)}
          />
          {images.map((image, index) => (
            <div key={index}>
              <FormInput
                label={`Billede ${index + 1}:`}
                type="text"
                placeholder="Indsæt link til billede her"
                value={image.image_url}
                onChange={(value) => handleImageChangeInstance('image_url', index) (value)}
              />
              <div className="flex flex-row justify-between font-bold">
                <button type="button" onClick={() => removeImageField(index)} disabled={images.length <= 1}>
                  Fjern billede
                </button>
                <button type="button" onClick={addImageField}>
                  Tilføj billede
                </button>
              </div>
            </div>
          ))}

          <SelectField
            name={`labels`}
            value={productData.labels[0] || ""}
            onChange={(event) => handleSelectChangeInstance(`labels`, event.target.value)}
            options={labelData.map((label) => ({ id: label.label_id, name: label.label_name }))}
            placeholder="Vælg label"
          />

          <SelectField
            name={`categories`}
            value={productData.categories[0] || ""}
            onChange={(event) => handleSelectChangeInstance(`categories`, event.target.value)}
            options={categoryData.map((category) => ({ id: category.category_id, name: category.category_name }))}
            placeholder="Vælg kategori"
          />

          <FormInput
            label="Antal på lager:"
            type="number"
            placeholder="Skriv antal her"
            name="inventory_stock"
            value={productData.inventory_stock}
            onChange={(value) => handleInputChangeInstance("inventory_stock", value)}
          />

          {prices.map((price, index) => (
            <PriceField
              key={index}
              price={price}
              index={index}
              prices={prices}
              handlePriceOrDateChangeInstance={handlePriceOrDateChangeInstance}
              handleIsCampaignChangeInstance={handleIsCampaignChangeInstance}
              removePriceField={removePriceField}
              addPriceField={addPriceField}
            />
          ))}

          <div className="flex flex-row justify-around">
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
