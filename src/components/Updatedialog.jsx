import FormInput from "./FormInput";
import axios from "../api/axios";
import { useState } from "react";

export default function Updatedialog({ closeDialog, data, labelData, categoryData }) {

  const [productData, setProductData] = useState({
    product_name: data.product_name,
    product_underline: data.product_underline,
    product_description: data.product_description,
    images: [{ image_url: data.images[0].image_url }],
    labels: [],
    categories: [],
    inventory_stock: data.inventory.inventory_stock,
    prices: [
      {
        price: data.prices[0].price,
        starting_at: data.prices[0].starting_at,
        is_campaign: data.prices[0].is_campaign,
        ending_at: data.prices[0].ending_at,
      },
    ],
  });

  async function handleUpdateProduct(event){
    event.preventDefault();
    try {
      const response = await axios.put(`/products/${data.product_id}`, productData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: name === "inventory_stock" ? Number(value) : value,
    });
  }

  return (
    <div className="fixed overflow-scroll inset-0 pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="">
        <h1 className="text-center text-2xl font-bold py-3">Opdater vare</h1>
        <form onSubmit={handleUpdateProduct} className="gap-y-2 px-10 grid">
          <FormInput label="Produktnavn:" type="text" placeholder="Skriv navn på produkt her" name="product_name" value={productData.product_name} onChange={handleInputChange}/>
          <FormInput label="Produkt understregning:" type="text" placeholder="Skriv navn på produkt her" name="product_underline" value={productData.product_underline} onChange={handleInputChange} />
          <FormInput label="Produktbeskrivelse:" type="text" placeholder="Skriv navn på produkt her" name="product_description" value={productData.product_description} onChange={handleInputChange} />
          <FormInput label="Billede:" type="text" placeholder="Indsæt link til billede her" value={productData.images[0].image_url} />
          <label className="font-bold"> Label:
          <select className="mt-2 w-full px-4 py-3 leading-tight text-black border rounded shadow focus:outline-none focus:shadow-outline">
            <option value={data.labels[0] && data.labels[0].label_id}>{data.labels[0] && data.labels[0].label_name ? data.labels[0].label_name : "Vælg label"}</option>
            {labelData.map((label) => (
              <option key={label.label_id} value={label.label_id}>
                {label.label_name}
              </option>
            ))}
          </select>
          </label>
          <label className="font-bold"> Kategori:
          <select className="mt-2 w-full px-4 py-3 leading-tight text-black border rounded shadow focus:outline-none focus:shadow-outline">
            <option value={data.categories[0] && data.categories[0].category_id}>{data.categories[0] && data.categories[0].category_name ? data.categories[0].category_name : "Vælg kategori"}</option>
            {categoryData.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </option>
            ))}
          </select>
          </label>
          <FormInput label="Antal på lager:" type="text" placeholder="Skriv antal her" name="inventory_stock" value={productData.inventory_stock} />
          <FormInput label="Pris:" type="text" placeholder="Skriv pris på varen her" value={productData.prices[0].price + " kr."} />
          <FormInput label="Start dato" type="date" value={productData.prices[0].starting_at} />
          <div>
            <p>Kampagne</p>
            <input type="checkbox" checked={data.prices[0].is_campaign} />
          </div>
          <FormInput label="Slut dato" type="date" value={data.prices[0].ending_at} />
          <div>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md ml-[7rem] mb-4 my-2 py-2 text-black font-medium text-xl">
              Opdater
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
