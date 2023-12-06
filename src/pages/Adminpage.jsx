import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Adminhead from "../components/Adminhead";
import Search from "../components/Search";
import Admintable from "../components/Admintable";
import Pagination from "../components/Pagination.jsx";
import { useState, useEffect } from "react";
import axios from "../api/axios.js";

export default function Adminpage() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
          },
        });
        setData(response.data.data);
        if (response.data.meta) {
          setTotalPages(response.data.meta.pagination.last_page);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchQuery, sort, label, page]);

  function handleSort(sortOptions) {
    setSort(sortOptions);
    // setPage(1);
  }

  function handleFilter(filterOptions) {
    setLabel(filterOptions);
    // setPage(1);
  }

  function handleSearch(searchQuery) {
    setSearchQuery(searchQuery);
  }

  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <Adminhead />
      <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
      <Admintable data={data} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      <Footer />
    </div>
  );
}
