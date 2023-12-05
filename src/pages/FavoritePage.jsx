import { useEffect, useState } from "react";
import usePrivateAxios from "../hooks/usePrivateAxios";
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
  const [category, setCategory] = useState("");

  const privateAxios = usePrivateAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchQuery ? "/favorites/search" : "/favorites";
        const response = await privateAxios.get(url, {
          params: {
            search: searchQuery,
            sort: sort,
            label: label,
            category: category,
          },
        });
        setProducts(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, label, searchQuery, category, privateAxios]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
  }

  function handleFilter(filterOptions) {
    setLabel(filterOptions);
  }

  function handleSearch(searchQuery) {
    setSearchQuery(searchQuery);
  }

  async function removeFromFavorites(product){
    try {
      await privateAxios.delete(`/favorites/${product.favorite_id}`);
      const newProducts = products.filter((item) => item.favorite_id !== product.favorite_id);
      setProducts(newProducts);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar setCategory={setCategory} />
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
        <Items addToBasket={addToBasket} products={products} removeFromFavorites={removeFromFavorites} />
      </div>
      <Footer />
    </>
  );
}
