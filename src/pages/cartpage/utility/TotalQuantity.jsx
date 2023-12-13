function TotalQuantity({ cart, getLowestPrice }) {
  return (
    <>
      <p>Varer i alt: {cart.reduce((a, c) => c.quantity + a, 0)} stk</p>
      <p>
        {cart.length > 0
          ? cart
              .reduce((a, c) => c.quantity * getLowestPrice(c).price + a, 0)
              .toFixed(2)
          : "0.00"}{" "}
        kr.
      </p>
    </>
  );
}

export default TotalQuantity;
