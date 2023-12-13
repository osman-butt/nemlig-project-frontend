import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import OrderContext from "../context/OrderProvider";
import ButtonFullPrimary from "./buttons/ButtonFullPrimary";

export default function Confirm() {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    !order && navigate("/cart");
  }, []);

  return (
    <div className="max-w-[1240px] w-[80%] m-auto flex items-start text-center justify-center lg:mt-40 mt-10 ">
      <div className="w-full md:w-[60%] max-w-[600px] bg-[#e8e3d8] rounded-[8px] p-6 flex flex-col">
        <div className="mb-10 text-3xl font-normal text-black font-general lg:text-4xl lg:mb-20">
          Ordrebekræftelse
        </div>

        <p className="mb-8 text-lg font-bold text-black font-general lg:text-xl lg:mb-12">
          Tak for din ordre!
          <br />
          <br />
          Dit ordrenummer er {order}.
        </p>
        <div className="mt-auto">
          <Link to="/">
            <ButtonFullPrimary>Tilbage til forsiden</ButtonFullPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
}
