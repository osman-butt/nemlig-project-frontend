import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Pagination from "../components/Pagination";
import usePrivateAxios from "../hooks/usePrivateAxios.js";

export default function Shoppage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const privateAxios = usePrivateAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchQuery ? "/products/search" : "/products";

        const response = await axios.get(url, {
          params: {
            search: searchQuery,
            sort: sort,
            label: label,
            page: page,
            category: category,
          },
        });
        setProducts(response.data.data);
        if (response.data.meta) {
          setTotalPages(response.data.meta.pagination.last_page);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, label, searchQuery, page, category]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
    // setPage(1);
  }

  function handleFilter(filterOptions) {
    setLabel(filterOptions);
    setPage(1);
  }

  function handleSearch(searchQuery) {
    setSearchQuery(searchQuery);
  }

  async function addToFavorites(product) {
    try {
      await privateAxios.post("/favorites", {
        product_id: product.product_id,
      });
      // OPDATER STATE/REFETCH HERE
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar setCategory={setCategory} setPage={setPage}/>
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
        <Items addToBasket={addToBasket} products={products} addToFavorites={addToFavorites} />
        {!searchQuery && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
      </div>
      <Footer />
    </>
  );
}
