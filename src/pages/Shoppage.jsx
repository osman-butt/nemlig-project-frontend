import {useEffect, useState} from "react";
import image from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Items from "../components/Items";

export default function Shoppage() {
const [items, setItems] = useState([]);
const [sort, setSort] = useState("");
const [category, setCategory] = useState("");

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("./src/products-data.json");
      const data = await response.json();
      const dataArray = Object.values(data)[0];
      setItems(dataArray);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);
  
function handleSort(sortOption){
  console.log(sortOption);
}

function handleCategory(categoryOption){
  console.log(categoryOption);
}

  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Navbar />
        <Search onSort={handleSort} onCategory={handleCategory} />
        <Items data={items} />
      </div>
      <Footer />
    </>
  );
}
