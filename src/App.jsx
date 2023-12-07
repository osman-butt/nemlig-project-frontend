import Landingpage from "./pages/Landingpage";
import Shoppage from "./pages/Shoppage";
import Orderpage from "./pages/Orderpage";
import BasketPage from "./pages/BasketPage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Createaccountpage from "./pages/Createaccountpage.jsx";
import Adminpage from "./pages/Adminpage/Adminpage.jsx"
import { useEffect } from "react";
import Header from "./components/Header.jsx";
// import Formdialog from "./components/Formdialog.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import NotFoundpage from "./pages/NotFoundpage.jsx";
import useRefreshToken from "./hooks/useRefreshToken.js";
import useAuth from "./hooks/useAuth.js";

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/createaccount" element={<Createaccountpage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/admin" element={<Adminpage />} />
        {/* <Route path="/formdialog" element={<Formdialog />} /> */}
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/*" element={<NotFoundpage />} />
      </Routes>
    </>
  );
}
