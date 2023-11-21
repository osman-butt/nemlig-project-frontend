import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Confirm from "../components/Confirm";
import "../index.css";

export default function Orderpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <Navbar />
      <Confirm />
      <Footer />
    </div>
  );
}
