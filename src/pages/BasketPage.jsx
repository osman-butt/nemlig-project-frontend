import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import List from "../components/List";
// import Navbar from "../components/Navbar";

function BasketPage({ basket, addQuantity, deductQuantity }) {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <List
        basket={basket}
        addQuantity={addQuantity}
        deductQuantity={deductQuantity}
      />
      <Footer />
    </div>
  );
}

export default BasketPage;
