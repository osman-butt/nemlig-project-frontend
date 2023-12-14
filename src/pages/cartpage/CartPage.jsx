import image from "../../assets/hero.jpg";
import CartContainer from "./container/CartContainer.jsx";

function CartPage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CartContainer />
    </div>
  );
}

export default CartPage;
