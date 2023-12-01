import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Items from "../components/Items";
import Footer from "../components/Footer";

export default function FavoritePage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "http://localhost:3000/favorites";
        const url = searchQuery ? `${baseUrl}/search` : baseUrl;

        const response = await axios.get(url, {
          params: {
            search: searchQuery,
            sort: sort,
            label: label,
          },
        });
        setProducts(response.data);
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
