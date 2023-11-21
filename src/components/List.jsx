import { useState } from "react";
import Listitem from "./Listitem";

function List() {
  // TEST DATA
  //   const data = [
  //     {
  //       id: 1,
  //       product_name: "JORDBÆRMARMELADE",
  //       product_underline: "285 GR. / EASIS",
  //       images: [
  //         {
  //           image_id: 1,
  //           image_link:
  //             "https://d2dql7oeescq6w.cloudfront.net/100004/1-small-OJq52ElK9p.webp",
  //         },
  //       ],
  //       prices: [
  //         {
  //           price_id: 1,
  //           price: 12.5,
  //         },
  //         {
  //           price_id: 2,
  //           price: 10,
  //         },
  //       ],
  //       quantity: 2,
  //     },
  //     {
  //       id: 2,
  //       product_name: "KIRSEBÆRSAUCE",
  //       product_underline: "530 GR. / KLASSISK",
  //       images: [
  //         {
  //           image_id: 2,
  //           image_link:
  //             "https://d2dql7oeescq6w.cloudfront.net/100021/1-small-bJ9YabA09L.webp",
  //         },
  //       ],
  //       prices: [
  //         {
  //           price_id: 3,
  //           price: 21.95,
  //         },
  //       ],
  //       quantity: 3,
  //     },
  //     {
  //       id: 3,
  //       product_name: "SOLTØRREDE TOMATER",
  //       product_underline: "100 GR. / ",
  //       images: [
  //         {
  //           image_id: 3,
  //           image_link:
  //             "https://d2dql7oeescq6w.cloudfront.net/100061/1-small-Z8qplNkAq3.webp",
  //         },
  //       ],
  //       prices: [
  //         {
  //           price_id: 4,
  //           price: 12,
  //         },
  //       ],
  //       quantity: 4,
  //     },
  //     {
  //       id: 4,
  //       product_name: "Diverse",
  //       product_underline: "100 GR. / ",
  //       images: [
  //         {
  //           image_id: 3,
  //           image_link:
  //             "https://d2dql7oeescq6w.cloudfront.net/100061/1-small-Z8qplNkAq3.webp",
  //         },
  //       ],
  //       prices: [
  //         {
  //           price_id: 4,
  //           price: 199.95,
  //         },
  //       ],
  //       quantity: 1,
  //     },
  //   ];

  // TEST DATA WITH STATE
  const [data, setData] = useState([
    {
      product_id: 1,
      product_name: "JORDBÆRMARMELADE",
      product_underline: "285 GR. / EASIS",
      images: [
        {
          image_id: 1,
          image_link:
            "https://d2dql7oeescq6w.cloudfront.net/100004/1-small-OJq52ElK9p.webp",
        },
      ],
      prices: [
        {
          price_id: 1,
          price: 12.5,
        },
        {
          price_id: 2,
          price: 10,
        },
      ],
      quantity: 2,
    },
    {
      product_id: 2,
      product_name: "KIRSEBÆRSAUCE",
      product_underline: "530 GR. / KLASSISK",
      images: [
        {
          image_id: 2,
          image_link:
            "https://d2dql7oeescq6w.cloudfront.net/100021/1-small-bJ9YabA09L.webp",
        },
      ],
      prices: [
        {
          price_id: 3,
          price: 21.95,
        },
      ],
      quantity: 3,
    },
    {
      product_id: 3,
      product_name: "SOLTØRREDE TOMATER",
      product_underline: "100 GR. / ",
      images: [
        {
          image_id: 3,
          image_link:
            "https://d2dql7oeescq6w.cloudfront.net/100061/1-small-Z8qplNkAq3.webp",
        },
      ],
      prices: [
        {
          price_id: 4,
          price: 12,
        },
      ],
      quantity: 4,
    },
    {
      product_id: 4,
      product_name: "Diverse",
      product_underline: "100 GR. / ",
      images: [
        {
          image_id: 3,
          image_link:
            "https://d2dql7oeescq6w.cloudfront.net/100061/1-small-Z8qplNkAq3.webp",
        },
      ],
      prices: [
        {
          price_id: 4,
          price: 199.95,
        },
      ],
      quantity: 1,
    },
  ]);

  // Function to add quantity
  const addQuantity = product_id => {
    const productIndex = data.findIndex(item => item.product_id === product_id);

    const updatedData = [...data];
    updatedData[productIndex] = {
      ...updatedData[productIndex],
      quantity: updatedData[productIndex].quantity + 1,
    };

    setData(updatedData);
  };

  // Function to deduct quantity
  const deductQuantity = product_id => {
    const productIndex = data.findIndex(item => item.product_id === product_id);

    const updatedData = [...data];
    updatedData[productIndex] = {
      ...updatedData[productIndex],
      quantity: updatedData[productIndex].quantity - 1,
    };

    updatedData[productIndex].quantity === 0 &&
      updatedData.splice(productIndex, 1);

    setData(updatedData);
  };
  return (
    <div className="max-w-[900px] p-4 mt-[-96px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="flex flex-row justify-center mt-20 bg-[#e8e3d8] rounded">
        <section className="container w-full p-4 mb-4 rounded md:p-10">
          <h1 className="pb-2 text-4xl text-left md:pb-4">Din kurv</h1>
          <table className="w-[100%] select-none" id="basket">
            <thead className="border-b-2 border-black">
              <tr className="text-left">
                <th className="hidden md:block"></th>
                <th></th>
                <th></th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody className="">
              {data.length > 0 &&
                data.map(product => (
                  <Listitem
                    key={product.product_id}
                    product={product}
                    addQuantity={addQuantity}
                    deductQuantity={deductQuantity}
                  />
                ))}
            </tbody>
          </table>
          {data.length === 0 && (
            <p className="pt-2 text-xl font-bold">Kurven er tom!</p>
          )}
          <div className="flex flex-col justify-between gap-2 pt-4 md:items-end">
            <div className="flex flex-row justify-between md:gap-4 md:w-[300px]">
              <p>Varer i alt: {data.reduce((a, c) => c.quantity + a, 0)} stk</p>
              <p>
                {data.length > 0
                  ? data
                      .reduce(
                        (a, c) =>
                          c.quantity *
                            (c.prices.length > 1
                              ? c.prices[1].price
                              : c.prices[0].price) +
                          a,
                        0
                      )
                      .toFixed(2)
                  : "0.00"}{" "}
                kr.
              </p>
            </div>
            <div className="flex flex-row justify-between border-b-2 pb-2 border-black md:gap-4 md:w-[300px]">
              <p>Levering</p>
              {data.length > 0 ? <p>59.00 kr.</p> : <p> 0.00 kr.</p>}
            </div>
            <div className="flex flex-row justify-between text-xl font-bold md:gap-4 md:w-[300px]">
              <p>I alt</p>
              <p>
                {data.length > 0
                  ? (
                      data.reduce(
                        (a, c) =>
                          c.quantity *
                            (c.prices.length > 1
                              ? c.prices[1].price
                              : c.prices[0].price) +
                          a,
                        0
                      ) + 59
                    ).toFixed(2)
                  : "0.00"}{" "}
                kr.
              </p>
            </div>
            {data.length > 0 && (
              <button
                onClick={() => console.log("BESTILT")}
                className={`bg-[#d4793a] hover:bg-[#ecbc9a] text-white font-bold text-xl py-2 mt-2 rounded md:w-[300px] ${
                  data.length === 0 && "disabled cursor-not-allowed"
                }`}
              >
                Bestil
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default List;
