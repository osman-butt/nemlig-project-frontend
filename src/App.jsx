import Landingpage from "./pages/Landingpage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Loginpage />} />
    </Routes>
  );
}
