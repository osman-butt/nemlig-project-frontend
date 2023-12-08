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
  const { getItem, setItem } = useLocalStorage("cart");

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

  // Increment cart item
  async function incrementCartItem(product) {
    const productIndex = cart.findIndex(
      item => item.product_id === product.product_id
    );

    const updatedBasket = [...cart];
    // Check if it exists in basket
    if (productIndex > -1) {
      updatedBasket[productIndex] = {
        ...updatedBasket[productIndex],
        quantity: updatedBasket[productIndex].quantity + 1,
      };
    } else {
      const newItem = { ...product, quantity: 1 };
      updatedBasket.push(newItem);
    }
    if (auth?.accessToken) {
      await privateAxios.put("/cart/items", {
        product_id: product.product_id,
        quantity: 1,
      });
      setCart(updatedBasket);
    } else {
      setCart(updatedBasket);
      setItem(updatedBasket);
    }
  }

  // Increment cart item
  async function decrementCartItem(product) {
    const productIndex = cart.findIndex(
      item => item.product_id === product.product_id
    );

    const updatedBasket = [...cart];
    updatedBasket[productIndex] = {
      ...updatedBasket[productIndex],
      quantity: updatedBasket[productIndex].quantity - 1,
    };

    updatedBasket[productIndex].quantity === 0 &&
      updatedBasket.splice(productIndex, 1);
    if (auth?.accessToken) {
      await privateAxios.put("/cart/items", {
        product_id: product.product_id,
        quantity: -1,
      });
      setCart(updatedBasket);
    } else {
      setCart(updatedBasket);
      setItem(updatedBasket);
    }
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
    <CartContext.Provider
      value={{ cart, setCart, incrementCartItem, decrementCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartProvider };
