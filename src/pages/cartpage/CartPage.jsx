import image from "../../assets/hero.jpg";
import Footer from "../../components/Footer.jsx";
import CartContainer from "./container/CartContainer.jsx";

function CartPage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CartContainer />
      <Footer />
    </div>
  );
}

export default CartPage;
