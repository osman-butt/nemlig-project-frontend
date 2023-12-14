import useCart from "../../../hooks/useCart.js";
import CartTable from "../table/CartTable.jsx";
import CartButton from "../button/CartButton.jsx";
import TotalPrice from "../utility/TotalPrice.jsx";
import TotalQuantity from "../utility/TotalQuantity.jsx";
import CartTableRow from "../table/CartTableRow.jsx";
import Container from "../../../components/container/Container.jsx";

function CartContainer() {
  const { cart } = useCart();

  function getLowestPrice(c) {
    return c.prices.length > 0
      ? c.prices.reduce((prev, curr) => (prev.price < curr.price ? prev : curr))
      : null;
  }

  return (
    <Container maxWidth={"900px"}>
      <div className="flex flex-row justify-between mb-2 align-middle">
        <h1 className="pb-2 text-4xl text-left align-middle md:pb-4">
          Din kurv
        </h1>
      </div>
      <CartTable>
        {cart.length > 0 &&
          cart.map(product => (
            <CartTableRow key={product.product_id} product={product} />
          ))}
      </CartTable>
      {cart.length === 0 && (
        <p className="pt-2 text-xl font-bold">Kurven er tom!</p>
      )}
      <div className="flex flex-col justify-between gap-2 pt-4 md:items-end">
        <div className="flex flex-row justify-between md:gap-4 md:w-[300px]">
          <TotalQuantity cart={cart} getLowestPrice={getLowestPrice} />
        </div>
        <div className="flex flex-row justify-between border-b-2 pb-2 border-black md:gap-4 md:w-[300px]">
          <p>Levering</p>
          {cart.length > 0 ? <p>59.00 kr.</p> : <p> 0.00 kr.</p>}
        </div>
        <div className="flex flex-row justify-between text-xl font-bold md:gap-4 md:w-[300px]">
          <TotalPrice cart={cart} getLowestPrice={getLowestPrice} />
        </div>
        <CartButton cart={cart} />
      </div>
    </Container>
  );
}

export default CartContainer;
