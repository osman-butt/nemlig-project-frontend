import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function Shoppage() {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Navbar />
      <Search />
      <h1>Nyt view her - nok en komponent der viser JSON dataen.</h1>
      <Footer />
    </div>
  );
}
