import { useState, useEffect } from "react";
import Card from "./Card";

export default function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/test-data.json");
        const data = await response.json();
        const dataArray = Object.values(data);
        setData(dataArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <Card data={data} />;

}
