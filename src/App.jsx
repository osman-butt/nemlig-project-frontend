import Landingpage from "./pages/Landingpage";
import Shoppage from "./pages/Shoppage";
import BasketPage from "./pages/BasketPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/shop" element={<Shoppage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}
