import Landingpage from "./pages/Landingpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  );
}

export default App;
