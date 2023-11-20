import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Listitem() {
  return (
    <>
      <tr className="text-left text-[14px] border-gray-500 border-b">
        <td className="w-[20%] hidden md:block" data-field="name">
          <div className="flex items-center py-2 align-middle">
            <img
              className="w-[30px] "
              src="https://d2dql7oeescq6w.cloudfront.net/100004/1-small-OJq52ElK9p.webp"
              alt="product-img"
            />
          </div>
        </td>
        <td className="w-[40%] py-4" data-field="product-name">
          <p className="w-[135px] font-bold truncate md:hidden">
            JORDBÆRMARMELADE
          </p>
          <p className="hidden font-bold md:block">JORDBÆRMARMELADE </p>
          <p className="font-light opacity-70">285 GR. / EASIS</p>
        </td>
        <td className="w-[20%]" data-field="price">
          <p className="line-through">12.50 kr.</p>
          <p className="font-bold">10.00 kr.</p>
        </td>
        <td className="w-[10%] text-center" data-field="toggle-quantity">
          <div className="flex flex-row items-center justify-center align-middle">
            <CiCircleMinus
              size={30}
              onClick={() => console.log("Minus clicked")}
            />
            <p className="mx-1 w-[30px] py-1 px-1 bg-[#58644c] rounded-full font-bold text-white">
              {1}
            </p>
            <CiCirclePlus
              size={30}
              onClick={() => console.log("Plus clicked")}
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default Listitem;
