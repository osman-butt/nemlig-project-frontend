import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import OrderContext from "../../context/OrderProvider";
import Container from "../../components/container/Container";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";

export default function Confirm() {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    !order && navigate("/cart");
  }, []);

  return (
    <Container maxWidth={"600px"}>
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
        <ButtonPrimary onClick={() => navigate("/shop")}>
          Se udvalget
        </ButtonPrimary>
      </div>
    </Container>
  );
}
