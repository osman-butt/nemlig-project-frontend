import Landingpage from "./pages/Landingpage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  );
}
