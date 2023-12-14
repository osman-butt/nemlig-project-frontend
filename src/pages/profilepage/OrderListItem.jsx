function OrderListItem({ product }) {
  return (
    <>
      <tr className="text-left text-[14px] border-gray-500 border-b w-full">
        <td className="w-[30%] py-4" data-field="product-name">
          <p className="w-[135px] font-bold truncate md:hidden">
            {product.products.product_name}
          </p>
          <p className="hidden font-bold md:block">
            {product.products.product_name}
          </p>
          <p className="font-light">{product.products.product_underline}</p>
        </td>
        <td className="w-[20%]" data-field="price">
          {Number(product.unit_price_at_purchase).toFixed(2)} kr.
        </td>
        <td className="w-[20%]" data-field="toggle-quantity">
          <p className="mx-1 w-[30px] py-1 px-1">{product?.quantity}stk</p>
        </td>
        <td className="w-[15%] font-bold" data-field="price">
          {(Number(product.unit_price_at_purchase) * product.quantity).toFixed(
            2
          )}{" "}
          kr.
        </td>
      </tr>
    </>
  );
}

export default OrderListItem;
