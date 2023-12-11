import { useEffect, useState } from "react";
import TableItem from "./TableItem.jsx";
import usePrivateAxios from "../../hooks/usePrivateAxios";
import useAuth from "../../hooks/useAuth.js";
import OrderListItem from "./OrderListItem.jsx";

function Table() {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuth();
  const privateAxios = usePrivateAxios();
  useEffect(() => {
    const fetch = async () => {
      const response = await privateAxios.get("/orders");
      setOrders(response.data);
    };
    fetch();
  }, [auth]);

  function showOrder(order) {
    console.log(order);
    setOrderDetails(order);
    setIsOpen(prev => !prev);
  }

  return (
    <div className="max-w-[600px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="flex flex-row justify-center mt-8 bg-[#e8e3d8] rounded mb-2">
        {!isOpen && (
          <section className="container w-full p-4 mb-4 rounded md:p-10">
            <div className="flex flex-row justify-between mb-2 align-middle">
              <h1 className="pb-2 text-4xl text-left align-middle md:pb-4">
                Tidligere ordre
              </h1>
            </div>
            <table className="w-[100%] select-none mx-auto" id="cart">
              <thead className="border-b-2 border-black">
                <tr className="text-left">
                  <th className="text-left">Ordre nr</th>
                  <th className="text-center">Dato</th>
                  <th className="text-center">Produkter</th>
                  <th className="text-right">Beløb</th>
                  <th className="text-right"></th>
                </tr>
              </thead>
              <tbody className="">
                {orders.length > 0 &&
                  orders.map(order => (
                    <TableItem
                      key={order.order_id}
                      order={order}
                      showOrder={showOrder}
                    />
                  ))}
              </tbody>
            </table>
          </section>
        )}
        {isOpen && (
          //   <div className=" w-[500px]">
          <div open className="bg-[#e8e3d8] rounded block w-full">
            <h2 className="py-4 text-2xl font-bold">
              Ordre nummer: {orderDetails.order_id}
            </h2>
            <p className="font-bold">
              Total:{" "}
              {orderDetails?.order_items
                .reduce((total, item) => {
                  const itemTotal = item.unit_price_at_purchase * item.quantity;
                  return total + itemTotal;
                }, 0)
                .toFixed(2)}{" "}
              kr. <span className="font-light">(eksl. levering)</span>
            </p>
            <section className="p-4 overflow-y-scroll scrollbar-hide">
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
                  {orderDetails.order_items.length > 0 &&
                    orderDetails.order_items.map(item => (
                      <OrderListItem key={item.product_id} product={item} />
                    ))}
                </tbody>
              </table>
            </section>
            <button
              className="px-4 py-2 mb-4 text-white bg-[#d4793a] rounded"
              onClick={() => setIsOpen(false)}
            >
              Luk
            </button>
          </div>
          //   </div>
        )}
      </div>
    </div>
  );
}

export default Table;
