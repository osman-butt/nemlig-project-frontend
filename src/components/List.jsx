import useCart from "../hooks/useCart";
import Listitem from "./Listitem";

function List() {
  const { cart } = useCart();
  return (
    <div className="max-w-[900px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="flex flex-row justify-center mt-20 bg-[#e8e3d8] rounded">
        <section className="container w-full p-4 mb-4 rounded md:p-10">
          <h1 className="pb-2 text-4xl text-left md:pb-4">Din kurv</h1>
          <table className="w-[100%] select-none" id="cart">
            <thead className="border-b-2 border-black">
              <tr className="text-left">
                <th className="hidden md:block"></th>
                <th></th>
                <th></th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody className="">
              {cart.length > 0 &&
                cart.map(product => (
                  <Listitem key={product.product_id} product={product} />
                ))}
            </tbody>
          </table>
          {cart.length === 0 && (
            <p className="pt-2 text-xl font-bold">Kurven er tom!</p>
          )}
          <div className="flex flex-col justify-between gap-2 pt-4 md:items-end">
            <div className="flex flex-row justify-between md:gap-4 md:w-[300px]">
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
            <div className="flex flex-row justify-between border-b-2 pb-2 border-black md:gap-4 md:w-[300px]">
              <p>Levering</p>
              {cart.length > 0 ? <p>59.00 kr.</p> : <p> 0.00 kr.</p>}
            </div>
            <div className="flex flex-row justify-between text-xl font-bold md:gap-4 md:w-[300px]">
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
            {cart.length > 0 && (
              <button
                onClick={() => console.log("BESTILT")}
                className={`bg-[#d4793a] hover:bg-[#ecbc9a] text-white font-bold text-xl py-2 mt-2 rounded md:w-[300px] ${
                  cart.length === 0 && "disabled cursor-not-allowed"
                }`}
              >
                Bestil
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default List;
