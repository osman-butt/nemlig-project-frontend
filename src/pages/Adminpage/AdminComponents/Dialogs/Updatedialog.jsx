import FormInput from "../../../../components/FormInput.jsx";
import {
  handleInputChange,
  handleImageChange,
  handlePriceOrDateChange,
  handleSelectChange,
} from "../../AdminUtils/eventHandlers.js";
import PriceField from "../InputFields/PriceFields.jsx";
import SelectField from "../InputFields/SelectFields.jsx";
import ImageFields from "../InputFields/ImageFields.jsx";
import axios from "../../../../api/axios.js";
import { useState } from "react";

export default function Updatedialog({ closeDialog, data, labelData, categoryData, setUpdate }) {
  // Dynamic field states
  const [prices, setPrices] = useState(data.prices.map((price) => ({
    price_id: price.price_id,
    price: price.price,
    starting_at: price.starting_at,
    is_campaign: price.is_campaign,
    ending_at: price.ending_at,
  })))
  const [images, setImages] = useState(data.images.map((image) => ({
    image_id: image.image_id,
    image_url: image.image_url,
  })));

  function addPriceField() {
    const newPrice = { price: "", starting_at: "", is_campaign: false, ending_at: "" };
    setPrices([...prices, newPrice]);
    setProductData({ ...productData, prices: [...productData.prices, newPrice] });
  }
  function addImageField() {
    const newImage = { image_url: "" };
    setImages([...images, newImage]);
    setProductData({ ...productData, images: [...productData.images, newImage]});
    
  }
  function removePriceField(index) {
    const newPrices = prices.filter((_, i) => i !== index);
    setPrices(newPrices);
    setProductData({ ...productData, prices: newPrices});
  }
  function removeImageField(index) {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setProductData({ ...productData, images: newImages});
  }

  const [productData, setProductData] = useState({
    product_name: data.product_name,
    product_underline: data.product_underline,
    product_description: data.product_description,
    images: data.images.map((image) => ({
      image_id: image.image_id,
      image_url: image.image_url,
    })),
    labels: data.labels.map((label) => label.label_id),
    categories: data.categories.map((category) => category.category_id),
    inventory_stock: data.inventory.inventory_stock,
    prices: data.prices.map((price) => ({
      price_id: price.price_id,
      price: price.price,
      starting_at: price.starting_at,
      is_campaign: price.is_campaign,
      ending_at: price.ending_at,
    })),
  });

  async function handleUpdateProduct(event) {
    event.preventDefault();
    const updatedProductData = {
    ...productData,
    prices: prices,
    images: images,
    };
    console.log(`Product data:`, updatedProductData);
    try {
      const response = await axios.put(`/products/${data.product_id}`, productData);
      console.log(response);
      if (response.status === 200) {
        setUpdate(true); // trigger a re-render
      }
      closeDialog();
    } catch (err) {
      console.log(err);
    }
  }

  // Setup instances of event handlers
  const handleInputChangeInstance = handleInputChange(setProductData);
  const handleImageChangeInstance = handleImageChange(setProductData, setImages);
  const handlePriceOrDateChangeInstance = handlePriceOrDateChange(setProductData, setPrices);
  const handleSelectChangeInstance = handleSelectChange(setProductData);

  return (
    <div className="fixed overflow-scroll inset-0 pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="rounded-md">
        <h1 className="text-center text-2xl font-bold py-3">Opdater vare</h1>
        <form onSubmit={handleUpdateProduct} className="gap-y-2 px-10 grid">
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
            placeholder="Skriv navn på produkt her"
            name="product_underline"
            value={productData.product_underline}
            onChange={(value) => handleInputChangeInstance("product_underline", value)}
          />
          <FormInput
            label="Produktbeskrivelse:"
            type="text"
            placeholder="Skriv navn på produkt her"
            name="product_description"
            value={productData.product_description || ""}
            onChange={(value) => handleInputChangeInstance("product_description", value)}
          />
          <ImageFields
            images={images}
            handleImageChangeInstance={handleImageChangeInstance}
            removeImageField={removeImageField}
            addImageField={addImageField}
          />

          <SelectField
            name={`labels]`}
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
            type="text"
            placeholder="Skriv antal her"
            name="inventory_stock"
            value={productData.inventory_stock}
            onChange={(value) => handleInputChangeInstance("inventory_stock", value)}
          />

            <PriceField
              prices={prices}
              handlePriceOrDateChangeInstance={handlePriceOrDateChangeInstance}
              removePriceField={removePriceField}
              addPriceField={addPriceField}
             />
    

          <div className="flex flex-row justify-around">
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md py-2 text-black font-medium text-xl">
              Opdater
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
