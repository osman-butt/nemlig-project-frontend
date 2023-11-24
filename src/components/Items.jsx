import Card from "./Card";

export default function Items({ addToBasket, products }) {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="grid justify-center grid-cols-1 gap-4 p-4 mt-4 rounded sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1100px]:grid-cols-5">
        {products.map(item => (
          <Card key={item.product_id} data={item} addToBasket={addToBasket} />
        ))}
      </div>
    </div>
  );
}
