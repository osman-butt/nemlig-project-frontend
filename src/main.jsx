import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import { OrderProvider } from "./context/OrderProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  </HashRouter>
);
