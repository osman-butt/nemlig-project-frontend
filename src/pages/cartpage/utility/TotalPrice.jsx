function TotalPrice({ cart, getLowestPrice }) {
  return (
    <>
      <p>I alt</p>
      <p>
        {cart.length > 0
          ? (
              cart.reduce(
                (a, c) => c.quantity * getLowestPrice(c).price + a,
                0
              ) + 59
            ).toFixed(2)
          : "0.00"}{" "}
        kr.
      </p>
    </>
  );
}

export default TotalPrice;
