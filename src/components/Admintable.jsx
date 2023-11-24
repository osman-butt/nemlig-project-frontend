import React from "react";
import { useState, useEffect } from "react";
import Table from "./Table";
import Createdialog from "./Createdialog";

export default function Items() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

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
    <div className="mb-20 mx-24">
      {dialogOpen && <Createdialog closeDialog={closeDialog} />}

      <button
        onClick={openDialog}
        className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md my-4 ml-3 py-2 text-black font-medium text-xl"
      >
        Tilføj
      </button>
      {data.map((item) => (
        <React.Fragment key={item.product_id}>
          <Table data={item} />
        </React.Fragment>
      ))}
    </div>
  );
}
