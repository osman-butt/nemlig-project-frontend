import image from "../../assets/hero.jpg";
import CheckoutList from "./CheckoutList.jsx";
import Footer from "../../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCart from "../../hooks/useCart.js";

function CheckoutPage() {
  const navigate = useNavigate();

  const { cart } = useCart();

  useEffect(() => {
    cart?.length === 0 && navigate("/cart");
  }, []);

  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CheckoutList />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
