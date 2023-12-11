import { useContext, useEffect, useState } from "react";
import useAuth from "./useAuth";
import usePrivateAxios from "./usePrivateAxios";
import useCart from "./useCart";
import { useNavigate } from "react-router-dom";
import OrderContext from "../context/OrderProvider";

function useCheckout(cardNumber, expiry, cvc) {
  const [customer, setCustomer] = useState();
  const { auth } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const privateAxios = usePrivateAxios();
  const { setCart } = useCart();
  const { setOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  async function handleCheckout(e) {
    e.preventDefault();
    try {
      const response = await privateAxios.post("/orders", {
        cardNo: cardNumber,
        expiry: expiry,
        cvc: cvc,
      });
      setCart([]);
      setOrder(response.data.order_id);
      setError(false);
      setErrorMessage("");
      navigate("/order");
    } catch (error) {
      setError(true);
      setErrorMessage(error.response?.data.message);
      console.log(error.response?.data.cart_items);
      if (error.response?.data.cart_items) {
        setCart(
          error.response?.data.cart_items.map(item => ({
            ...item.products,
            quantity: item.quantity,
          }))
        );
      }
    }
  }

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await privateAxios.get("/customers");
      setCustomer(response.data);
    };
    auth?.accessToken ? fetchCustomer() : setCustomer();
  }, [auth]);

  return { handleCheckout, customer, error, errorMessage };
}

export default useCheckout;
