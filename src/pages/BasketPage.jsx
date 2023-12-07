import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import List from "../components/List";
// import Navbar from "../components/Navbar";

function BasketPage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <List />
      <Footer />
    </div>
  );
}

export default BasketPage;
