import { useEffect, useState } from "react";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";

export default function Shoppage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/products.json");
        const data = await response.json();
        let dataArray = Object.values(data)[0];

        if (filter){
          dataArray = dataArray.filter(product => product.labels.some(label => label.label_name.includes(filter)))
        }

        if (sort === "asc") {
          dataArray.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (sort === ">") {
          dataArray.sort((a, b) => a.prices[0].price - b.prices[0].price);
        } else if (sort === "<") {
          dataArray.sort((a, b) => b.prices[0].price - a.prices[0].price);
        }
        setProducts(dataArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, filter]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
  }

  function handleFilter(filterOptions){
    setFilter(filterOptions)
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar />
        <Search handleSort={handleSort} handleFilter={handleFilter} />
        <Items addToBasket={addToBasket} products={products} />
      </div>
      <Footer />
    </>
  );
}
