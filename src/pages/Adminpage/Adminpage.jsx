import image from "../../assets/hero.jpg";
import Footer from "../../components/Footer.jsx";
import Search from "../../components/Search.jsx";
import Admintable from "./AdminComponents/Admintable.jsx";
import Pagination from "../../components/Pagination.jsx";
import { useState, useEffect } from "react";
import axios from "../../api/axios.js";
import useAuth from "../../hooks/useAuth.js";
import { Navigate } from "react-router-dom";

export default function Adminpage() {
  const { auth } = useAuth();

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [labelData, setLabelData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [update, setUpdate] = useState(false);

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
        setUpdate(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchQuery, sort, label, page, update]);

  // Fetch all labels and categories
  useEffect(() => {
    const fetchLabelsandCategories = async () => {
      try {
        const labelResponse = await axios.get("/products/labels");
        const categoriesResponse = await axios.get("/products/categories");
        setLabelData(labelResponse.data);
        setCategoryData(categoriesResponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLabelsandCategories();
  }, []);

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
    setPage(1);
  }

  if (!auth || !auth.user_roles?.includes("admin")) {
    return <Navigate to="/*" />;
  }

  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="pt-2">
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
      </div>
      <Admintable data={data} labelData={labelData} categoryData={categoryData} setData={setData} setUpdate={setUpdate} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      <Footer />
    </div>
  );
}
