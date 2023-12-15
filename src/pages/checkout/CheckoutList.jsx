import { useEffect } from "react";
import FormInput from "../../components/forms/FormInput.jsx";
import CheckoutListItem from "./CheckoutListItem.jsx";
import useCheckout from "../../hooks/useCheckout.js";
import usePayment from "../../hooks/usePayment.js";
import useCart from "../../hooks/useCart.js";
import ButtonFullPrimary from "../../components/buttons/ButtonFullPrimary.jsx";

function CheckoutList() {
  const { cart } = useCart();

  const {
    cardNumber,
    expiry,
    cvc,
    handleCardNumberChange,
    handleExpiryChange,
    handleCvcChange,
  } = usePayment();

  const { handleCheckout, customer, error, errorMessage } = useCheckout(
    cardNumber,
    expiry,
    cvc
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[900px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="items-start justify-center gap-2 mt-20 rounded md:flex md:flex-row">
        <section className="container w-full md:w-1/3 bg-[#e8e3d8] p-4 mb-4 rounded md:p-10 md:sticky md:top-0 md:left-0">
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
            <div className="flex flex-row justify-between md:gap-2 md:w-full">
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
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              <div className="flex flex-row w-full gap-2 mt-4">
                <FormInput
                  label="Udløbsdato"
                  type="text"
                  placeholder="fx 01/24"
                  className="w-1/2"
                  value={expiry}
                  onChange={handleExpiryChange}
                />
                <FormInput
                  label="CVC"
                  type="text"
                  placeholder="CVC"
                  className="w-1/2"
                  value={cvc}
                  onChange={handleCvcChange}
                />
              </div>
              {error ? (
                <p className="pb-4 text-center text-red-600">{errorMessage}</p>
              ) : (
                <p></p>
              )}
              <ButtonFullPrimary
                onClick={handleCheckout}
                className={`mt-2 ${
                  cart.length === 0 && "disabled cursor-not-allowed"
                }`}
              >
                Betal
              </ButtonFullPrimary>
            </form>
          </div>
        </section>
        <section className="container w-full md:w-2/3 bg-[#e8e3d8] p-4 mb-4 rounded md:p-10 overflow-y-scroll scrollbar-hide">
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
