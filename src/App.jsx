import Landingpage from "./pages/Landingpage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Createaccountpage from "./pages/Createaccountpage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/createaccount" element={<Createaccountpage />} />
    </Routes>
  );
}
