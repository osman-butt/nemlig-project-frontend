import Landingpage from "./pages/Landingpage";
import Shoppage from "./pages/Shoppage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/shop" element={<Shoppage />} />
    </Routes>
  );
}
