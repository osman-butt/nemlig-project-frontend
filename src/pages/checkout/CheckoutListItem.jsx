function CheckoutListItem({ product }) {
  return (
    <>
      <tr className="text-left text-[14px] border-gray-500 border-b w-full">
        <td className="w-[30%] py-4" data-field="product-name">
          <p className="w-[135px] font-bold truncate md:hidden">
            {product.product_name}
          </p>
          <p className="hidden font-bold md:block">{product.product_name}</p>
          <p className="font-light">{product.product_underline}</p>
        </td>
        <td className="w-[20%]" data-field="price">
          {product.prices.length > 1 ? (
            <>
              <p className="line-through">
                {product.prices[0].price.toFixed(2)} kr.
              </p>
              <p className="font-bold">
                {product.prices[1].price.toFixed(2)} kr.
              </p>
            </>
          ) : (
            <p className="font-bold">
              {product.prices[0].price.toFixed(2)} kr.
            </p>
          )}
        </td>
        <td className="w-[20%]" data-field="toggle-quantity">
          <p className="mx-1 w-[30px] py-1 px-1 font-bold ">
            {product.quantity}
          </p>
        </td>
        <td className="w-[15%]" data-field="price">
          {product.prices.length > 1 ? (
            <>
              <p className="line-through">
                {(product.prices[0].price * product.quantity).toFixed(2)} kr.
              </p>
              <p className="font-bold">
                {(product.prices[1].price * product.quantity).toFixed(2)} kr.
              </p>
            </>
          ) : (
            <p className="font-bold">
              {(product.prices[0].price * product.quantity).toFixed(2)} kr.
            </p>
          )}
        </td>
      </tr>
    </>
  );
}

export default CheckoutListItem;
