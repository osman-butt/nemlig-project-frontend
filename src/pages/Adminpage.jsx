import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Adminhead from "../components/Adminhead";
import Search from "../components/Search";
import Admintable from "../components/Admintable";

export default function Adminpage() {
  return (
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}>
        <Adminhead />
        <Search />
        <Admintable />
        <Footer />
      </div>
  );
}