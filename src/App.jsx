import Landingpage from "./pages/Landingpage";
import Shoppage from "./pages/Shoppage";
import Orderpage from "./pages/Orderpage";
import BasketPage from "./pages/BasketPage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Createaccountpage from "./pages/Createaccountpage.jsx";
import Adminpage from "./pages/Adminpage.jsx";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
// import Formdialog from "./components/Formdialog.jsx";

export default function App() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/basket.json");
        const data = await response.json();
        const dataArray = Object.values(data)[0];
        setBasket(dataArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Function to add quantity
  const addQuantity = product_id => {
    const productIndex = basket.findIndex(
      item => item.product_id === product_id
    );

    const updatedBasket = [...basket];
    updatedBasket[productIndex] = {
      ...updatedBasket[productIndex],
      quantity: updatedBasket[productIndex].quantity + 1,
    };

    setBasket(updatedBasket);
  };

  // Function to deduct quantity
  const deductQuantity = product_id => {
    const productIndex = basket.findIndex(
      item => item.product_id === product_id
    );

    const updatedBasket = [...basket];
    updatedBasket[productIndex] = {
      ...updatedBasket[productIndex],
      quantity: updatedBasket[productIndex].quantity - 1,
    };

    updatedBasket[productIndex].quantity === 0 &&
      updatedBasket.splice(productIndex, 1);

    setBasket(updatedBasket);
  };

  return (
    <>
      <Header
        basket={basket}
        addQuantity={addQuantity}
        deductQuantity={deductQuantity}
      />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/createaccount" element={<Createaccountpage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/order" element={<Orderpage />} />
        <Route
          path="/basket"
          element={
            <BasketPage
              basket={basket}
              addQuantity={addQuantity}
              deductQuantity={deductQuantity}
            />
          }
        />
        <Route path="/admin" element={<Adminpage />} />
        {/* <Route path="/formdialog" element={<Formdialog />} /> */}
      </Routes>
    </>
  );
}
