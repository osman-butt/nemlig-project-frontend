import image from "../../assets/hero.jpg";
import CheckoutList from "./CheckoutList";
import Footer from "../../components/Footer";

function CheckoutPage() {
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
