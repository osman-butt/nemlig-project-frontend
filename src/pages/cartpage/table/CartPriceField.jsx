function CartPriceField({ lowestPrice, highestPrice }) {
  return (
    <>
      {lowestPrice.price !== highestPrice.price ? (
        <>
          <p className="line-through">{highestPrice.price.toFixed(2)} kr.</p>
          <p className="font-bold">{lowestPrice.price.toFixed(2)} kr.</p>
        </>
      ) : (
        <p className="font-bold">
          {lowestPrice && lowestPrice.price.toFixed(2)} kr.
        </p>
      )}
    </>
  );
}

export default CartPriceField;
