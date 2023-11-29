import { useEffect, useState } from "react";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Items from "../components/Items";
import Footer from "../components/Footer";

export default function FavoritePage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/favorites");
        let data = await response.json();
        console.log(data);

        if (filter) {
          data = data.filter((product) => product.labels.some((label) => label.label_name.includes(filter)));
        }

        if (sort === "asc") {
          data.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (sort === ">") {
          data.sort((a, b) => a.prices[0].price - b.prices[0].price);
        } else if (sort === "<") {
          data.sort((a, b) => b.prices[0].price - a.prices[0].price);
        }
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, filter]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
  }

  function handleFilter(filterOptions) {
    setFilter(filterOptions);
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
