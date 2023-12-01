import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";

export default function Shoppage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "http://localhost:3000/products";
        const url = searchQuery ? `${baseUrl}/search` : baseUrl;

        const response = await axios.get(url, {
          params: {
            search: searchQuery,
            sort: sort,
            label: label,
          },
        });
        //let dataArray = Object.values(response.data)[0];
        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, label, searchQuery]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
  }

  function handleFilter(filterOptions) {
    setLabel(filterOptions);
  }

  function handleSearch(searchQuery) {
    setSearchQuery(searchQuery);
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar />
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
        <Items addToBasket={addToBasket} products={products} />
      </div>
      <Footer />
    </>
  );
}
