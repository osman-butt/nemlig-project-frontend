import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Pagination from "../components/Pagination";

export default function Shoppage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "http://localhost:3000/api/v1/products";
        const url = searchQuery ? `${baseUrl}/search` : baseUrl;

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

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar setCategory={setCategory} setPage={setPage}/>
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
        <Items addToBasket={addToBasket} products={products} />
        {!searchQuery && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
      </div>
      <Footer />
    </>
  );
}
