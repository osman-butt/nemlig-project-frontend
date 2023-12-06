import FormInput from "../../../components/FormInput.jsx";
import { handleInputChange, handleImageChange, handlePriceOrDateChange, handleIsCampaignChange, handleSelectChange } from "../AdminUtils/eventHandlers.js";
import { useState } from "react";
import axios from "../../../api/axios.js";

export default function Createdialog({ closeDialog, labelData, categoryData}) {
  // Dynamic field states
  const [prices, setPrices] = useState([{ price: "", starting_at: "", is_campaign: false, ending_at: "" }]);

  function addPriceField(){
    setPrices([...prices, { price: "", starting_at: "", is_campaign: false, ending_at: "" }]);
  }

   function removePriceField(index){
    setPrices(prices.filter((_, i) => i !== index));
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
  const handleImageChangeInstance = handleImageChange(setProductData);
  const handlePriceOrDateChangeInstance = handlePriceOrDateChange(setProductData, setPrices);
  const handleIsCampaignChangeInstance = handleIsCampaignChange(setProductData, setPrices);
  const handleSelectChangeInstance = handleSelectChange(setProductData);



  async function handleAddProduct(event) {
    event.preventDefault();

    const updatedProductData = {
      ...productData,
      ...(prices.length > 0 && { prices }),
    }

    try {
      const response = await axios.post("/products", updatedProductData);

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
            onChange={(value) => handleInputChangeInstance('product_name', value)}
          />
          <FormInput
            label="Produkt understregning:"
            type="text"
            placeholder="Skriv produkt understregning her"
            name="product_underline"
            value={productData.product_underline}
            onChange={(value) => handleInputChangeInstance('product_underline', value)}
            />
          <FormInput
            label="Produktbeskrivelse:"
            type="text"
            placeholder="Skriv produktbeskrivelse her"
            name="product_description"
            value={productData.product_description}
            onChange={(value) => handleInputChangeInstance('product_description', value)}
          />
            <div className="font-bold">
          <FormInput
            label="Billede:"
            type="text"
            placeholder="Indsæt link til billede her"
            value={productData.image_url} 
            onChange={(value) => handleImageChangeInstance('image_url', value)}
           />
            </div>

           <label className="font-bold"> Label:
              <select 
                name="labels" 
                className="mt-2 w-full px-4 py-3 leading-tight text-black border rounded shadow focus:outline-none focus:shadow-outline"
                onChange={(event) => handleSelectChangeInstance('labels', event.target.value)}
              >
                <option value="">Vælg label: </option>
                {labelData.map(label => <option key={label.label_id} value={label.label_id}>{label.label_name}</option> )}
                </select>
            </label>

          
          <label className="font-bold"> Kategori:
          <select name="categories" className="mt-2 w-full px-4 py-3 leading-tight text-black border rounded shadow focus:outline-none focus:shadow-outline" onChange={(event) => handleSelectChangeInstance('categories', event.target.value)}>
            <option value="">Vælg kategori: </option>
            {categoryData.map(category => <option key={category.category_id} value={category.category_id}>{category.category_name}</option> )}
          </select>
          </label>

          <FormInput
            label="Antal på lager:"
            type="number"
            placeholder="Skriv antal her"
            name="inventory_stock"
            value={productData.inventory_stock}
            onChange={(value) => handleInputChangeInstance('inventory_stock', value)}
          />
            
            {prices.map((price, index) => (
            <fieldset key={price.price_id} className="border-4 border-solid black">
              <div className="px-2">
              <FormInput
                label={`Pris: ${index + 1}`}
                type="number"
                placeholder="Skriv pris på varen her"
                name="price"
                value={price.price}
                onChange={(value) => handlePriceOrDateChangeInstance('price', index)(value)}
              />

              <div>
                <p>Kampagne</p>
                <input 
                  type="checkbox" 
                  checked={price.is_campaign} 
                  onChange={(event) => handleIsCampaignChangeInstance(index)(event.target.checked)} 
                />
              </div>
              <FormInput
                label="Start dato"
                type="date"
                name="starting_at"
                value={price.starting_at}
                onChange={(value) => handlePriceOrDateChangeInstance('starting_at', index)(value)}
              />
              <FormInput
                label="Slut dato"
                type="date"
                name="ending_at"
                value={price.ending_at}
                onChange={(value) => handlePriceOrDateChangeInstance('ending_at', index)(value)}
              />
              <div className="flex flex-row justify-between font-bold">
              <button type="button" onClick={() => removePriceField(index)} disabled={prices.length <= 1}>Remove Price</button>
              <button type="button" onClick={addPriceField}>Add Price</button>
              </div>
                </div>
               </fieldset>
            
          ))}

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
