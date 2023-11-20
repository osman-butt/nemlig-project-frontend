import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
// import Navbar from "../components/Navbar";

function BasketPage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default BasketPage;
