import Landingpage from "./pages/Landingpage";
import Shoppage from "./pages/Shoppage";
import Orderpage from "./pages/Orderpage";
import BasketPage from "./pages/BasketPage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Createaccountpage from "./pages/Createaccountpage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/createaccount" element={<Createaccountpage />} />
      <Route path="/shop" element={<Shoppage />} />
      <Route path="/order" element={<Orderpage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
    </Routes>
  );
}
