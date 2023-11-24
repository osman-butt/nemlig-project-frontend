import { useEffect, useState } from "react";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Items from "../components/Items";
import Footer from "../components/Footer";

export default function FavoritePage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/products.json");
        const data = await response.json();
        const dataArray = Object.values(data)[0];

        if (sort === "asc") {
          dataArray.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (sort === "desc") {
          dataArray.sort((a, b) => b.product_name.localeCompare(a.product_name));
        }

        setProducts(dataArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar />
        <Search onSort={handleSort} />
        <Items addToBasket={addToBasket} products={products} />
      </div>
      <Footer />
    </>
  );
}