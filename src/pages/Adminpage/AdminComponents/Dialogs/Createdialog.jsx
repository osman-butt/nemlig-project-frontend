import FormInput from "../../../../components/FormInput.jsx";
import { handleInputChange, handleArrayChange, handleSelectChange } from "../../AdminUtils/eventHandlers.js";
import PriceField from "../InputFields/PriceFields.jsx";
import ImageFields from "../InputFields/ImageFields.jsx";
import LabelFields from "../InputFields/LabelFields.jsx";
import CategoryFields from "../InputFields/CategoryField.jsx";
import { useState } from "react";
import usePrivateAxios from "../../../../hooks/usePrivateAxios.js";
import useFieldHandlers from "../../../../hooks/useFieldHandlers.js";

export default function Createdialog({ closeDialog, labelData, categoryData, setUpdate }) {
  const privateAxios = usePrivateAxios();
  // Dynamic field states
  const [prices, setPrices] = useState([{ price: "", starting_at: "", is_campaign: false, ending_at: "" }]);
  const [images, setImages] = useState([{ image_url: "" }]);
  const [labels, setLabels] = useState([0]);
  const [categories, setCategories] = useState([0]);

  const { addField: addPriceField, removeField: removePriceField } = useFieldHandlers(setPrices);
  const { addField: addImageField, removeField: removeImageField } = useFieldHandlers(setImages);
  const { addField: addLabelField, removeField: removeLabelField } = useFieldHandlers(setLabels);
  const { addField: addCategoryField, removeField: removeCategoryField } = useFieldHandlers(setCategories);

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
  const handleImageChangeInstance = handleArrayChange(setProductData, setImages, "images");
  const handlePriceOrDateChangeInstance = handleArrayChange(setProductData, setPrices, "prices");
  const handleLabelChangeInstance = handleSelectChange(setProductData, setLabels, "labels");
  const handleCategoryChangeInstance = handleSelectChange(setProductData, setCategories, "categories");

  async function handleAddProduct(event) {
    event.preventDefault();

    const updatedProductData = {
      ...productData,
      ...(prices.length > 0 && { prices }),
      ...(images.length > 0 && { images }),
      ...(labels.length > 0 && { labels }),
      ...(categories.length > 0 && { categories }),
    };

    try {
      console.log(`Adding product with data`, updatedProductData);
      const response = await privateAxios.post("/products", updatedProductData);

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
          <ImageFields
            images={images}
            handleImageChangeInstance={handleImageChangeInstance}
            removeImageField={(index) => removeImageField("images", index)}
            addImageField={() => addImageField("images")}
          />

          <LabelFields
            labels={labels}
            handleLabelChangeInstance={handleLabelChangeInstance}
            removeLabelField={(index) => removeLabelField("labels", index)}
            addLabelField={() => addLabelField("labels")}
            labelData={labelData}
          />

          <CategoryFields
            categories={categories}
            handleCategoryChangeInstance={handleCategoryChangeInstance}
            removeCategoryField={(index) => removeCategoryField("categories", index)}
            addCategoryField={() => addCategoryField("categories")}
            categoryData={categoryData}
          />

          <FormInput
            label="Antal på lager:"
            type="number"
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
