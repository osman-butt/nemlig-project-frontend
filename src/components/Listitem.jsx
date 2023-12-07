import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import useCart from "../hooks/useCart";

function Listitem({ product }) {
  const { incrementCartItem, decrementCartItem } = useCart();
  return (
    <>
      <tr className="text-left text-[14px] border-gray-500 border-b">
        <td className="w-[20%] hidden md:block" data-field="name">
          <div className="flex items-center py-2 align-middle">
            <img
              className="w-[30px] "
              src={product.images[0].image_url}
              alt="product-img"
            />
          </div>
        </td>
        <td className="w-[40%] py-4" data-field="product-name">
          <p className="w-[135px] font-bold truncate md:hidden">
            {product.product_name}
          </p>
          <p className="hidden font-bold md:block">{product.product_name}</p>
          <p className="font-light">{product.product_underline}</p>
        </td>
        <td className="w-[20%]" data-field="price">
          {product.prices.length > 1 ? (
            <>
              <p className="line-through">
                {product.prices[0].price.toFixed(2)} kr.
              </p>
              <p className="font-bold">
                {product.prices[1].price.toFixed(2)} kr.
              </p>
            </>
          ) : (
            <p className="font-bold">
              {product.prices[0].price.toFixed(2)} kr.
            </p>
          )}
        </td>
        <td className="w-[10%] text-center" data-field="toggle-quantity">
          <div className="flex flex-row items-center justify-center align-middle">
            <CiCircleMinus
              size={30}
              onClick={() => decrementCartItem(product)}
            />
            <p className="mx-1 w-[30px] py-1 px-1 bg-[#58644c] rounded-full font-bold text-white">
              {product.quantity}
            </p>
            <CiCirclePlus
              size={30}
              onClick={() => incrementCartItem(product)}
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default Listitem;
