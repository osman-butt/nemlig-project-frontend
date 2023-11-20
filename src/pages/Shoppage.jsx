import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Items from "../components/Items";

export default function Shoppage() {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Navbar />
      <Items />
      <Footer />
    </div>
  );
}
