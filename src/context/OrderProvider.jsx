import { createContext, useState } from "react";

const OrderContext = createContext({});

// All children wrapped in this component, gets access to the states defined below
function OrderProvider({ children }) {
  const [order, setOrder] = useState();

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
export { OrderProvider };
