import image from "../../assets/hero.jpg";
import Footer from "../../components/Footer";
import CartContainer from "./container/CartContainer";

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
