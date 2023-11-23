import { useState, useEffect } from "react";
import Table from "./Table";

export default function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/test-data.json");
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
    <p>
      {data.map((item) => (
        <Table key={item.product_id} data={item} />
      ))}
    </p>
  );
}
