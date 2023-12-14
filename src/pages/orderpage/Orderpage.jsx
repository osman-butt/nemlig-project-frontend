import image from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Confirm from "./Confirm";

export default function Orderpage() {
  return (
    <>
      <div
        className="h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Navbar />
        <Confirm />
      </div>
      <Footer />
    </>
  );
}
