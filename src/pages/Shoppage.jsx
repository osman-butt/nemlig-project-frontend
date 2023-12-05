import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Pagination from "../components/Pagination";
import usePrivateAxios from "../hooks/usePrivateAxios.js";
import useAuth from "../hooks/useAuth.js";


export default function Shoppage({ addToBasket }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const privateAxios = usePrivateAxios();

  const { auth } = useAuth(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = auth && auth.user_email ? (searchQuery ? "/products/authenticated/search" : "/products/authenticated") : (searchQuery ? "/products/search" : "/products");
        const axiosInstance = auth && auth.user_email ? privateAxios : axios;

        const response = await axiosInstance.get(url, {
          params: {
            search: searchQuery,
            sort: sort,
            label: label,
            page: page,
            category: category,
          },
        });
        setProducts(response.data.data);
        console.log(response.data.data);
        if (response.data.meta) {
          setTotalPages(response.data.meta.pagination.last_page);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sort, label, searchQuery, page, category, privateAxios, auth]);

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
    setPage(1);
  }

  async function addToFavorites(product) {
    try {
      await privateAxios.post("/favorites", {
        product_id: product.product_id,
      });
      // update state of products - return a new array that includes the updated product (added to favorite) and all the other products so we dont have to refetch each time
      setProducts(products.map(p => p.product_id === product.product_id ? {...p, favorite_id: 1} : p))
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromFavorites(product){
    try {
      await privateAxios.delete(`/favorites/${product.favorite_id}`);
      // update state of products - return a new array that includes the updated product (removed from favorite) and all the other products so we dont have to refetch each time
      setProducts(products.map(item => item.product_id === product.product_id ? {...item, favorite_id: null} : item));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Navbar setCategory={setCategory} setPage={setPage}/>
        <Search handleSort={handleSort} handleFilter={handleFilter} handleSearch={handleSearch} />
        <Items addToBasket={addToBasket} products={products} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
        {<Pagination page={page} totalPages={totalPages} setPage={setPage} />}
      </div>
      <Footer />
    </>
  );
}
