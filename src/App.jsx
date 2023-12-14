import Aboutpage from "./pages/aboutpage/Aboutpage.jsx";
import Shoppage from "./pages/shoppage/Shoppage.jsx";
import Orderpage from "./pages/orderpage/Orderpage.jsx";
import CartPage from "./pages/cartpage/CartPage.jsx";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/loginpage/Loginpage.jsx";
import Createaccountpage from "./pages/createaccountpage/Createaccountpage.jsx";
import Adminpage from "./pages/Adminpage/Adminpage.jsx";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
// import Formdialog from "./components/Formdialog.jsx";
import FavoritePage from "./pages/favoritepage/FavoritePage.jsx";
import NotFoundpage from "./pages/404page/NotFoundpage.jsx";
import useRefreshToken from "./hooks/useRefreshToken.js";
import useAuth from "./hooks/useAuth.js";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import ProfilePage from "./pages/profilepage/ProfilePage.jsx";
import Landingpage from "./pages/landingpage/Landingpage.jsx";

export default function App() {
  const refreshToken = useRefreshToken();
  const { auth } = useAuth();

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

  return (
    <div className="font-general">
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/createaccount" element={<Createaccountpage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<Adminpage />} />
        {/* <Route path="/formdialog" element={<Formdialog />} /> */}
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundpage />} />
      </Routes>
    </div>
  );
}
