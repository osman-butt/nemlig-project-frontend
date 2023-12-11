import FormInput from "../../../../components/FormInput.jsx";
import { handleInputChange, handleSelectChange, handleArrayChange } from "../../AdminUtils/eventHandlers.js";
import PriceField from "../InputFields/PriceFields.jsx";
import LabelFields from "../InputFields/LabelFields.jsx";
import CategoryFields from "../InputFields/CategoryField.jsx";
import ImageFields from "../InputFields/ImageFields.jsx";
import useFieldHandlers from "../../../../hooks/useFieldHandlers.js";
import usePrivateAxios from "../../../../hooks/usePrivateAxios.js";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function Updatedialog({ closeDialog, data, labelData, categoryData, setUpdate }) {
  const privateAxios = usePrivateAxios();
  // Dynamic field states
  const [prices, setPrices] = useState(
    data.prices.map((price) => ({
      price_id: price.price_id,
      price: price.price,
      starting_at: price.starting_at,
      is_campaign: price.is_campaign,
      ending_at: price.ending_at,
    }))
  );
  const [images, setImages] = useState(
    data.images.map((image) => ({
      image_id: image.image_id,
      image_url: image.image_url,
    }))
  );
  const [labels, setLabels] = useState(data.labels.length ? data.labels.map((label) => label.label_id) : [0]);
  const [categories, setCategories] = useState(data.categories.length ? data.categories.map((category) => category.category_id) : [0]);

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
    inventory_stock: data.inventory ? data.inventory.inventory_stock : 0,
    prices: data.prices.map((price) => ({
      price_id: price.price_id,
      price: price.price,
      starting_at: price.starting_at,
      is_campaign: price.is_campaign,
      ending_at: price.ending_at,
    })),
  });

  const { addField: addPriceField, removeField: removePriceField } = useFieldHandlers(setPrices, setProductData);
  const { addField: addImageField, removeField: removeImageField } = useFieldHandlers(setImages, setProductData);
  const { addField: addLabelField, removeField: removeLabelField } = useFieldHandlers(setLabels, setProductData);
  const { addField: addCategoryField, removeField: removeCategoryField } = useFieldHandlers(setCategories, setProductData);

  async function handleUpdateProduct(event) {
    event.preventDefault();
    try {
      console.log(`Updating product with data`, productData);
      const response = await privateAxios.put(`/products/${data.product_id}`, productData);
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
  const handleImageChangeInstance = handleArrayChange(setProductData, setImages, "images");
  const handlePriceOrDateChangeInstance = handleArrayChange(setProductData, setPrices, "prices");
  const handleLabelChangeInstance = handleSelectChange(setProductData, setLabels, "labels");
  const handleCategoryChangeInstance = handleSelectChange(setProductData, setCategories, "categories");

  return ReactDOM.createPortal(
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
            removeImageField={(index) => removeImageField("images", index)}
            addImageField={() => addImageField("images")}
          />

          <LabelFields
            labels={labels}
            labelData={labelData}
            handleLabelChangeInstance={handleLabelChangeInstance}
            removeLabelField={(index) => removeLabelField("labels", index)}
            addLabelField={() => addLabelField("labels")}
          />

          <CategoryFields
            categories={categories}
            categoryData={categoryData}
            handleCategoryChangeInstance={handleCategoryChangeInstance}
            removeCategoryField={(index) => removeCategoryField("categories", index)}
            addCategoryField={() => addCategoryField("categories")}
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
            removePriceField={(index) => removePriceField("prices", index)}
            addPriceField={() => addPriceField("prices")}
          />

          <div className="flex flex-row justify-around">
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md ml-[11.5rem] mb-4 my-2 py-2 text-black font-medium text-xl">
              Opdater
            </button>
          </div>
        </form>
      </dialog>
    </div>,
    document.getElementById("dialog-root")
  );
}
