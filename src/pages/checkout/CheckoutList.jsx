import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart.js";
import usePrivateAxios from "../../hooks/usePrivateAxios.js";
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput.jsx";
import CheckoutListItem from "./CheckoutListItem.jsx";

function CheckoutList() {
  const { cart } = useCart();
  const [customer, setCustomer] = useState();
  const { auth } = useAuth();

  const navigate = useNavigate();

  const privateAxios = usePrivateAxios();
  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await privateAxios.get("/customers");
      console.log(response.data);
      setCustomer(response.data);
    };
    auth?.accessToken ? fetchCustomer() : setCustomer();
  }, [auth]);
  return (
    <div className="max-w-[900px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="flex flex-row items-start justify-center gap-2 mt-20 rounded">
        <section className="container w-1/3 bg-[#e8e3d8] p-4 mb-4 rounded md:p-10 sticky top-0 left-0">
          {customer && (
            <div className="pb-10 text-left border-b-2 border-black">
              <h3 className="font-bold">Sendes til:</h3>
              <p>{customer?.customer_name}</p>
              <p>{customer?.addresses[0]?.street}</p>
              <p>
                {customer?.addresses[0]?.zip_code}{" "}
                {customer?.addresses[0]?.city}
              </p>
            </div>
          )}
          <div className="flex flex-col justify-between gap-2 pt-2 md:items-end">
            <div className="flex flex-row justify-between md:gap-4 md:w-full">
              <p>Varer i alt: {cart.reduce((a, c) => c.quantity + a, 0)} stk</p>
              <p>
                {cart.length > 0
                  ? cart
                      .reduce(
                        (a, c) =>
                          c.quantity *
                            (c.prices.length > 1
                              ? c.prices[1].price
                              : c.prices[0].price) +
                          a,
                        0
                      )
                      .toFixed(2)
                  : "0.00"}{" "}
                kr.
              </p>
            </div>
            <div className="flex flex-row justify-between pb-2 border-b-2 border-black md:gap-4 md:w-full">
              <p>Levering</p>
              {cart.length > 0 ? <p>59.00 kr.</p> : <p> 0.00 kr.</p>}
            </div>
            <div className="flex flex-row justify-between text-xl font-bold md:gap-4 md:w-full">
              <p>I alt</p>
              <p>
                {cart.length > 0
                  ? (
                      cart.reduce(
                        (a, c) =>
                          c.quantity *
                            (c.prices.length > 1
                              ? c.prices[1].price
                              : c.prices[0].price) +
                          a,
                        0
                      ) + 59
                    ).toFixed(2)
                  : "0.00"}{" "}
                kr.
              </p>
            </div>
          </div>
          <div className="mt-8 text-left">
            <h3 className="mb-4 text-xl font-bold">Betalingsoplysninger</h3>
            <form>
              <FormInput
                label="Kortnummer"
                type="text"
                placeholder="Kortnummer"
              />
              <div className="flex flex-row w-full gap-2 mt-4">
                <FormInput
                  label="Udløbsdato"
                  type="text"
                  placeholder="fx 01/24"
                  className="w-1/2"
                />
                <FormInput
                  label="CVC"
                  type="text"
                  placeholder="CVC"
                  className="w-1/2"
                />
              </div>
              <button
                onClick={() => navigate("/cart/checkout")}
                className={`bg-[#d4793a] hover:bg-[#ecbc9a] text-white font-bold text-xl py-2 mt-2 rounded w-full ${
                  cart.length === 0 && "disabled cursor-not-allowed"
                }`}
              >
                Betal
              </button>
            </form>
          </div>
        </section>
        <section className="container w-2/3 bg-[#e8e3d8] p-4 mb-4 rounded md:p-10 overflow-y-scroll scrollbar-hide">
          <h1 className="pb-2 text-2xl font-bold text-left align-middle md:pb-4">
            Din kurv
          </h1>
          <table className="w-[100%] select-none" id="cart">
            <thead className="border-b-2 border-black">
              <tr className="text-left">
                <th>Produkt</th>
                <th>Stk pris</th>
                <th>Antal</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody className="">
              {cart.length > 0 &&
                cart.map(product => (
                  <CheckoutListItem
                    key={product.product_id}
                    product={product}
                  />
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default CheckoutList;
