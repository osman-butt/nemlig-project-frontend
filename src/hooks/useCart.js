import { useContext } from "react";
import CartContext from "../context/CartProvider.jsx";

// This custom hook serves as a wrapper for the CartContext

export default function useCart() {
  return useContext(CartContext);
}
