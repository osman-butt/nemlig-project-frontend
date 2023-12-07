import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth.js";
import usePrivateAxios from "../hooks/usePrivateAxios.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const CartContext = createContext({});

// All children wrapped in this component, gets access to the states defined below
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { auth } = useAuth();
  const privateAxios = usePrivateAxios();
  const { getItem, setItem } = useLocalStorage("basket");

  function getCart() {
    const cartData = getItem() || [];
    return cartData;
  }

  async function getCartDB() {
    const response = await privateAxios.get("/cart");

    const items = response.data.cart_items.map(item => ({
      ...item.products,
      quantity: item.quantity,
    }));
    return items;
  }

  async function deleteCartDB() {
    const response = await privateAxios.delete("/cart/items");
    return response;
  }

  async function deleteCartLocalStorage() {
    setItem([]);
    return getItem();
  }

  async function postCartDB(data) {
    const response = await privateAxios.post("/cart/items", data);
    const items = response.data.cart_items.map(item => ({
      ...item.products,
      quantity: item.quantity,
    }));
    return items;
  }

  useEffect(() => {
    const fetchLocalStorage = () => {
      const cartData = getCart();
      console.log(cartData);
      setCart(cartData);
    };
    const fetchDB = async () => {
      const cartData = await getCartDB();
      console.log("Cart:", cartData);
      setCart(cartData);
    };

    const removeLocalStorage = () => {
      deleteCartLocalStorage();
    };

    const removeCartDB = async () => {
      await deleteCartDB();
    };

    const postLocalCartToDB = async data => {
      const cartData = await postCartDB(data);
      setCart(cartData);
    };

    if (auth?.accessToken) {
      if (getCart().length == 0) {
        fetchDB();
      } else {
        const localStorageData = getCart();
        // POST LOCALSTORAGE TO DB
        postLocalCartToDB(localStorageData);
        // DELETE LOCALSTORAGE
        removeLocalStorage();
      }
    } else {
      fetchLocalStorage();
    }

    // auth?.accessToken ? fetchDB() : fetchLocalStorage();
  }, [auth]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartProvider };
