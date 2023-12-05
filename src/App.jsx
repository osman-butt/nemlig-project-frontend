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
import useLocalStorage from "./hooks/useLocalStorage.js";
// import Formdialog from "./components/Formdialog.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import NotFoundpage from "./pages/NotFoundpage.jsx";
import useRefreshToken from "./hooks/useRefreshToken.js";
import useAuth from "./hooks/useAuth.js";

export default function App() {
  const [basket, setBasket] = useState([]);

  const { getItem, setItem } = useLocalStorage("basket");
  const refreshToken = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      try {
        const basketArray = getItem() || [];
        setBasket(basketArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Persist user when refresh
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refreshToken();
      } catch (err) {
        console.error(err);
      }
    };
    !auth?.accessToken && verifyRefreshToken();
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
    setItem(updatedBasket);
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
    setItem(updatedBasket);
    setBasket(updatedBasket);
  };

  const addToBasket = product => {
    const productIndex = basket.findIndex(
      item => item.product_id === product.product_id
    );
    const updatedBasket = [...basket];
    // Check if it exists in basket
    if (productIndex > -1) {
      updatedBasket[productIndex] = {
        ...updatedBasket[productIndex],
        quantity: updatedBasket[productIndex].quantity + 1,
      };
    } else {
      const newItem = { ...product, quantity: 1 };
      updatedBasket.push(newItem);
    }
    setItem(updatedBasket);
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
        <Route path="/shop" element={<Shoppage addToBasket={addToBasket} />} />
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
        <Route
          path="/favorites"
          element={<FavoritePage addToBasket={addToBasket} />}
        />
        <Route path="/*" element={<NotFoundpage />} />
      </Routes>
    </>
  );
}
