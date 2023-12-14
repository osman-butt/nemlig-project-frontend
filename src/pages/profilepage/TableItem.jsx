import { useEffect } from "react";
import ButtonSmallPrimary from "../../components/buttons/ButtonSmallPrimary";

function TableItem({ order, showOrder }) {
  const dateConfig = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "Europe/Copenhagen",
  };

  useEffect(() => {}, [order]);

  return (
    <>
      <tr
        className="text-left text-[14px] border-gray-500 border-b"
        onClick={() => console.log(order.order_id)}
      >
        <td className="py-4" data-field="product-name">
          <p className="w-[20%] font-bold text-center">{order.order_id}</p>
        </td>
        <td className="py-4 w-[20%]" data-field="product-name">
          <p className="font-bold text-center">
            {new Date(order.order_date).toLocaleString("da-DK", dateConfig)}
          </p>
        </td>
        <td className="w-[20%] py-4" data-field="product-name">
          <p className="font-bold text-center truncate">
            {order?.order_items.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </p>
        </td>
        <td className="w-[20%] py-4" data-field="product-name">
          <p className="font-bold text-right">
            {order?.order_items
              .reduce((total, item) => {
                const itemTotal = item.unit_price_at_purchase * item.quantity;
                return total + itemTotal;
              }, 0)
              .toFixed(2)}{" "}
            kr.
          </p>
        </td>
        <td className="w-[20%] py-4 text-center" data-field="product-name">
          {/* <button
            onClick={() => showOrder(order)}
            className="px-2 py-2 text-white bg-[#d4793a] rounded"
          >
            Se ordre
          </button> */}
          <ButtonSmallPrimary
            onClick={() => showOrder(order)}
            className={"p-2"}
          >
            Se ordre
          </ButtonSmallPrimary>
        </td>
      </tr>
    </>
  );
}

export default TableItem;
