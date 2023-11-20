import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shoppage() {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Navbar />
      <h1>Nyt view her - nok en komponent der viser JSON dataen.</h1>
      <Footer />
    </div>
  );
}
