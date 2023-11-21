import image from "../assets/hero.jpg";
import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Items from "../components/Items";
import Footer from "../components/Footer";

export default function FavoritePage() {
  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <Header2 />
        <Navbar />
        <Search />
        <Items />
      </div>
      <Footer />
    </>
  );
}
