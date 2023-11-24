import { useState, useEffect } from "react";
import Card from "./Card";

export default function Items({ addToBasket }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/products.json");
        const data = await response.json();
        const dataArray = Object.values(data)[0];
        setData(dataArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="grid justify-center grid-cols-1 gap-4 p-4 mt-4 rounded sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1100px]:grid-cols-5">
        {data.map(item => (
          <Card key={item.product_id} data={item} addToBasket={addToBasket} />
        ))}
      </div>
    </div>
  );
}
